import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddMember() {
  const [formData, setFormData] = useState({
    MemberID: '',
    Name: '',
    Address: '',
    ContactNumber: '',
    Password: '',
    email: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/addmembers', formData); // Adjust the endpoint if needed
      if (response.status === 201) {
        // Redirect to login page after successful registration
        navigate('/login');
      }
    } catch (err) {
      setError('Error registering user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="MemberID" placeholder="Member ID" onChange={handleChange} required />
        <input type="text" name="Name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="Address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="ContactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="password" name="Password" placeholder="Password" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default AddMember;
