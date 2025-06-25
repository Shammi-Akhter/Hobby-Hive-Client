# 🎨 HobbyHive

**HobbyHive** is a vibrant platform where people can discover, join, or create hobby-based communities like book clubs, hiking groups, painting circles, and more! It fosters meaningful social engagement through shared interests and helps users connect and collaborate based on their passions.

🔗 **Live Site**: [HobbyHive on Firebase](https://hobby-hive-55664.web.app)  


---

## 📖 Project Description

HobbyHub empowers users to:
- 🔐 Register or log in using email or Google account
- 🛡 Access private routes after authentication
- 🌍 Explore all available hobby groups
- ✍️ Create, edit, or delete their own groups
- 🧠 Store and manage all data through a MongoDB-powered backend

---

## 🚀 Features

- ✅ Firebase Authentication with Google Login
- 🔒 Private Routes using React Router
- 🔁 Persistent User Sessions
- 🧱 MongoDB for Database Storage
- ⚙️ Backend with Node.js & Express.js
- 🧪 Environment Variables for Security
- 🎨 Responsive UI with Tailwind + DaisyUI
- 💫 Animations with AOS and Awesome Reveal
- 🌐 Deployment: Client (Firebase), Server (Vercel)

---

## 🧰 Technologies & Packages

### 💻 Client Side (React + Vite)

| 📦 Package | 🔍 Purpose |
|-----------|------------|
| ⚛️ `react`, `react-dom` | Core React library |
| 🧭 `react-router-dom` | Routing and private route handling |
| 🔐 `firebase` | Authentication and hosting |
| 🔔 `react-hot-toast` | Toast notifications |
| 🎨 `react-icons` | Icon library |
| ✨ `react-awesome-reveal`, `aos` | Animation on scroll |
| 🧠 `react-helmet-async` | SEO and `<head>` management |
| 🎨 `tailwindcss` | Utility-first CSS framework |
| 💠 `daisyui` | Tailwind-based UI components |
| ⌨️ `react-simple-typewriter` | Typing text animation |
| 🎞️ `react-slick`, `slick-carousel` | Carousel/slider components |

---

### 🛠️ Client Dev Dependencies

| 📦 Package | 🔍 Purpose |
|-----------|------------|
| 🚀 `vite` | Build tool |
| 🛠️ `@vitejs/plugin-react` | React plugin for Vite |
| 🧹 `eslint`, `@eslint/js` | JavaScript linting |
| 🧼 `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | React linting helpers |
| 🌐 `globals` | Global variables for ESLint |
| 🧵 `postcss` | CSS post-processing |
| 📚 `@types/react`, `@types/react-dom` | TypeScript support |

---

### 🌐 Backend (Node.js + Express)

| 📦 Package | 🔍 Purpose |
|-----------|------------|
| 🧱 `express` | Server framework |
| 🌍 `cors` | Cross-origin resource sharing |
| 🔐 `dotenv` | Manage environment variables |
| 🧮 `mongodb` | Database connectivity |

---

### 🛠️ Backend Dev Dependencies

| 📦 Package | 🔍 Purpose | 
|-----------|------------|
| 🚀 `vite` | Backend development server |
| ⚛️ `react`, `react-dom` | Peer dependencies (optional rendering) |
| 🧰 `@vitejs/plugin-react` | React plugin |
| 🌐 `globals` | Global variable management |
| 📚 `@types/react`, `@types/react-dom` | Type definitions for React |

---

## 🛠️ How to Run Locally

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/hobbyhive.git

###2️⃣ Set Up the Client

cd client
npm install
npm run dev
This will install the frontend dependencies and start the client on http://localhost:5173 (default Vite port).

###3️⃣ Set Up the Server
Open a new terminal tab or window, then run:
cd server
npm install
npm run start
This will install the backend dependencies and start the server on http://localhost:5000 or your configured port.

###4️⃣ Configure Environment Variables
Add .env files for both client and server as needed (with Firebase config, MongoDB URI, etc.)
---


