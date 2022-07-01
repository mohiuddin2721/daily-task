import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';

const EditeTask = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: task, isLoading, refetch} = useQuery('/task/:id', () => 
    fetch(`http://localhost:5000/task/${id}`)
    .then(res => res.json()));

    // console.log(task);

    if(isLoading){
        return <Loading></Loading>
    }

    const onSubmit = (data, e) => {
        const task = {
            title: data.title,
            description: data.description
        }
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Wow!!Your task updated successfully!!!')
            e.target.reset();
            refetch()
        })
    };

    return (
        <div className='min-h-screen'>
            <div className='w-3/4 mx-auto'>
                <p className='font-bold text-purple-600 text-2xl mt-4 mb-10'>You can update your Task.</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder={`${task.title}`}
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
                            placeholder={`${task.description}`}
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
                    <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="Update The Task" />
                </form>
            </div>
        </div>
    );
};

export default EditeTask;