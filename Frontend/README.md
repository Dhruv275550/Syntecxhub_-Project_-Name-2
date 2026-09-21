# User Management System

A full-stack User Management System built using React.js, Node.js, Express.js, and MongoDB.

The application allows authenticated users to create, view, update, and delete user records through a responsive web interface.

clone the repository 
git clone 

---

## 🚀 Features

- User authentication using Basic Authentication
- Add new users
- View all users
- View user details
- Update existing users
- Delete users
- Email uniqueness validation
- Form validation
- MongoDB database integration
- RESTful API architecture
- CORS configuration
- Responsive user interface
- Error handling
- Confirmation before deleting a user

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Fetch API

### Backend

- Node.js
- Express.js
- REST API
- Basic Authentication
- CORS
- dotenv

### Database

- MongoDB
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
User Management System/
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── basicAuth.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── UserForm.jsx
│   │   │   └── UserTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── UserManagement.jsx
│   │   │
│   │   ├── services/
│   │   │   └── userService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md