import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const GroupDetailsPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await fetch(`https://hobby-hive-server.vercel.app/hobby-groups/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setGroup(data);
      } catch (err) {
        console.error("Error fetching group:", err);
        setGroup(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [id]);

  const handleJoinGroup = () => {
    const now = new Date();
    const groupStartDate = new Date(group.startDate);

    if (groupStartDate < now) {
      toast.error("The group is no longer active.");
    } else {
      toast.success(`You joined the group: ${group.groupName}`);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!group) {
    return <div className="text-center mt-10">Group not found.</div>;
  }

  return (
 <div>
  <Helmet>
        <title>Group Details| HobbyHive</title>
      </Helmet>
     <div className="max-w-4xl mx-auto p-4 ">
      <div className='group-details-card md:p-10 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <img className='md:w-[300px] md:h-[200px] md:m-5' src={group.image} alt="" />
        </div>
        <h1 className="md:text-2xl font-bold text-center md:p-1  mb-4 md:mt-0 mt-4  border rounded-3xl">{group.groupName}</h1>
        <p className="text-gray-700 mb-2 "><strong>Description:</strong> {group.description}</p>
        <p className="text-gray-700 mb-2"><strong>Category:</strong> {group.category}</p>
        <p className="text-gray-700 mb-2"><strong>Members:</strong> {group.maxMembers}</p>
        <p className="text-gray-700 mb-2"><strong>Group Start Date</strong> {group.startDate}</p>
        <p className="text-gray-700 mb-6 "><strong>Location:</strong> {group.meetingLocation || "N/A"}</p>

        <button
          onClick={handleJoinGroup}
          className="px-6 py-2 bg-amber-500 text-white hover:bg-amber-400 cursor-pointer transition w-full rounded-3xl "
        >
          Join Group
        </button>
      </div>
    </div>
 </div>
  );
};

export default GroupDetailsPage;
