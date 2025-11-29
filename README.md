# AI School Nutritionist Frontend

This is the frontend for the AI School Nutritionist application, built with Vite and TypeScript.

## Setup

1. Navigate to this directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Backend Integration

The frontend expects the backend API to be running at `http://72.62.64.31:8000/api/recognition/vegetable`.
The Vite development server proxies requests starting with `/api` to the backend.

