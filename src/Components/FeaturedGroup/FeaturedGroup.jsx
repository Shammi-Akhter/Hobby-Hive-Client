import React, { useEffect, useState } from 'react';

const FeaturedGroup = () => {
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
    <div>
      <h1 className="text-2xl font-bold mb-4">Featured Hobby Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hobbies.map((hobby) => (
          <div key={hobby._id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{hobby.groupName}</h2>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;
