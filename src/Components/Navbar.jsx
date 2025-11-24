import React from 'react';
import ThemeToggle from './ThemeToggle';
import { NavLink } from 'react-router';
import { ImHome } from 'react-icons/im';
import { FcHome } from 'react-icons/fc';
import home from '../assets/icons8-home-64.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>All Properties</NavLink>
                        <NavLink to='/'>Add Properties</NavLink>
                        <NavLink to='/'>My Properties</NavLink>
                        <NavLink to='/'>My Ratings</NavLink>
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-1">
                   
                            <img
                            className='w-10 h-10' 
                            src={home} alt="" />

                    <a className=" text-2xl font-bold ">
                        Home<span className='text-primary'>Nest</span></a>


                </div>
            </div>
            <div className="hidden navbar-center lg:flex gap-5">
                <ul className="">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>All Properties</NavLink>
                    <NavLink to='/'>Add Properties</NavLink>
                    <NavLink to='/'>My Properties</NavLink>
                    <NavLink to='/'>My Ratings</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn btn-primary">Login</a>
                <a className="btn btn-accent">Logout</a>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Navbar;