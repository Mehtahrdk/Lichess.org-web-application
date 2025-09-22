# Lichess.org Web Application

A simple web application built with Next.js and TypeScript that interacts with the Lichess.org API to display user profiles, leaderboards, and ongoing tournaments.

## 🚀 Live Demo

You can view the live deployed version here:
[View Live Deployment](lichess-org-web-application-f1cjipxdn.vercel.app)
## ✨ Features

* **Profile Search:** Search for any Lichess user and view their ratings.
* **Leaderboards:** See the top 10 players for the Blitz category.
* **Tournaments:** View a list of currently ongoing tournaments.

## 🛠️ Tech Stack

* **Framework:** Next.js (with Pages Router)
* **Language:** TypeScript
* **Styling:** CSS-in-JS (Inline Styles)
* **Deployment:** Vercel

## 📂 Project Structure

Here is the final structure of the `src` directory:
src/
├── components/
│   └── Navbar.tsx
├── lib/
│   └── lichessApi.ts
└── pages/
├── _app.tsx
├── index.tsx
├── leaderboards.tsx
├── profile.tsx
└── tournaments.tsx
## 🏃‍♂️ Running Locally

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
