import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
    const { data: task, isLoading } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='min-h-screen'>
            <div className='w-3/4 mx-auto'>
            <p className='text-xl font-bold m-4 text-purple-600'>All Tasks are here</p>
                {
                    task?.map(t => <div key={t._id}>
                        <div className="card w-full rounded-lg bg-slate-800 hover:bg-slate-900 p-4 mb-2">
                            <span className='text-sm text-blue-700 font-bold'>{t?.title}</span>
                            <span>{t?.description}</span>
                            <span className='text-right mr-6 text-sm'>{t?.date}</span>
                        </div>
                    </div>)
                }
                <Link to="/toDo" className='btn btn-sm btn-secondary hover:text-white m-8'>Add your Task</Link>
            </div>
        </div>
    );
};

export default Home;