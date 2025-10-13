# Canvas Layout Pattern Builder

A modern, interactive canvas-based layout pattern builder for creating and previewing UI components and sections.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/taehyunky/layoutPattern-withCanvas)

## Features

- 🎨 Interactive Canvas Workspace with zoom/pan functionality
- 🧩 Pre-built Hero Section Components (Asymmetric, Bento, Media, etc.)
- 🎯 shadcn/ui Components Integration
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Canvas Workspace

The canvas workspace provides an interactive environment for building and previewing layout patterns:

- **Zoom Controls**: Use the zoom in/out buttons or mouse wheel to adjust the view
- **Pan Navigation**: Click and drag to move around the canvas
- **Reset & Center**: Reset zoom level or center the view
- **Component Library**: Drag and drop pre-built components onto the canvas

## Available Components

### Hero Sections

- Asymmetric Grid Layout
- Bento Grid Layout
- Media Hero
- Minimal Centered
- Promo Hero
- Scroll Reveal
- Split Screen

### UI Components

- Button
- Card
- Badge
- Separator
- Tabs
- Scroll Area

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Tech Stack

- **React Router**: Modern routing for React applications
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **React Zoom Pan Pinch**: Canvas interaction library

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── canvas/          # Canvas workspace components
│   │   ├── sections/        # Pre-built section components
│   │   └── ui/             # shadcn/ui components
│   ├── routes/             # Application routes
│   └── lib/                # Utility functions
│   └── lib/                # Utility functions
└── components.json         # shadcn/ui configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using React Router and shadcn/ui.
