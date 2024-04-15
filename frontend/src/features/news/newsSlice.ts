import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchNews as fetchNewsApi} from '../../api/newsApi';

export interface News {
    id: number;
    title: string;
    author: string;
    pub_date: string;
}

interface NewsState {
    data: News[]; // Make sure data is an array of News items
    loading: boolean;
    error: string | null;
}


const initialState: NewsState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const response = await fetchNewsApi();
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch news');
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch news';
            });
    },
});

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;