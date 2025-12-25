# 🖥️ Nikhil's Portfolio

A **macOS-inspired interactive portfolio** built with React 19 and TypeScript, featuring draggable windows, an animated Dock, and a Finder-style file browser.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock&logoColor=white)

## ✨ Features

- **🪟 Draggable Windows** — Fully interactive windows with open, close, focus, and maximize/restore functionality
- **⚓ Animated Dock** — macOS-style dock with proximity-based icon scaling and smooth animations
- **📁 Finder Browser** — Navigate through projects, files, and folders with a familiar interface
- **🎨 Dynamic Wallpapers** — Auto-rotating wallpapers with smooth transitions
- **📝 Variable Font Animations** — Mouse-proximity text weight morphing using GSAP
- **📄 Integrated PDF Viewer** — View resume directly within the portfolio
- **💻 Terminal Window** — Stylized tech stack display in terminal format

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | GSAP, GSAP Draggable |
| **State Management** | Zustand, Immer |
| **Build Tool** | Vite 7 |
| **Icons** | Lucide React |
| **PDF Rendering** | react-pdf |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nikhil-portfolio.git

# Navigate to project directory
cd nikhil-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Dock.tsx         # macOS-style animated dock
│   ├── Navbar.tsx       # Top navigation bar
│   ├── Welcome.tsx      # Hero section with variable font animation
│   └── WindowControls.tsx
├── windows/          # Individual window components
│   ├── Finder.tsx       # File browser window
│   ├── Terminal.tsx     # Tech stack display
│   ├── Safari.tsx       # Browser window
│   ├── Resume.tsx       # PDF viewer
│   ├── Contact.tsx      # Contact form
│   └── ...
├── hoc/              # Higher-Order Components
│   └── WindowWrapper.tsx  # Reusable window behavior (drag, maximize, etc.)
├── store/            # Zustand state stores
│   ├── window.ts        # Window state management
│   └── finderLocation.ts
└── constants/        # Static data and configurations
```

## 🎯 Key Implementation Highlights

### Window Management System
A centralized Zustand store with Immer manages all window states including:
- Z-index layering for window focus
- Maximize/restore with position memory
- Open/close state persistence

### GSAP Animations
- **Dock Icons**: Proximity-based scaling using exponential decay: `Math.exp(-(distance ** 3) / 2000)`
- **Text Effects**: Variable font weight morphing (`fontVariationSettings: 'wght' 100-900`)
- **Window Transitions**: Smooth scale and opacity animations on open/close

### Higher-Order Component Pattern
`WindowWrapper` HOC provides consistent window behavior:
- Drag functionality via GSAP Draggable
- Maximize/restore animations
- Focus management on click

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio!

---

**Built with ❤️ by Nikhil Kumar Singh**
