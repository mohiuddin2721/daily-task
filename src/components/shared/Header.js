import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navbarItems = <>
        <li className='mx-auto lg:mr-4'><Link to=" ">Completed Tasks</Link></li>
        <li className='mx-auto lg:mr-4'><Link to=" ">To-Do</Link></li>
        <li className='mx-auto lg:mr-4'><Link to=" ">Calendar</Link></li>
    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">My Daily Task</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;