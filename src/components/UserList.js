import React from 'react';
import './UserList.css';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="user-list">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td className="actions">
                                <button onClick={() => onEdit(user)}>Edit</button>
                                <button onClick={() => onDelete(user.id)} className="delete">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
