import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ToDo = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const current = new Date();

    const onSubmit = (data, e) => {
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const task = {
            title: data.title,
            description: data.description,
            date: date
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
        })
        
    };

    return (
        <div className='h-screen'>
            <h1 className='font-bold text-purple-600 text-2xl mt-4 ml-8'>Add Your daily tasks</h1>
            <div className='mt-10 ml-10'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full max-w-xs"
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
                            className="input input-bordered w-full max-w-xs"
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
        </div>
    );
};

export default ToDo;