import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../services/userService";

function UserManagement() {

    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        loadUsers();
    }, []);

    const handleUserCreated = async (userData) => {
        try {
            await createUser(userData);
            await loadUsers();
            alert("User created successfully");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleUserUpdated = async (id, userData) => {
        try {
            await updateUser(id, userData);
            setEditingUser(null);
            await loadUsers();
            alert("User updated successfully");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await deleteUser(id);
            await loadUsers();
            alert("User deleted successfully");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Navbar />

            <main className="container">

                <UserForm
                    onUserCreated={handleUserCreated}
                    editingUser={editingUser}
                    onUserUpdated={handleUserUpdated}
                    onCancelEdit={() => setEditingUser(null)}
                />

                <UserTable
                    users={users}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </main>
        </>
    );
}

export default UserManagement;