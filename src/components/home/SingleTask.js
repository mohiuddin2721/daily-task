import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleTask = ({ t, completeButton, editedButton }) => {
    return (
        <div>
            <div className="card w-3/4 mx-auto rounded-lg bg-slate-800 hover:bg-slate-900 p-4 mb-2">
                <span className='text-sm text-blue-700 font-bold'>{t?.title}</span>
                <span>{t?.description}</span>
                <span className='text-right mr-6 text-sm'>{t?.date}</span>
                <span>
                    <button onClick={() => completeButton(t._id, t)}><AiOutlineCheckCircle className='text-red-500 mr-2 text-lg'></AiOutlineCheckCircle></button>
                    <Link to={`/task/${t._id}`}><button className='text-green-500 ml-6 text-lg'><FaRegEdit></FaRegEdit></button></Link>
                </span>
            </div>
        </div>
    );
};

export default SingleTask;