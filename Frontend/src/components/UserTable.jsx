function UserTable({ users, onEdit, onDelete }) {

    return (
        <div className="user-table">

            <h3>Users</h3>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="5">
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={user._id}>

                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>

                                <td>
                                    <button onClick={() => onEdit(user)}>
                                        Edit
                                    </button>

                                    <button onClick={() => onDelete(user._id)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))
                    )}

                </tbody>

            </table>

        </div>
    );
}

export default UserTable;