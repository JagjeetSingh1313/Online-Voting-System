# 🗳️ Online Voting System

A full-stack **Online Voting System** built using a modern frontend and a **Spring Boot** backend. This application allows users to securely vote online while providing administrators with tools to manage elections and candidates.

---

## 🚀 Features

* 🔐 User authentication & authorization
* 🗳️ Secure voting system (one user = one vote)
* 📊 Real-time vote counting
* 👨‍💼 Admin panel for managing elections & candidates
* 📱 Responsive frontend UI
* 🔄 RESTful API integration with backend

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript *(or React/Angular — update this if needed)*
* Axios / Fetch API

### Backend

* Java + Spring Boot
* Spring Security (for authentication)
* REST APIs

### Database

* MySQL / H2 *(update based on your project)*

---

## 📂 Project Structure

```
Online-Voting-System/
│
├── frontend/        # Frontend application
├── backend/         # Spring Boot backend
│   ├── src/
│   └── pom.xml
│
├── README.md
└── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JagjeetSingh1313/Online-Voting-System.git
cd Online-Voting-System
```

---

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd backend
```

* Configure database in `application.properties`
* Run the application:

```bash
mvn spring-boot:run
```

Backend will start on:
👉 `http://localhost:8080`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
```

* Install dependencies (if using React/Angular):

```bash
npm install
npm start
```

Frontend will run on:
👉 `http://localhost:3000`

---

## 🔑 API Endpoints (Sample)

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | /login      | User login        |
| POST   | /register   | User registration |
| GET    | /candidates | Get candidates    |
| POST   | /vote       | Cast vote         |

---

## 🧪 Testing

* Use Postman or any API testing tool
* Test authentication and voting endpoints

---

## 📸 Screenshots

<img width="710" height="742" alt="image" src="https://github.com/user-attachments/assets/1409661a-ee40-4c1b-9f8b-ece69b71590f" />
<img width="1600" height="693" alt="image" src="https://github.com/user-attachments/assets/e7166166-1ce0-48d6-aca6-4c311cdd4e82" />
<img width="1600" height="715" alt="image" src="https://github.com/user-attachments/assets/4a6da13b-afb3-4189-bc57-3382728d8b2b" />
<img width="1600" height="669" alt="image" src="https://github.com/user-attachments/assets/42f50604-8108-4d80-a6a0-80f1087f73f0" />


---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

* **Jagjeet Singh**
* GitHub: https://github.com/JagjeetSingh1313

