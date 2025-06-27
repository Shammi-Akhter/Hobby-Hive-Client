import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const navLinks = [
  { to: '', label: 'Overview' },
  { to: 'all-items', label: 'All Groups' },
  { to: 'add-item', label: 'Add Group' },
  { to: 'my-items', label: 'My Group' },
];

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className=" flex flex-col bg-gray-100 overflow-visible">
      <Navbar />
      <div className="flex flex-1 mt-16">
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg p-6 z-30">
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
            <NavLink to="/" ><button className="cursor-pointer text-blue-600 md:font-bold lg:p-4 " >Home</button></NavLink>
        </aside>
        <main className="flex-1 p-8 ml-64  relative z-30 overflow-visible">
          <Outlet />
        </main>
      </div>
      
    </div>
  );
};

export default Dashboard; 