# 🌐 QuickCare Frontend (User App)

This is the user-facing frontend of **QuickCare Connect**, built using React (Vite).  
It allows users to browse doctors, book appointments, and make payments.

---

## 🚀 Features

- User authentication (Login/Register)
- Browse doctors by speciality
- Book appointments
- Razorpay payment integration
- View and manage appointments
- Update user profile

---

## 🧰 Tech Stack

- React.js (Vite)
- Tailwind CSS
- Axios
- Context API

---

📁 Frontend Project Structure
```
frontend/
│
├── public/
│
├── src/
│   ├── assets/                  # Images, icons
│
│   ├── components/             # Reusable UI components
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── RelatedDoctors.jsx
│   │   ├── SpecialityMenu.jsx
│   │   ├── SplitUnderline.jsx
│   │   └── TopDoctors.jsx
│
│   ├── context/                # Global state management
│   │   └── AppContext.jsx
│
│   ├── pages/                  # Route-based pages
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctors.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyAppointments.jsx
│   │   └── MyProfile.jsx
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
