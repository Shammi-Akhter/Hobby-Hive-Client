import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-100 '>
            <div className="container mx-auto navbar lg:flex">
                <div className="navbar-start">
                    <Link to='/' ><img className='lg:w-[200px] sm:w-[100px]' src="https://i.postimg.cc/QMkgVJbf/logo-2.png" alt="" /></Link>
                    
                </div>
                <div className="navbar-center  ">
                    <ul className="menu menu-horizontal px-1 lg:flex lg:flex-row gap-5 ">
                        <NavLink >Home</NavLink>
                        <NavLink>All Groups</NavLink>                       
                        <NavLink> My groups </NavLink>
                        <NavLink> Create groups </NavLink>

                    </ul>
                </div>
                <div className="navbar-end lg:flex gap-4 ">
               <Link className='btn cursor-pointer'> Log In</Link>
               <Link> Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;