import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router';
import { FiEdit } from 'react-icons/fi';
const MyGroupPage = () => {
    const { user } = useAuth();
    const [myGroups, setMyGroups] = useState([]);

    useEffect(() => {
        console.log("User email:", user?.email);
        const fetchGroups = async () => {
            try {
                const res = await fetch(`https://hobby-api-6fhj.onrender.com/my-groups?email=${user?.email}`);
                const data = await res.json();
                setMyGroups(data);
            } catch (err) {
                console.error('Fetch failed:', err);
            }
        };

        if (user?.email) fetchGroups();
    }, [user]);

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this group?');
        if (!confirm) return;

        try {
            const res = await fetch(`https://hobby-api-6fhj.onrender.com/groups/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setMyGroups((prev) => prev.filter((group) => group._id !== id));
                alert('Deleted successfully');
            } else {
                alert('Failed to delete');
            }
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    return (
        <div className=' '>
            <div className="container max-w-6xl mx-auto  p-6 md:h-[400px] md:pt-12">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">My Groups</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-400 p-2 text-blue-500">Group Name</th>
                                <th className="border p-2 border-gray-400 text-amber-500">Category</th>
                                <th className="border  border-gray-400 p-2 text-blue-500">Location</th>
                                <th className="border p-2 border-gray-400 text-amber-500">Start Date</th>
                                <th className="border  border-gray-400 p-2 text-blue-500">Max Members</th>
                                <th className="border p-2 border-gray-400 text-amber-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="my-table">
                            {myGroups.map(group => (
                                <tr key={group._id}>
                                    <td className="border p-2 border-gray-400">{group.groupName}</td>
                                    <td className="border p-2 border-gray-400">{group.category}</td>
                                    <td className="border p-2 border-gray-400 text-center">{group.location}</td>
                                    <td className="border p-2 border-gray-400 text-center">{group.startDate}</td>
                                    <td className="border p-2 border-gray-400 text-center">{group.maxMembers}</td>
                                    <td className="border p-2 border-gray-400 space-x-2 flex justify-center items-center">
                                        <Link
                                            to={`/update-group/${group._id}`}
                                            state={{ group }}
                                        >
                                            <button
                                                className="bg-yellow-500 text-white px-2 py-1 rounded cursor-pointer flex items-center gap-1"
                                            >
                                                 <FiEdit /> Update
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                                            onClick={() => handleDelete(group._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {myGroups.length === 0 && <p className="text-center mt-4 text-gray-500">No groups created yet.</p>}
                </div>
            </div>
        </div>
    );
};

export default MyGroupPage;
