const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
};

export const createUser = async (user) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
};

export const updateUser = async (id, user) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete user');
};
