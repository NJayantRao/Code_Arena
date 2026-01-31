# Remote Interview Platform (Code Arena)

A comprehensive full-stack platform designed for seamless remote coding interviews. This application integrates real-time video/audio communication, interactive chat, and a robust code editing environment to simulate a realistic technical interview setting.

---

## � Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Upcoming Features](#upcoming-features)
- [Contributing](#contributing)
- [License](#license)

---

## �🚀 Features <a id="features"></a>

- **Authentication & User Management**: Secure login and session management powered by **Clerk**.
- **Real-time Collaboration**:
  - **Video & Audio Calls**: High-quality video conferencing using **Stream Video SDK**.
  - **Live Chat**: Instant messaging during interviews using **Stream Chat SDK**.
- **Code Editor**: A powerful, VS Code-like editing experience with **Monaco Editor**.
- **Dashboard**: User dashboard to manage sessions and view statistics.
- **Problem Bank**: Dedicated section for coding problems and challenges.
- **Analytics**: Performance tracking with Vercel Analytics and Speed Insights.

## 🛠 Tech Stack <a id="tech-stack"></a>

### Frontend

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Real-time**: Stream Chat & Video React SDKs
- **Editor**: `@monaco-editor/react`
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **Authentication**: Clerk Express SDK
- **Real-time**: Stream Node SDKs

### Tools & DevOps

- **Linting & Formatting**: ESLint, Prettier
- **Hooks**: Husky, Lint-staged
- **Deployment**: Vercel (Frontend), Node.js Provider (Backend)

## 📂 Project Structure

```bash
remote_interview/
├── backend/            # Express.js Server
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/        # Configs (Env, DB, Inngest)
│   │   ├── middlewares/
│   │   ├── models/     # Mongoose Models
│   │   ├── routes/
│   │   └── server.js   # Entry point
├── frontend/           # React Client
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/        # API & Client configs
│   │   ├── context/
│   │   └── App.jsx
└── package.json        # Root config for Husky/Prettier
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Database
- Clerk Account
- Stream Account (Chat & Video)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Remote_Interview
   ```

2. **Install Root Dependencies** (for Husky/Prettier)

   ```bash
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

Create a `.env` file in **both** `backend/` and `frontend/` directories with the following variables:

#### Backend (`backend/.env`)

```env
PORT=3000
DB_URL=mongodb+srv://<your-mongo-url>
FRONTEND_URL=http://localhost:5173

# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stream (Video & Chat)
STREAM_API_KEY=<your-stream-api-key>
STREAM_API_SECRET=<your-stream-api-secret>

# Background Jobs
INNGEST_EVENT_KEY=<your-inngest-key>
INNGEST_SIGNING_KEY=<your-inngest-signing-key>
```

#### Frontend (`frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URI=http://localhost:3000/api/v1
```

_(Note: Ensure `VITE_API_URI` points to your backend server address)_

## 🏃‍♂️ Usage

You need to run both the frontend and backend servers.

**1. Start the Backend**

```bash
cd backend
npm run dev
```

Server will start on `http://localhost:3000` (or your defined PORT).

**2. Start the Frontend**

```bash
cd frontend
npm run dev
```

Client will start on `http://localhost:5173`.

## 🚀 Upcoming Features

- **Collaborative Whiteboard**: Integrated drawing tool for system design interviews.
- **Multi-language Support**: Expanded support for additional programming languages in the editor.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the ISC License.