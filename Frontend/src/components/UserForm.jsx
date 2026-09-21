import { useState } from "react";

function UserForm({ onUserCreated, editingUser, onUserUpdated, onCancelEdit }) {

    const [name, setName] = useState(editingUser?.name || "");
    const [email, setEmail] = useState(editingUser?.email || "");
    const [age, setAge] = useState(editingUser?.age || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            age: Number(age)
        };

        if (editingUser) {
            await onUserUpdated(editingUser._id, userData);
        } else {
            await onUserCreated(userData);
        }

        setName("");
        setEmail("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">

            <h3>{editingUser ? "Update User" : "Add User"}</h3>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />

            <button type="submit">
                {editingUser ? "Update User" : "Add User"}
            </button>

            {editingUser && (
                <button type="button" onClick={onCancelEdit}>
                    Cancel
                </button>
            )}

        </form>
    );
}

export default UserForm;