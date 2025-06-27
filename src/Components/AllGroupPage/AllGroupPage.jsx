import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router'; 

const AllGroupPage = () => {
  const [hobbies, setHobbies] = useState([]);
  const [filteredHobbies, setFilteredHobbies] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    fetch('https://hobby-hive-server.vercel.app/hobby-groups')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch hobby groups');
        }
        return res.json();
      })
      .then((data) => {
        setHobbies(data);
        setFilteredHobbies(data); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    let updated = [...hobbies];

    
    if (searchTerm) {
      updated = updated.filter((hobby) =>
        hobby.groupName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

   
    updated.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.groupName.localeCompare(b.groupName);
      } else {
        return b.groupName.localeCompare(a.groupName);
      }
    });

    setFilteredHobbies(updated);
  }, [searchTerm, sortOrder, hobbies]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <Helmet>
        <title>AllGroupPage | HobbyHive</title>
      </Helmet>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-gray-600 font-bold mb-6 text-center">
          All Hobby Groups
        </h1>

     
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by group name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-md w-full sm:w-1/2"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-5 py-2 border rounded-md"
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredHobbies.map((hobby) => (
            <div
              key={hobby._id}
              className="p-5 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 all-group-card"
            >
              <h2 className="text-xl text-amber-500 font-semibold mb-2">
                {hobby.groupName}
              </h2>
              <img className="md:w-full md:h-[100px]" src={hobby.image} alt="" />
              <p className="text-gray-600 mb-4 line-clamp-3">{hobby.description}</p>
              <Link
                to={`/group-details-page/${hobby._id}`}
                className="inline-block px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-400 transition"
              >
                See More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGroupPage;
