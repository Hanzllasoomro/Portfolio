# Portfolio Frontend

A modern portfolio web application built with Vite and React. This project is organized for clarity, scalability, and ease of development. Below is a complete guide to each module and directory in the project.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Modules & Directories](#modules--directories)
  - [src/](#src)
    - [components/](#components)
    - [data/](#data)
    - [lib/](#lib)
    - [pages/](#pages)
    - [assets/](#assets)
  - [public/](#public)
- [Configuration Files](#configuration-files)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build](#build)
- [License](#license)

---

## Project Structure

```
Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── jsconfig.json
├── eslint.config.js
└── README.md
```

---

## Modules & Directories

### src/
Main source code for the application.

#### src/components/
Reusable UI components and layout elements.
- **Navbar.jsx**: The main navigation bar for the site.
- **Footer.jsx**: The footer section.
- **theme-provider.jsx**: Handles theme context and switching.
- **ui/**: Shared UI elements (Badge, Button, Progress, Theme Toggle).

#### src/data/
Static data files (JSON, JS, or TS) for content, such as project lists, skills, etc.

#### src/lib/
Utility functions and helpers.
- **utils.js**: Common utility functions used throughout the app.

#### src/pages/
Top-level pages for routing.
- **Home.jsx**: Landing page.
- **About.jsx**: About me section.
- **Projects.jsx**: Portfolio projects showcase.
- **Contact.jsx**: Contact form and details.
- **Resumes.jsx**: Resume/CV download or view.

#### src/assets/
Static assets like images and SVGs (e.g., `react.svg`).

### public/
Static files served directly. Place favicons, manifest, and static images here.

---

## Configuration Files
- **.gitignore**: Specifies files and folders to be ignored by git (see file for details).
- **index.html**: Main HTML template.
- **package.json**: Project dependencies and scripts.
- **vite.config.js**: Vite configuration.
- **jsconfig.json**: JS project configuration for editor tooling.
- **eslint.config.js**: Linting rules.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start development server:**
   ```sh
   npm run dev
   ```
3. **Open in browser:**
   Visit `http://localhost:5173` (or as shown in terminal).

---

## Development
- Edit components in `src/components/` or pages in `src/pages/`.
- Add assets to `src/assets/` or `public/` as needed.
- Use `src/lib/` for utilities and helpers.
- Update static data in `src/data/`.

---

## Build
To create a production build:
```sh
npm run build
```
Output will be in the `dist/` directory.

---

## License
This project is open source and available under the [MIT License](LICENSE).
