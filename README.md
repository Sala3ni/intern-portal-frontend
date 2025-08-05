# 🚀 Intern Dashboard Portal

A simple intern dashboard project built by **Saloni Mishra** that simulates a login system, donation tracking, reward unlockables, and a leaderboard using React (Vite) for frontend and Node.js + Express for the backend.

---

## ✨ Features

### ✅ Frontend (React + Vite)

- 🔐 **Login Page**
  - Dummy login form (no real authentication)
  - Email/password input
  - Redirects to dashboard

- 🏠 **Dashboard Page**
  - Shows intern details:
    - Name: **Saloni Mishra**
    - Referral Code: `saloni2025`
    - Total Donations Raised: `₹1750`
  - 🎁 Rewards & Unlockables section:
    - Certificate
    - Leaderboard Badge
    - Swag Pack
  - Button to view leaderboard

- 🏆 **Leaderboard Page**
  - Displays static top performers with:
    - Rank
    - Name
    - Amount Raised

---

## 🧠 Backend (Node.js + Express)

- REST API with two endpoints:
  - `/user` → Returns name, referral code, and donations
  - `/leaderboard` → Returns dummy leaderboard data
- Static data, no database used
- Tested using Postman or frontend fetch

---

## 📷 Screenshots

### 🔐 Login Page
![Login Page](./screenshots/login.png)

---

### 🏠 Dashboard Page
![Dashboard Page](./screenshots/dashboard.png)

---

### 🏆 Leaderboard Page
![Leaderboard Page](./screenshots/leaderboard.png)

---

## 📂 Project Structure
intern-dashboard/ ├── frontend/ │   ├── src/ │   │   ├── components/ │   │   │   ├── Login.jsx │   │   │   ├── Dashboard.jsx │   │   │   └── Leaderboard.jsx │   │   └── App.jsx │   └── styles.css ├── backend/ │   ├── server.js │   └── package.json ├── screenshots/ │   ├── login.png │   ├── dashboard.png │   └── leaderboard.png └── README.md
## 💻 How to Run

### ▶️ Start Backend

```bash
cd backend
npm install
node server.js

Server runs at http://localhost:3000/


---

🌐 Start Frontend (React)

cd frontend
npm install
npm run dev

Open in browser: http://localhost:5173/


---

🙋‍♀️ Developed By

Saloni Mishra
Frontend & Backend Developer | Intern Portal Project (2025)
