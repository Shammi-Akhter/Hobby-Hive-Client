import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllGroupPage = () => {
    const [hobbies, setHobbies] = useState();
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       fetch('http://localhost:5000/hobby-groups')
         .then((res) => {
           if (!res.ok) {
             throw new Error('Failed to fetch hobby groups');
           }
           return res.json();
         })
         .then((data) => {
           setHobbies(data);
           setLoading(false);
           console.log(data)
         })
         .catch((err) => {
           setError(err.message);
           setLoading(false);
         });
     }, []);
   
     if (loading) return <p>Loading hobbies...</p>;
     if (error) return <p>Error: {error}</p>;
   
     return (
      <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">All Hobby Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <div key={hobby._id} className="p-5 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white">
            <h2 className="text-xl font-semibold mb-2">{hobby.groupName}</h2>
            <img className='md:w-full md:h-[200px]' src={hobby.image} alt="" />
            <p className="text-gray-600 mb-4 line-clamp-3">{hobby.description}</p>
            <Link
              to={`/group-details-page/${hobby._id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
     );
};

export default AllGroupPage;