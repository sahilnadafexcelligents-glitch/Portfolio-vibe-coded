<div align="center">

# Sahil.dev - Java Developer Portfolio

Dark, responsive, GitHub-ready portfolio app for a Java developer.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=fff)](https://vite.dev/)
[![Java](https://img.shields.io/badge/Java-Focused-ED8B00?style=for-the-badge&logo=openjdk&logoColor=fff)](https://www.java.com/)
[![License](https://img.shields.io/badge/License-Personal-50D890?style=for-the-badge)](#)

</div>

## Overview

Sahil.dev is a polished single-page portfolio built with React and Vite. It is
structured for clean GitHub presentation, fast local development, static hosting,
and future backend expansion.

The app includes a multi-section portfolio experience for Java skills, projects,
experience, contact details, and a backend-ready login demo.

## Highlights

- Dark modern UI with responsive layouts
- Cursor-follow glow behavior
- Animated hero accents and hover interactions
- Java-focused skills and project presentation
- Component-based React file structure
- Centralized portfolio data
- Contact form UI
- Login demo prepared for future Java authentication
- GitHub Pages friendly Vite configuration
- ESLint configured for clean code checks

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React, JavaScript, CSS |
| Build Tool | Vite |
| Code Quality | ESLint |
| Hosting Ready | GitHub Pages, Netlify, Vercel, static hosting |

## Screens / Sections

| Section | Purpose |
| --- | --- |
| Home | Hero, intro, primary actions, quick stats |
| About | Developer summary and working values |
| Skills | Core Java, backend, frontend, and tools |
| Projects | Project cards with stack tags |
| Experience | Current learning path and goals |
| Contact | Contact links and message form UI |
| Login | Demo login flow for future backend integration |

## Folder Structure

```text
.
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
|-- README.md
`-- src
    |-- App.jsx
    |-- main.jsx
    |-- styles.css
    |-- components
    |   |-- CursorGlow.jsx
    |   |-- Footer.jsx
    |   `-- Header.jsx
    |-- data
    |   `-- portfolio.js
    `-- pages
        |-- About.jsx
        |-- Contact.jsx
        |-- Experience.jsx
        |-- Home.jsx
        |-- Login.jsx
        |-- Projects.jsx
        `-- Skills.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

Start with LAN access:

```bash
npm run dev -- --host 0.0.0.0
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Deployment

This project is configured with a relative Vite base path:

```js
base: "./"
```

That makes the build more reliable on GitHub Pages and other static hosts.

Build the app:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

## Customize

Update portfolio content here:

```text
src/data/portfolio.js
```

Update page markup here:

```text
src/pages/
src/components/
```

Update styling here:

```text
src/styles.css
```

Before publishing publicly, replace:

- `hello@example.com`
- GitHub profile URL
- LinkedIn profile URL
- Real project links
- Resume link, if you add one

## Quality Checks

The project has been verified with:

```bash
npm run lint
npm run build
```

## Author

**Sahil.dev**  
Java Developer Portfolio
