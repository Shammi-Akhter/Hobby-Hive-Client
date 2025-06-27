import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Overview = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ totalGroups: 0, myGroups: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const [allRes, myRes] = await Promise.all([
          fetch('https://hobby-hive-server.vercel.app/hobby-groups'),
          user?.email ? fetch(`https://hobby-hive-server.vercel.app/my-groups?email=${user.email}`) : Promise.resolve({ json: () => [] })
        ]);
        const allGroups = await allRes.json();
        const myGroups = user?.email ? await myRes.json() : [];
        setStats({ totalGroups: allGroups.length, myGroups: myGroups.length });
        setError(null);
      } catch {
        setError('Failed to load stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">{stats.totalGroups}</div>
            <div className="text-gray-600 mt-2">Total Groups</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-500">{stats.myGroups}</div>
            <div className="text-gray-600 mt-2">My Groups</div>
          </div>
        </div>
      )}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Logged-in User</h3>
        {user ? (
          <div>
                        <div><strong></strong> <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full" /></div>

            <div><strong>Name:</strong> {user.displayName || 'N/A'}</div>
            <div><strong>Email:</strong> {user.email}</div>
          </div>
        ) : (
          <div>No user data available.</div>
        )}
      </div>
    </div>
  );
};

export default Overview; 