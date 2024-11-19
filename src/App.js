import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { fetchUsers, createUser, updateUser, deleteUser } from './api/userService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError('Failed to load users'));
  }, []);

  const handleAddUser = (user) => {
    createUser(user)
      .then((newUser) => setUsers((prev) => [...prev, newUser]))
      .catch(() => setError('Failed to add user'));
  };

  const handleEditUser = (user) => {
    updateUser(user.id, user)
      .then((updatedUser) =>
        setUsers((prev) =>
          prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        )
      )
      .catch(() => setError('Failed to update user'));
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => setUsers((prev) => prev.filter((u) => u.id !== id)))
      .catch(() => setError('Failed to delete user'));
  };

  return (
    <div className="app">
      <h1>USERS</h1>
      {error && <p className="error">{error}</p>}
      <div className="content">
        <UserList
          users={users}
          onEdit={setSelectedUser}
          onDelete={handleDeleteUser}
        />
        <UserForm
          selectedUser={selectedUser}
          onSubmit={selectedUser ? handleEditUser : handleAddUser}
          onCancel={() => setSelectedUser(null)}
        />
      </div>
    </div>
  );
};

export default App;
