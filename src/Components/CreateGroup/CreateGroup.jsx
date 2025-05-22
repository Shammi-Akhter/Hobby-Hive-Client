import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing"
];

const CreateGroup = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        groupName: '',
        category: '',
        description: '',
        location: '',
        maxMembers: '',
        startDate: '',
        imageUrl: '',
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
            console.log("Submitting to:", 'http://localhost:5000/create-group');

            const res = await fetch('http://localhost:5000/create-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
            });

            if (res.ok) {
                alert('Group created successfully!');
                // Reset form
                setFormData({
                    groupName: '',
                    category: '',
                    description: '',
                    location: '',
                    maxMembers: '',
                    startDate: '',
                    imageUrl: '',
                    userName: user.displayName || '',
                    userEmail: user.email || ''
                });
            } else {
                const err = await res.json();
                alert(`Failed: ${err.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Server error. Check console.');
        }
    };


    return (
        <div className="max-w-2xl mx-auto p-4">
            <div>
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-center">Create <span className='text-cyan-600'>Hobby</span> Group</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="groupName"
                            placeholder="Group Name"
                            value={formData.groupName}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
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
                                <option key={cat} value={cat}>{cat}</option>
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
                            className="w-full border p-2 rounded"
                            required
                        />

                        <input
                            type="url"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />

                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            readOnly
                            className="w-full border p-2 rounded bg-gray-100"
                        />

                        <input
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            readOnly
                            className="w-full border p-2 rounded bg-gray-100"
                        />

                        <button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition duration-200"
                        >
                            Create
                        </button>
                    </form>

                </div>
            </div>



        </div>
    );
};

export default CreateGroup;
