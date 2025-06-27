import React, { useEffect, useState } from 'react';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://hobby-hive-server.vercel.app/hobby-groups');
        if (!res.ok) throw new Error('Failed to fetch groups');
        const data = await res.json();
        setItems(data);
        setError(null);
      } catch {
        setError('Failed to load groups');
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">All Groups</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-gray-50 rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Location</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">Max Members</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b">{item.groupName}</td>
                  <td className="py-2 px-4 border-b text-center">{item.category}</td>
                  <td className="py-2 px-4 border-b text-center">{item.location}</td>
                  <td className="py-2 px-4 border-b text-center">{item.startDate}</td>
                  <td className="py-2 px-4 border-b text-center">{item.maxMembers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllItems; 