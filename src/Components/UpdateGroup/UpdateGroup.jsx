import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import toast from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

const hobbyCategories = [
  "Drawing & Painting", "Photography", "Video Gaming", "Fishing",
  "Running", "Cooking", "Reading", "Writing", "Others"
];


const InputWithIcon = ({ name, value, onChange, type = "text", placeholder, required }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border p-2 rounded pr-10"
    />
    <FiEdit className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

const UpdateGroup = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();


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
    if (location.state?.group) {
      const data = location.state.group;
      setFormData({
        groupName: data.groupName || '',
        category: data.category || '',
        description: data.description || '',
        location: data.location || '',
        maxMembers: data.maxMembers || '',
        startDate: data.startDate || '',
        image: data.image || '',
        userName: data.userName || '',
        userEmail: data.userEmail || ''
      });
    } else if (id) {
      (async () => {
        try {
          const res = await fetch(`https://hobby-hive-server.vercel.app/groups/${id}`);
          if (!res.ok) {
            toast.error('Group not found');
            return;
          }
          const data = await res.json();
          setFormData({
            groupName: data.groupName || '',
            category: data.category || '',
            description: data.description || '',
            location: data.location || '',
            maxMembers: data.maxMembers || '',
            startDate: data.startDate || '',
            image: data.image || '',
            userName: data.userName || '',
            userEmail: data.userEmail || ''
          });
        } catch (err) {
          console.error(err);
          toast.error('Error fetching group data');
        }
      })();
    }
  }, [location.state, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://hobby-hive-server.vercel.app/groups/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Group updated successfully!');

        navigate('/my-group-page');
      } else {
        const err = await res.json();
        toast.error(err.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error');
    }
  };


  return (
    <div>
      <Helmet>
        <title>Update Group | HobbyHive</title>
      </Helmet>
      <div className="max-w-2xl mx-auto p-4">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Update <span className="text-cyan-600">Hobby</span> Group</h2>
          <form onSubmit={handleUpdate} className="space-y-4">

            <InputWithIcon
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              placeholder="Group Name"
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
              {hobbyCategories.map(cat => (
                <option className='create-page-op' key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <div className="relative">
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded pr-10"
                required
              />
              <FiEdit className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>

            <InputWithIcon
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Meeting Location"
              required
            />

            <InputWithIcon
              name="maxMembers"
              type="number"
              value={formData.maxMembers}
              onChange={handleChange}
              placeholder="Max Members"
              required
            />

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border bg-cyan-500 p-2 rounded"
              required
            />

            <InputWithIcon
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
            />

            <input
              type="text"
              name="userName"
              value={formData.userName}
              readOnly
              className="w-full border p-2 rounded  cursor-not-allowed"
            />

            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              readOnly
              className="w-full border p-2 rounded  cursor-not-allowed"
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition duration-200"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGroup;
