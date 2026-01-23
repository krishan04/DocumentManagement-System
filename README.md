# Document Management System (DMS)

A simple Document Management System built using the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**.
The system allows users to register, log in, upload documents, manage versions, and view documents with basic access control.

---

## 🚀 Features

- User Registration & Login (Authentication)
- Upload documents (PDF / Images)
- Add tags and document metadata
- View uploaded documents
- Version control (auto-increment on update)
- Owner-based permissions
- Responsive Angular frontend
- RESTful backend APIs

---

## 🛠 Tech Stack

### Backend
- Node.js v25.2.1
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose
- Multer (file upload)
- JWT (authentication)
- bcryptjs (password hashing)

### Frontend
- Angular 17 (Standalone Components)
- TypeScript
- HTML & CSS

---

## ⚙️ Project Setup (Local Environment)

### 1️⃣ Prerequisites

Make sure the following are installed:

- Node.js: v25.2.1
- 
  Check using:
  
  bash : node -v
  
- Angular CLI
- 
  npm install -g @angular/cli
  
-Backend Setup

 cd dms-backend
 
 npm install
 
 node index.js
 
 Backend will run on: http://localhost:5001
 
-Frontend Setup

 cd dms-frontend
 
 npm install
 
 ng serve
 
 Frontend will run on: http://localhost:4200

---

## 📸 Screenshots

The following screenshots are included with the assignment submission email/project folder:

1. **Login Page**
   - Shows user login interface with username and password fields.

2. **Register Page**
   - Shows new user registration form.

3. **Upload Document Page**
   - Shows document upload form with title, tags, and file selection.

4. **Documents List Page**
   - Displays uploaded documents along with version number and owner details.

Screenshots are provided as image files:
- login.png
- register.png
- upload.png
- documents.png
