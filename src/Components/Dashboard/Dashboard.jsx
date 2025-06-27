import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const navLinks = [
  { to: '', label: 'Overview' },
  { to: 'all-items', label: 'All Groups' },
  { to: 'add-item', label: 'Create Group' },
  { to: 'my-items', label: 'My Group' },
];

const Dashboard = () => {
  const location = useLocation();
  return (
   <div>
     <Helmet>
            <title>AllGroupPage | HobbyHive</title>
          </Helmet>
    <div className=" flex flex-col bg-gray-100 overflow-visible">
      
      <div className="flex flex-1 ">
        <aside className="fixed top-0 left-0 h-[100vh] w-64 bg-white shadow-lg p-6 z-30">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded hover:bg-amber-300 transition ${location.pathname.endsWith(link.to) ? 'bg-amber-400 font-semibold' : ''}`}
                end={link.to === ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>
            <NavLink to="/" ><button className="flex items-center gap-1 cursor-pointer text-blue-600 md:font-bold lg:p-4 " ><FaHome/>Home </button></NavLink>
        </aside>
        <main className="flex-1 p-8 ml-64  relative z-30 overflow-visible">
          <Outlet />
        </main>
      </div>
      
    </div>
   </div>
  );
};

export default Dashboard; 