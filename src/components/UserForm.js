import React, { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = ({ selectedUser, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
    });

    useEffect(() => {
        if (selectedUser) {
            setFormData(selectedUser);
        } else {
            setFormData({ name: '', email: '', department: '' });
        }
    }, [selectedUser]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', email: '', department: '' });
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
            />
            <div className="form-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UserForm;
