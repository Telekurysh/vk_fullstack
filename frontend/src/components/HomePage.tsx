import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../app/store';
import {News} from '../features/news/newsSlice';
import {fetchNews} from '../features/news/newsSlice';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.news.data);

    useEffect(() => {
        // Fetch news logic remains the same
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {news.map((item: News) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>{item.pub_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;