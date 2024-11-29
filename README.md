
# **Backend for VRV Security Assignment**

This repository contains the backend implementation for the VRV Security Assignment. It handles authentication, user management, and API endpoints for the frontend to interact with.

---

## **Project Structure**

```plaintext
backend/
├── controllers/         # Handles request logic
│   ├── authController.js
│   └── userController.js
├── models/              # Database schemas/models
│   ├── User.js
├── routes/              # API route definitions
│   ├── authRoutes.js
│   ├── userRoutes.js
├── middleware/          # Middleware for authentication/validation
│   ├── authMiddleware.js
│   └── errorHandler.js
├── config/              # Configuration files
│   ├── db.js            # Database connection
│   ├── env.example      # Example environment variables
├── utils/               # Utility functions
│   ├── jwtUtils.js
│   ├── responseUtils.js
├── server.js            # Entry point
├── package.json         # Dependencies and scripts
```

---

## **Features**
- **User Authentication**: Login, registration, JWT-based authorization.
- **Protected Routes**: Ensures secure access to sensitive data.
- **CRUD Operations**: API endpoints to handle user data.
- **Error Handling**: Centralized error-handling middleware.
- **Database Integration**: MongoDB (Mongoose).

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: v16 or higher
- **npm**: Comes with Node.js
- **MongoDB**: Running MongoDB instance (local or cloud)

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/backend-vrv-security.git
   cd backend-vrv-security
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the Server**:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

---

## **API Endpoints**

### **Authentication**
| Method | Endpoint         | Description            | Requires Auth |
|--------|------------------|------------------------|---------------|
| POST   | `/api/auth/login` | Login a user          | ❌            |
| POST   | `/api/auth/register` | Register a user   | ❌            |

### **Users**
| Method | Endpoint          | Description             | Requires Auth |
|--------|-------------------|-------------------------|---------------|
| GET    | `/api/users/me`    | Fetch logged-in user    | ✅            |

---

## **Scripts**
- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Start Production Server**:
  ```bash
  npm start
  ```

---

## **Technologies Used**
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB ORM.
- **JWT**: JSON Web Tokens for authentication.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.

---