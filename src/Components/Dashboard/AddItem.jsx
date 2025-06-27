import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Others"
];

const CreateGroup = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        groupName: '',
        category: '',
        description: '',
        location: '',
        maxMembers: '',
        startDate: '',
        image: '',
        userName: '',
        userEmail: ''
    });

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                userName: user.displayName || '',
                userEmail: user.email || ''
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const res = await fetch('https://hobby-hive-server.vercel.app/create-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });

            if (res.ok) {
                toast.success('Group Created successfully!');

                navigate('/my-group-page');

                setFormData({
                    groupName: '',
                    category: '',
                    description: '',
                    location: '',
                    maxMembers: '',
                    startDate: '',
                    image: '',
                    userName: user.displayName || '',
                    userEmail: user.email || ''
                });
            } else {
                const err = await res.json();
                toast.error(`Failed: ${err.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Server error. Check console.');
        }
    };


    return (
        <div>
            <Helmet>
                <title>Create Group | HobbyHive</title>
            </Helmet>
            <div className="max-w-2xl rounded-2xl bg-white mx-auto p-4">
                <div>
                    <div className="p-4 space-y-4">
                        <h2 className="text-2xl font-bold text-center">Create <span className='text-cyan-600'>Hobby</span> Group</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="groupName"
                                placeholder="Group Name"
                                value={formData.groupName}
                                onChange={handleChange}
                                className="w-full border p-1 rounded"
                                required
                            />

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="">Select Hobby Category</option>
                                {hobbyCategories.map((cat) => (
                                    <option className='create-page-op' key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>

                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="text"
                                name="location"
                                placeholder="Meeting Location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="number"
                                name="maxMembers"
                                placeholder="Max Members"
                                value={formData.maxMembers}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="w-full border p-2 rounded bg-amber-500 hover:bg-amber-400 "
                                required
                            />

                            <input
                                type="url"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                readOnly
                                className="w-full border p-2 rounded "
                            />

                            <input
                                type="email"
                                name="userEmail"
                                value={formData.userEmail}
                                readOnly
                                className="w-full border p-2 rounded "
                            />

                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-400 text-white cursor-pointer font-semibold py-2 rounded-xl transition duration-200"
                            >
                                Create
                            </button>
                        </form>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default CreateGroup;
