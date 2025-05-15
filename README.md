# Floww Application (https://flowwapp.vercel.app/)

## Overview
Floww is a React-based task management application that allows users to manage tasks, view statistics, and handle user authentication through login and signup components. The app is styled using Tailwind CSS and leverages modern React features such as hooks and React Router for routing.

## Libraries and Frameworks Used
- **React (v19.1.0)**: JavaScript library for building user interfaces.
- **React DOM (v19.1.0)**: DOM-specific methods for React.
- **React Router DOM (v7.6.0)**: Declarative routing for React applications.
- **Framer Motion (v12.11.4)**: Animation library for React.
- **AOS (Animate On Scroll) (v2.3.4)**: Library to animate elements on scroll.
- **Lucide React (v0.510.0)** and **React Icons (v5.5.0)**: Icon libraries for React.
- **Tailwind CSS (v3.4.17)**: Utility-first CSS framework for styling.
- **Vite (v6.3.5)**: Fast frontend build tool and development server.

## Key Components and Functions

- **App.jsx**: The main application component that sets up routing and manages the global state of tasks using React hooks. It renders the main sections of the app including the Navbar, ProfileCard, TaskList, Statistics, Login, and Signup components.

- **Navbar.jsx**: Provides navigation links and site branding.

- **ProfileCard.jsx**: Displays user profile information.

- **TaskList.jsx**: Manages and displays the list of tasks. Supports adding new tasks and toggling task completion status.

- **Statistics.jsx**: Displays statistics related to the tasks, such as completed vs pending tasks.

- **Login1.jsx** and **Signup.jsx**: Components handling user authentication interfaces.

## Folder Structure

```
floww/
├── public/                  # Static assets like images
│   ├── githubphoto.jpg
│   └── vite.svg
├── src/                     # Source code
│   ├── assets/              
│   │   └── react.svg
│   │   
│   ├── components/          # React components
│   │   ├── Login1.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Signup.jsx
│   │   ├── Statistics.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   ├── index.css            # Global CSS styles
│   └── App.css              # App-specific CSS styles
├── .gitignore               # Git ignore rules
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the app.

## Additional Notes

- The project uses ESLint for linting and code quality.
- Tailwind CSS is configured for utility-first styling.
- React Router handles client-side routing.
- Framer Motion and AOS are used for animations and scroll effects.
- Icons are provided by Lucide React and React Icons libraries.
