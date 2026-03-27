# 🏥 QuickCare Connect

### Full-Stack Doctor Appointment & Healthcare Management Platform

QuickCare Connect is a scalable, production-ready **MERN stack application** that streamlines doctor appointment booking, payment processing, and healthcare management across **users, doctors, and administrators**.

---

## 🌐 Live Applications

* **User App (Frontend):** https://quickcare-connect-frontend.onrender.com
* **Admin Dashboard:** https://quickcare-connect-admin.onrender.com
* **Backend API:** https://quickcare-connect-backend.onrender.com

---

## 📌 Overview

QuickCare Connect enables seamless interaction between patients and healthcare providers through a centralized platform. It supports **secure authentication, appointment scheduling, and online payments**, ensuring a smooth and efficient healthcare experience.

---

## ⚙️ Tech Stack

### Frontend & Admin

* React.js (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Integrations

* Razorpay (Payment Gateway)
* JSON Web Tokens (JWT)

---

## ✨ Core Features

### 👤 User Module

* Secure authentication (JWT)
* Browse doctors by speciality
* Real-time appointment booking
* Razorpay payment integration
* View & manage appointments

### 👨‍⚕️ Doctor Module

* Dashboard for appointment tracking
* Manage availability
* View patient details

### 🛠 Admin Module

* Manage doctors and platform data
* Monitor appointments
* Control system operations

---

## 🧱 System Architecture

* RESTful API architecture
* Token-based authentication (JWT)
* Modular backend (MVC pattern)
* Separate frontend & admin clients
* Cloud deployment using Render

---

## 📁 Project Structure

```
QuickCare-Connect/
│
├── admin/                         # Admin dashboard (React)
│   └── src/
│
├── backend/                       # Backend (Node + Express)
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── doctorController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   ├── authAdmin.js
│   │   ├── authDoctor.js
│   │   ├── authUser.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── appointmentModel.js
│   │   ├── doctorModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── adminRoute.js
│   │   ├── doctorRoute.js
│   │   └── userRoute.js
│   │
│   ├── package.json
│   └── server.js
│
├── frontend/                     # User-facing app (React)
│   └── src/
│
├── .gitignore
└── README.md
```

---


## 💳 Payment Workflow (Razorpay)

1. User initiates booking
2. Backend creates Razorpay order
3. Frontend opens payment gateway
4. Payment verified on backend
5. Appointment marked as paid

---

## 🔒 Security Practices

* Sensitive data stored using environment variables
* Password hashing (bcrypt)
* Token-based authentication (JWT)
* Protected API routes
* Secure payment verification

---

## 🚀 Deployment Strategy

Deployed using **Render Cloud Platform**:

| Service     | Type        |
| ----------- | ----------- |
| Backend     | Web Service |
| Frontend    | Static Site |
| Admin Panel | Static Site |

---

## 📈 Future Enhancements

* Email & SMS notifications
* Doctor availability calendar
* Role-based access control (RBAC)
* WebSocket-based real-time updates
* Patient medical history tracking

---

## 🧪 Testing & Debugging

* Console logging for API tracing
* Postman for endpoint testing
* Error handling with try-catch
* Validation using Mongoose

---

## 👩‍💻 Author

**Anjali Kumari**
Full Stack Developer (MERN)

---

## ⭐ Acknowledgements

If you found this project useful, consider giving it a ⭐ on GitHub!
