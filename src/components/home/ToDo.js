import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Loading from './Loading';

const ToDo = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const current = new Date();
    
    const { data: task, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = (data, e) => {
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const task = {
            title: data.title,
            description: data.description,
            date: date,
            completed: false
        }
        // console.log(task);
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast.success('Your task added successfully!!!')
                e.target.reset();
                refetch();
            })
    };

    return (
        <div className='min-h-screen'>
            <h1 className='font-bold text-purple-600 text-2xl mt-4 ml-8'>Add Your daily tasks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className='mt-10 ml-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full max-w-xs focus:border-blue-500"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Title is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.title?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <textarea
                                type="text"
                                placeholder="Type your task"
                                className="input input-bordered w-full max-w-xs focus:border-blue-500 h-24"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Task description is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description?.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="Add The Task" />
                    </form>
                </div>
                <div>
                    {
                        task?.filter(t => t.completed === false).map(t => <div key={t._id}>
                            <div className="card w-3/4 mx-auto rounded-lg bg-slate-800 hover:bg-slate-900 p-4 mb-2">
                                <span className='text-sm text-blue-700 font-bold'>{t?.title}</span> 
                                <span>{t?.description}</span>
                                <span className='text-right mr-6 text-sm'>{t?.date}</span>
                                <span><button><AiOutlineCheckCircle className='text-red-500'></AiOutlineCheckCircle></button></span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;