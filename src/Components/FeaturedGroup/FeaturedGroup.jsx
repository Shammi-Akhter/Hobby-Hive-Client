import React, { useEffect, useState } from 'react';

const FeaturedGroup = () => {
  const [hobbies, setHobbies] = useState([]);
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
        const now = new Date();
        const upcomingGroups = data.filter((hobby) => {
          const groupDate = new Date(hobby.startDate);
          return groupDate > now;
        });

        upcomingGroups.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        const top6 = upcomingGroups.slice(0, 6);

        setHobbies(top6);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading hobbies...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-orange-500 mb-8 text-center">Featured Hobby Groups</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {hobbies.map((hobby) => (
          <div
            key={hobby._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-3 text-center">{hobby.groupName}</h2>
            <img className='md:w-full md:h-[200px]' src={hobby.image} alt="" /> <br />
            <p className="text-gray-700 flex-grow">{hobby.description}</p>
            <p className="mt-4 text-sm text-gray-500 italic">
              Date: {new Date(hobby.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;
