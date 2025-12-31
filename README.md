# Note Saver App

A full-stack note saver application with **user authentication**, **CRUD notes functionality**, and **responsive UI** built with **React.js**, **TailwindCSS**, and **Node.js/Express** with MongoDB.

---

## Features

- **User Authentication**
  - Register new users
  - Login existing users
  - JWT-based authentication
  - Logout functionality

- **Notes Management**
  - Add new notes (title + content)
  - View notes
  - Delete notes
  - All actions are tied to the logged-in user

- **UI/UX**
  - Responsive design using TailwindCSS
  - Clean, modern layout
  - Navigation bar with Home, Paste, Logout links

- **Security**
  - Password hashing with bcrypt
  - JWT token verification
  - Protected routes for authenticated users only

---

## Tech Stack

**Frontend:**
- React.js
- React Router v6
- TailwindCSS
- Fetch API for HTTP requests

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for JWT authentication
- cors & dotenv

---

## Folder Structure

frontend-intern-task/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.js
│ │ ├── controllers/
│ │ │ ├── authController.js
│ │ │ └── taskController.js
│ │ ├── middleware/
│ │ │ └── authMiddleware.js
│ │ ├── models/
│ │ │ ├── User.js
│ │ │ └── Task.js
│ │ ├── routes/
│ │ │ ├── authRoutes.js
│ │ │ └── taskRoutes.js
│ │ └── server.js
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Home.jsx
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ ├── utils/
│ │ │ └── api.js
│ │ └── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── package.json
│
└── README.md

---

### Backend Setup

1. Go to backend folder:

```bash
cd backend
npm install
Create a .env file with:


MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
PORT=5000
Start the server:


npm run dev
Your backend API will be live at http://localhost:5000/api.

Frontend Setup
Go to frontend folder:


cd frontend
npm install
Update src/utils/api.js with your backend URL:

export const API_URL = "http://localhost:5000/api";
Start the frontend:

bash
Copy code
npm run dev
Your frontend will be live at http://localhost:5173.

Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Render

Portfolio / GitHub: [https://github.com/subhalaxmibarik]
