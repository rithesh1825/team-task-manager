# 🚀 Team Task Manager API

A backend web application where users can create projects, assign tasks, and track progress with role-based access control (Admin/Member).

---

## 🌐 Live URL

👉 https://team-task-manager-production-baa4.up.railway.app

---

## 📦 GitHub Repository

👉 https://github.com/rithesh1825/team-task-manager

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Railway (Deployment)

---

## 🚀 Features

### 🔐 Authentication

* User Signup
* User Login (JWT Token)

### 📁 Project Management

* Create projects (Admin only)
* View all projects

### ✅ Task Management

* Create tasks (Admin only)
* Assign tasks to users
* Update task status (Admin / Assigned user)
* View tasks (role-based)

### 📊 Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Overdue tasks

### 🔒 Role-Based Access

* Admin → Full access
* Member → Limited access

---

## 🛠️ API Endpoints

### 🔐 Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### 📁 Projects

* POST `/api/projects` (Admin only)
* GET `/api/projects`

### ✅ Tasks

* POST `/api/tasks` (Admin only)
* GET `/api/tasks`
* PUT `/api/tasks/:id`

### 📊 Dashboard

* GET `/api/tasks/dashboard`

---

## ⚙️ Environment Variables

Create a `.env` file inside `/server`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ▶️ Run Locally

```bash
cd server
npm install
node server.js
```

---

## 🧪 Testing

Use Postman to test APIs:

* Add Authorization → Bearer Token
* Use JWT token from login

---

## 🎥 Demo Video

👉 (Add your demo video link here)

---

## 📌 Notes

* Root route (`/`) will show: `Cannot GET /` → This is expected (API only backend)
* All APIs require authentication except signup/login

---

## 👨‍💻 Author

Rithesh

---

## 🎯 Status

✅ Completed
✅ Deployed
✅ Fully Functional

---
