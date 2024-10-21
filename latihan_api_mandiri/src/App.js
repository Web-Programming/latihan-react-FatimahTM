// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  const handleUserSubmit = async (userData) => {
    if (userToEdit) {
      // Update user
      await axios.put(`https://reqres.in/api/users/${userToEdit.id}`, userData);
      setUserToEdit(null);
    } else {
      // Add user
      await axios.post('https://reqres.in/api/users', userData);
    }
    window.location.reload(); // Refresh to get updated user list
  };

  const handleDelete = async (userId) => {
    await axios.delete(`https://reqres.in/api/users/${userId}`);
    window.location.reload(); // Refresh to get updated user list
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onUserSubmit={handleUserSubmit} userToEdit={userToEdit} />
      <UserList onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
