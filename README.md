# Library Management Frontend

A responsive React application for a library management interface, developed as a frontend assignment. The project demonstrates component-based development, client-side routing, reusable UI components, and responsive styling.

## Primary Assignment Requirement: Delete

This assignment specifically demonstrates deleting an office record.

- Each office has a **Delete** button
- A confirmation prompt appears before deletion
- The application sends a `DELETE` request to the office API
- The office list refreshes after successful deletion

## Features

- User login and account creation interface
- Library office management view
- Office directory
- Book catalogue with pricing information
- Automatic book count and total price calculation
- Navigation through reusable header links
- Client-side routing with React Router

## Technologies Used

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- Oxlint

## Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable application components
├── App.jsx          # Application routes and layout
├── App.css          # Application-specific styles
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Mugabo-art/library-management-frontend.git
cd library-management-frontend
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the URL displayed in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint |

## Production Build

```bash
npm run build
```

The generated files are available in the `dist` directory.

## Known Limitations

- Authentication is currently a demonstration interface and does not connect to a backend.
- Account details and book data are handled locally and are not persisted.
- Some interface sections contain sample or demonstration data.

## Author

**Mugabo-art**

- GitHub: [github.com/Mugabo-art](https://github.com/Mugabo-art)
- Repository: [library-management-frontend](https://github.com/Mugabo-art/library-management-frontend)

## Academic Use

This project was created to demonstrate frontend development concepts and may be used for educational and assignment purposes.
