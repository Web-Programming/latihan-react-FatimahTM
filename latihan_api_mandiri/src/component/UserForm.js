// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ onUserSubmit, userToEdit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setFirstName(userToEdit.first_name);
      setLastName(userToEdit.last_name);
    }
  }, [userToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { first_name: firstName, last_name: lastName };
    await onUserSubmit(userData);
    setFirstName('');
    setLastName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
