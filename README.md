# Sahil.dev - Java Developer Portfolio

A modern dark-shade React portfolio for a Java developer. The app presents
Sahil's skills, projects, learning path, contact details, and a backend-ready
login demo in a polished single-page experience.

## Preview

Run the app locally and open:

```text
http://127.0.0.1:5173
```

## Features

- Dark responsive portfolio design
- Home, About, Skills, Projects, Experience, Contact, and Login sections
- Java-focused content and project cards
- Cursor-follow glow interaction
- Animated hero accents and hover effects
- Contact form UI
- Backend-ready login page for future Java authentication
- Vite build setup with GitHub Pages friendly asset paths
- ESLint configuration for code quality

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Start with LAN access:

```bash
npm run dev -- --host 0.0.0.0
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## Project Structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── src
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Pages

- `Home` - Hero section, intro, stats, and primary actions
- `About` - Developer summary and working values
- `Skills` - Java, backend, frontend, and tooling skills
- `Projects` - Portfolio project cards with stacks
- `Experience` - Learning roadmap and development goals
- `Contact` - Contact links and message form UI
- `Login` - Demo login screen for future backend integration

## Deployment

This project includes:

```js
base: "./"
```

in `vite.config.js`, so the production build can work correctly on static
hosting and GitHub Pages.

Build output is generated in:

```text
dist/
```

## Customize

Update portfolio content in:

```text
src/App.jsx
```

Update visual styling in:

```text
src/styles.css
```

Before publishing, replace these placeholders:

- `hello@example.com`
- GitHub profile link
- LinkedIn profile link
- Resume link, if added
- Project descriptions, if you want to use real deployed project URLs

## GitHub Push

Create an empty GitHub repository, then connect and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Author

Sahil.dev - Java Developer Portfolio
