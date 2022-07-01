import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Loading from './Loading';

const CompletedTasks = () => {

    const { data: task, isLoading } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-screen'>

            <div className='w-3/4 mx-auto'>
                <h1 className='font-bold text-purple-600 text-2xl mt-4'>All Completed Task:</h1>
                {
                    task?.filter(t => t.completed === true).map(t => <div key={t._id}>
                        <div className="card mt-8 rounded-lg bg-slate-800 hover:bg-slate-900 p-4 mb-2">
                            <span className='text-sm text-blue-700 font-bold'>{t?.title}</span>
                            <span>{t?.description}</span>
                            <span className='text-right mr-6 text-sm'>{t?.date}</span>
                            <span><AiOutlineCheckCircle className='text-green-500'></AiOutlineCheckCircle></span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompletedTasks;