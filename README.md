# 💰 Finance Dashboard Backend API

## 🚀 Overview

This project is a backend system for a finance dashboard that enables users to manage financial records and view analytics based on their roles. It demonstrates backend architecture, API design, data modeling, and role-based access control (RBAC).

The system is designed to simulate a real-world financial application where different users (Viewer, Analyst, Admin) interact with data based on permissions.

---

## 🎯 Key Features

### 👤 User & Role Management

* User registration and login
* Role-based access control (RBAC)
* Roles:

  * **Viewer** → Read-only access
  * **Analyst** → Read + analytics
  * **Admin** → Full access (CRUD + user control)
* User status management (active/inactive)

---

### 💰 Financial Records Management

* Create financial records (income/expense)
* Update records
* Delete records
* View records with filtering:

  * By type (income/expense)
  * By category
  * By date

---

### 📊 Dashboard & Analytics APIs

* Total Income
* Total Expenses
* Net Balance
* Category-wise aggregation
* Summary-based insights for dashboard

---

### 🔐 Access Control (RBAC)

* Middleware-based authorization
* Restricts actions based on user roles
* Ensures secure API access

---

### ⚙️ Validation & Error Handling

* Input validation for financial data
* Proper HTTP status codes
* Error handling for invalid operations

---

## 🏗️ Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Backend        | Node.js, Express.js              |
| Database       | MySQL                            |
| Authentication | JWT (JSON Web Tokens)            |
| Security       | Role-Based Access Control (RBAC) |

---

## 📁 Project Structure

```
finance-backend/
│
├── config/            # Database configuration
├── controllers/       # Business logic
├── middleware/        # Auth & RBAC
├── routes/            # API routes
├── utils/             # Helper functions
├── app.js             # Entry point
├── package.json
└── README.md
```

---

## 📡 API Endpoints

### 🔑 Authentication

* `POST /api/users/register` → Register user
* `POST /api/users/login` → Login & get JWT

---

### 👤 User Management

* Managed internally by Admin

---

### 💰 Financial Records

* `POST /api/records` → Create record (Admin)
* `GET /api/records` → View records (All roles)
* `PUT /api/records/:id` → Update record (Admin)
* `DELETE /api/records/:id` → Delete record (Admin)

#### 🔍 Filtering Example:

```
GET /api/records?type=expense&category=food
```

---

### 📊 Dashboard

* `GET /api/dashboard/summary` → Income, Expense, Balance
* `GET /api/dashboard/categories` → Category-wise totals

---

## 🔐 Role Permissions

| Role    | Access                      |
| ------- | --------------------------- |
| Viewer  | View records only           |
| Analyst | View + analytics            |
| Admin   | Full CRUD + user management |

---

## 🗄️ Database Schema

### Users Table

* id
* name
* email
* password
* role (viewer / analyst / admin)
* status (active / inactive)

### Records Table

* id
* user_id
* amount
* type (income / expense)
* category
* date
* note

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
```

2. Install dependencies:

```
npm install
```

3. Setup environment variables:
   Create a `.env` file:

```
PORT=5000
DB_PASSWORD=yourpassword
JWT_SECRET=secretkey
```

4. Setup MySQL database:

```sql
CREATE DATABASE finance_db;
USE finance_db;

CREATE TABLE users (...);
CREATE TABLE records (...);
```

5. Run the server:

```
npm start
```

---

## ⚠️ Assumptions

* Simplified authentication system
* No frontend integration (backend-only project)
* Single database instance (MySQL)
* Focus on backend design and logic

---

## 🔒 Security Considerations

* Passwords are hashed using bcrypt
* JWT used for authentication
* Role-based authorization enforced
* Sensitive data (like `.env`) excluded using `.gitignore`

---

## 🚀 Future Enhancements

* Pagination & advanced filtering
* Swagger API documentation
* Unit & integration testing
* Rate limiting
* Deployment (AWS / Render)
* Microservices architecture

---

## 🧠 Learning Outcomes

This project demonstrates:

* Backend system design
* REST API development
* Role-based access control
* Database modeling
* Secure coding practices

---

## 👨‍💻 Author

**Vipin Kumar Jaiswal**
B.Tech CSE (Cyber Security)

---

## 📌 Note

This project is built for learning and evaluation purposes. It focuses on clarity, maintainability, and backend design rather than production-scale deployment.
