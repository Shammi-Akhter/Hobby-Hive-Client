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
                        <NavLink to='/' className='text-blue-500 lg:font-bold hover: cursor-pointer'>Home</NavLink>
                        <NavLink to='/all-groups' className='text-blue-500 lg:font-bold hover: cursor-pointer'>All Groups</NavLink>                       
                        <NavLink to='/my-groups' className='text-blue-500 lg:font-bold hover: cursor-pointer'> My groups </NavLink>
                        <NavLink to='/create-groups' className='text-blue-500 lg:font-bold hover: cursor-pointer'> Create groups </NavLink>

                    </ul>
                </div>
                <div className="navbar-end lg:flex gap-4 ">
               <NavLink to='/login' className='btn cursor-pointer bg-blue-400 text-white rounded-3xl'> Log In</NavLink>
               
              
                </div>
            </div>
        </div>
    );
};

export default Navbar;