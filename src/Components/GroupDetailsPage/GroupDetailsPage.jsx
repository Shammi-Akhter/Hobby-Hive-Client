import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const GroupDetailsPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await fetch(`http://localhost:5000/hobby-groups/${id}`);

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
      alert(`You joined the group: ${group.groupName}`);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!group) {
    return <div className="text-center mt-10">Group not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{group.groupName}</h1>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {group.description}</p>
      <p className="text-gray-700 mb-2"><strong>Category:</strong> {group.category}</p>
      <p className="text-gray-700 mb-2"><strong>Members:</strong> {group.maxMembers}</p>
      <p className="text-gray-700 mb-2"><strong>Group Start Date</strong> {group.startDate}</p>
      <p className="text-gray-700 mb-6"><strong>Location:</strong> {group.meetingLocation || "N/A"}</p>

      <button
        onClick={handleJoinGroup}
        className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-amber-500 cursor-pointer transition"
      >
        Join Group
      </button>
    </div>
  );
};

export default GroupDetailsPage;
