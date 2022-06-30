import React from 'react';
import { useQuery } from 'react-query';

const Home = () => {
    const { data: task, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/task').then(res => res.json()));
    return (
        <div className='min-h-screen'>
            
        </div>
    );
};

export default Home;