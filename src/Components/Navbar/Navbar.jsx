import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext'; // ✅ Correct



const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, loading, logout } = useContext(AuthContext);
    return (
        <div className='bg-base-100 '>
            <div className="container mx-auto navbar lg:flex">
                <div className="navbar-start">
                    <Link to='/' ><img className='lg:w-[200px] sm:w-[100px]' src="https://i.postimg.cc/QMkgVJbf/logo-2.png" alt="" /></Link>
                    
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5">
                        <NavLink to="/" className="cursor-pointer text-amber-400">Home</NavLink>
                        <NavLink
                            to="/all-groups"
                            className="cursor-pointer text-amber-400"
                        >
                           All Groups
                        </NavLink>
                        {user && <NavLink to="/my-group-page" className="cursor-pointer text-amber-400">My Group's Page</NavLink>}
                        {user && <NavLink to="/create-group" className="cursor-pointer text-amber-400">Create Group</NavLink>}
                        {user && <NavLink to="/update-group" className="cursor-pointer text-amber-400">Update Group</NavLink>}
                    </ul>
                </div>


                <div className="navbar-end hidden lg:flex gap-2 items-center">
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : user ? (
                        <>
                            <div className="relative group">
                                <img
                                    src={user.photoURL}
                                    alt="user"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-3 py-1 text-sm font-bold bg-orange-400 text-white rounded hidden group-hover:block whitespace-nowrap z-50">
                                    {user.displayName}
                                </span>
                            </div>
                            <button onClick={logout} className="btn btn-sm bg-red-500 text-white rounded-2xl">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn rounded-2xl bg-amber-400 text-white">Log In</Link>
                            <Link to="/register" className="btn rounded-2xl bg-amber-400 text-white">Register</Link>
                        </>
                    )}
                </div>


                <div className="lg:hidden navbar-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="btn btn-ghost text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>


            {isMenuOpen && (
                <div className="lg:hidden px-6 pb-4">
                    <ul className="space-y-3 text-blue-600 text-sm text-center">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block">Home</NavLink>
                        <NavLink
                            to="/#upcoming-events"
                            className="cursor-pointer text-amber-400"
                        >
                            Ongoing Groups
                        </NavLink>
                        {user && <NavLink to="/my-group-page" onClick={() => setIsMenuOpen(false)} className="block">My Group's Page</NavLink>}
                        {user && <NavLink to="/create-group" onClick={() => setIsMenuOpen(false)} className="block">Create Group</NavLink>}
                        {user && <NavLink to="/update-group" onClick={() => setIsMenuOpen(false)} className="block">Update Group</NavLink>}
                    </ul>

                    <div className="mt-4 flex flex-col gap-2 text-center">
                        {loading ? (
                            <span className="loading loading-spinner loading-sm mx-auto"></span>
                        ) : user ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="relative group">
                                    <img
                                        src={user.photoURL}
                                        alt="user"
                                        className="w-8 h-8 rounded-full cursor-pointer"
                                    />
                                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-sm bg-black text-white rounded hidden group-hover:block whitespace-nowrap z-50">
                                        {user.displayName}
                                    </span>
                                </div>
                                <button onClick={logout} className="btn btn-sm bg-blue-400 text-white rounded-2xl">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="btn bg-amber-400 text-white rounded-2xl">Log In</Link>
                                <Link to="/register" onClick={() => setIsMenuOpen(false)} className="btn bg-amber-400 text-white rounded-2xl">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default Navbar;