import './App.css';
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleUserSubmit = async (userData) => {
    try {
      if (userToEdit) {
        // Update user
        await axios.put(`https://reqres.in/api/users/${userToEdit.id}`, userData);
        setUserToEdit(null);
      } else {
        // Add user
        await axios.post('https://reqres.in/api/users', userData);
      }
      fetchUsers(); // Refresh the user list without reloading the page
    } catch (error) {
      console.error("Error submitting user", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      fetchUsers(); // Refresh the user list without reloading the page
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm onUserSubmit={handleUserSubmit} userToEdit={userToEdit} />
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
