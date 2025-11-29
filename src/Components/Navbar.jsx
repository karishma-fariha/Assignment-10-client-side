import React, { use } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link, NavLink } from 'react-router';
import { ImHome } from 'react-icons/im';
import home from '../assets/icons8-home-64.png';
import { AuthContext } from '../Provider/AuthContext';
import userImg from '../assets/user.png';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = use(AuthContext);


    // log out
    const handleLogout = () => {
        // console.log('logout')
        logout().then(() => {
            toast('You Logout Successfully..');
        }).catch((error) => {
            alert(error)
            toast(error);
            // An error happened.
        });;
    }
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
                        <NavLink to='/allProperties'>All Properties</NavLink>
                        <NavLink to='/addProperties'>Add Properties</NavLink>
                        <NavLink to='/myProperties'>My Properties</NavLink>
                        <NavLink to='/myRatings'>My Ratings</NavLink>
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <img className='md:w-10 md:h-10 w-7 h-7'
                        src={home} alt="" />

                    <a className=" md:text-3xl text-xl font-bold "><span className='text-primary'>Home</span>Nest</a>


                </div>
            </div>
            <div className="hidden navbar-center lg:flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allProperties'>All Properties</NavLink>
                <NavLink to='/addProperties'>Add Properties</NavLink>
                <NavLink to='/myProperties'>My Properties</NavLink>
                <NavLink to='/myRatings'>My Ratings</NavLink>
            </div>
            <div className="navbar-end flex gap-3">
                <img className='md:w-10 w-7 md:h-10 h-7 rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" />
                {user ?
                    <button onClick={handleLogout} className='btn btn-primary md:px-14'>LogOut</button>
                    :
                    <div className="md:flex md:gap-4">
                        <Link to="/auth/login" className='btn btn-primary hover:btn-secondary md:px-14'>
                            Login</Link>
                        <Link to="/auth/register" className='btn border-2 border-primary hover:btn-secondary md:px-14'>
                            Registration</Link>
                    </div>
                }
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Navbar;