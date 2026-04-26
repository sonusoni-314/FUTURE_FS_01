# FUTURE_FS_01 - Full Stack Portfolio Website

A personal portfolio website built with React (Vite) and Node.js/Express.
It includes a modern frontend, project showcase, and a working contact form that sends email notifications through the backend API.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Run the Project](#run-the-project)
- [API Endpoints](#api-endpoints)
- [Available Scripts](#available-scripts)
- [Deployment Guide](#deployment-guide)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)

## Project Overview

This repository contains:

- `frontend/`: React + Vite portfolio UI
- `backend/`: Express API for health and contact routes

The frontend contact form posts to the backend `/api/contact` endpoint, which sends email via Nodemailer.

## Tech Stack

- Frontend: React, Vite, Axios
- Backend: Node.js, Express, CORS, Nodemailer, Dotenv
- Tooling: ESLint, Nodemon

## Features

- Responsive and modern portfolio layout
- Projects section with tags and links
- About section with skills and certifications
- Contact form with API integration
- Email notifications for incoming contact messages
- Environment-based API URL configuration

## Project Structure

```text
Portfolio_Project/
	backend/
		package.json
		server.js
		.env.example
	frontend/
		package.json
		index.html
		src/
			App.jsx
			App.css
			main.jsx
		.env.example
	README.md
```

## Local Setup

### 1. Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### 2. Clone the repository

```bash
git clone <your-repo-url>
cd Portfolio_Project
```

### 3. Install dependencies

```bash
npm --prefix frontend install
npm --prefix backend install
```

## Environment Variables

Create local env files from examples.

### Frontend

Copy `frontend/.env.example` to `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Backend

Copy `backend/.env.example` to `backend/.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MAIL_SERVICE=gmail
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

Notes:

- For Gmail, use an App Password instead of your normal account password.
- `CLIENT_URL` must match your frontend URL for CORS.

## Run the Project

Use two terminals.

### Start backend

```bash
npm --prefix backend run dev
```

### Start frontend

```bash
npm --prefix frontend run dev
```

### Open in browser

- Frontend: `http://localhost:5173`
- Backend health check: `http://localhost:5000/api/health`

## API Endpoints

### GET `/api/health`

Returns backend health status.

### POST `/api/contact`

Accepts contact form payload:

```json
{
	"name": "Your Name",
	"email": "you@example.com",
	"subject": "Project discussion",
	"message": "Hello, I would like to connect..."
}
```

Returns success/failure message.

## Available Scripts

### Frontend (`frontend/package.json`)

- `npm run dev` - start Vite dev server
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

### Backend (`backend/package.json`)

- `npm run dev` - run backend with nodemon
- `npm start` - run backend with node

## Deployment Guide

Use any frontend + backend hosting combo. One common setup:

1. Deploy backend (Render/Railway/Glitch/Fly.io)
2. Set backend env vars on hosting platform
3. Deploy frontend (Vercel/Netlify)
4. Set `VITE_API_BASE_URL` in frontend hosting to your backend public URL
5. Update backend `CLIENT_URL` to your frontend deployed URL

Example production values:

- Frontend `VITE_API_BASE_URL=https://your-backend-domain.com`
- Backend `CLIENT_URL=https://your-frontend-domain.com`

## Customization Guide

Edit the following for your personal branding:

- `frontend/src/App.jsx`
	- Name, bio, social links
	- Project cards (`featuredProjects`)
	- Skills and certifications
- `frontend/index.html`
	- Title and SEO metadata

## Troubleshooting

- CORS error:
	- Ensure backend `CLIENT_URL` matches frontend URL exactly.
- Contact form fails:
	- Verify `MAIL_USER`, `MAIL_PASS`, and `RECEIVER_EMAIL`.
	- If using Gmail, ensure App Password is used.
- Frontend cannot reach backend:
	- Check `VITE_API_BASE_URL` in `frontend/.env`.
	- Confirm backend is running on the configured port.
