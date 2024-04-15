import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchNews = async () => {
    const response = await axios.get(`${API_URL}/news/`);
    return response.data;
};

export const fetchNewsById = async (id: number) => {
    const response = await axios.get(`${API_URL}/news/${id}/`);
    return response.data;
};