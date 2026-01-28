# Product Requirement Document (PRD): Code Arena

## 1. Executive Summary

**Code Arena** is a comprehensive remote interview platform designed to conduct seamless technical interviews. It combines real-time video/audio communication, an interactive shared code editor, and instant chat into a single unified interface. The goal is to simulate a realistic pair-programming environment that eliminates the need for switching between multiple tools (e.g., Zoom + HackerRank) during an interview.

## 2. Problem Statement

Conducting remote technical interviews is currently fragmented. Interviewers and candidates often have to juggle:

- A video conferencing tool (Zoom, Google Meet).
- A shared coding pad (CoderPad, HackerRank).
- A separate chat application.
  This context switching disrupts flow, reduces productivity, and creates a disjointed experience.

## 3. Goals & Objectives

- **Unified Experience**: Consolidate video, code, and chat in one browser window.
- **Real-time Synchronization**: Ensure code edits and communications are instantaneous (sub-100ms latency).
- **Robust Environment**: Provide a VS Code-like editing experience with syntax highlighting and auto-completion.
- **Reliability**: Secure, stable, and persistent sessions.

## 4. User Personas

1.  **The Candidate**:
    - Needs a distraction-free, familiar coding environment.
    - Requires clear audio/video to communicate thought processes.
    - Wants to run code and see output immediately.
2.  **The Interviewer**:
    - Needs to manage the session (create, pause, end).
    - Wants to select problems from a bank.
    - Needs private notes (optional/future) or a view of the candidate's activity.
    - Requires reliable playback/history of the code (optional/future).
3.  **Administrator**:
    - Manages problem banks and user roles.
    - Monitors system usage and analytics.

## 5. Functional Requirements

### 5.1 Authentication & User Modes

- **Sign Up / Login**: Support Email/Password and Social Login (GitHub/Google) via **Clerk**.
- **Role Management**: Distinguish between Interviewers (Hosts) and Candidates (Guidable access).
- **Guest Access**: Allow limited access for quick interviews (optional).

### 5.2 Dashboard

- **Home Screen**: Overview of past interviews and button to "Start Instant Meeting".
- **Sessions List**: History of conducted interviews with dates and participants.
- **Schedule Interview**: Feature to generate unique meeting links for future times.

### 5.3 Active Interview Arena (The "Room")

- **Code Editor**:
  - Powered by **Monaco Editor** (VS Code engine).
  - **Language Support**: JavaScript (Node.js), Python, Java, C++, etc.
  - **Features**: Syntax highlighting, line numbers, auto-indentation, basic autocomplete.
  - **Execution**: Ability to run code against standard inputs and view stdout/stderr.
- **Communication Suite**:
  - **Video/Audio**: Floating or docked video tiles for participants using **Stream Video SDK**.
  - **Chat**: Persistent text chat for sharing links or quick notes using **Stream Chat SDK**.
  - **Controls**: Mute/Unmute audio, Toggle Video, Screen Share.
- **Collaborative Whiteboard** (Priority Feature):
  - A digital canvas for system design discussions.
  - Tools: Pen, Shapes (Rectangles, Circles), Arrows, Text.
  - Real-time syncing of drawing strokes.

### 5.4 Problem Bank

- **Library**: A database of pre-set coding questions categorized by difficulty (Easy, Medium, Hard) and Topic (Arrays, DP, Graphs).
- **Injection**: Interviewer can select a problem to "inject" into the editor, populating the description markdown and starter code.

## 6. Technical Architecture

### 6.1 Frontend

- **Framework**: React 19 + Vite.
- **Styling**: Tailwind CSS v4 + DaisyUI for rapid UI development.
- **State Management**: TanStack Query for server state; React Context for local UI state.
- **Routing**: React Router DOM.
- **Editor**: `@monaco-editor/react`.

### 6.2 Backend

- **Runtime**: Node.js with Express.js.
- **Database**: MongoDB (Mongoose ODM) to store User Profiles, Session Logs, and Problem Bank.
- **Authentication provider**: Clerk (JWT based).
- **API Structure**: RESTful API for session management and CRUD operations.
- **Code Execution Engine**: (Third-party API like Piston or reliable self-hosted sandbox recommended).

### 6.3 Real-time Infrastructure

- **Stream.io**:
  - **Video**: Handles WebRTC connections, signaling, and quality adaptation.
  - **Chat**: Handles message persistence, typing indicators, and presence.
- **Socket.io** (Optional/Alternative): Can be used for custom whiteboard syncing if Stream Connect is not used for that data channel.

### 6.4 Deployment

- **Frontend**: Vercel (Global Edge Network).
- **Backend**: Render, Railway, or AWS EC2 (needs persistent process for connections).

## 7. Data Models (High Level)

### User

```json
{
  "clerkId": "string",
  "email": "string",
  "name": "string",
  "role": "candidate | interviewer"
}
```

### Session

```json
{
  "sessionId": "uuid",
  "hostId": "ref(User)",
  "participants": ["ref(User)"],
  "startTime": "datetime",
  "status": "active | completed",
  "codeSnapshot": "string (s3 url or text)"
}
```

### Problem

```json
{
  "title": "string",
  "slug": "string",
  "description": "markdown",
  "difficulty": "Easy | Medium | Hard",
  "starterCode": { "javascript": "...", "python": "..." },
  "testCases": [{ "input": "...", "output": "..." }]
}
```

## 8. Application Routes & API Endpoints

### 8.1 Frontend Routes (Client-Side)

- **`/`**: Landing page (Public access).
- **`/dashboard`**: User dashboard (Authenticated).
- **`/problems`**: Problem library browser.
- **`/problem/:id`**: Detailed view of a specific coding problem.
- **`/session/:id`**: Active interview session room.
- **`/sign-in`** / **`/sign-up`**: Clerk authentication pages.

### 8.2 Backend API Endpoints

- **Base URL**: `/api/v1`
- **Auth**:
  - `POST /api/inngest`: Webhook for Clerk user synchronization (User Created/Updated/Deleted).
- **Session Management** (`/api/v1/session`):
  - `POST /create`: Create a new interview session.
  - `GET /:id`: Retrieve session details.
  - `PUT /:id/code`: Save code snapshot.
- **Chat & Video** (`/api/v1/chat`):
  - `POST /token`: Generate Stream.io authentication token for the authenticated user.
- **Health Check**:
  - `GET /api/v1`: Returns server status (200 OK).

## 9. Non-Functional Requirements

- **Latency**: Code typing and drawing syncing should feel "instant" (< 100ms).
- **Video Quality**: Adaptive bitrate to handle poor connections without dropping the call.
- **Security**:
  - Secure Code Execution (Sandboxing) to prevent server-side attacks.
  - Encrypted media streams (WebRTC standard).
- **Responsive Design**: Primary focus on Desktop/Laptop screens, but functional on Tablet.

## 10. Roadmap / Future Scope

- **AI Copilot Analysis**: Post-interview analysis of code complexity and quality.
- **Playback**: "Time-travel" slider to replay the keystrokes of the coding session.
- **Integration**: Calendar integration (Google/Outlook) for scheduling.
- **Multi-language**: Expansion to niche languages (Go, Rust, Swift).