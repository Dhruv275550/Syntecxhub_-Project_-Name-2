const API_URL = "http://127.0.0.1:8080/api/users";

const authHeader = {
    Authorization: "Basic " + btoa("admin:admin123"),
    "Content-Type": "application/json"
};

export const getUsers = async () => {
    const response = await fetch(API_URL, {
        headers: authHeader
    });

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: authHeader,
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create user");
    }

    return response.json();
};

export const updateUser = async (id, userData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: authHeader,
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update user");
    }

    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: authHeader
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete user");
    }

    return response.json();
};