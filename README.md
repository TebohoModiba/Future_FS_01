# Teboho Modiba | Personal Portfolio Website

A modern, performant, and fully interactive single-page portfolio built with vanilla React (CDN), showcasing my work as a Software Engineer and Web Developer.

## 🌟 Key Features

- **Smooth SPA Navigation** with custom page transition animations (exit/enter)
- **Real-time Typing Animation** in hero section using `setInterval` + React state
- **Animated Skill Bars** with staggered delay and CSS keyframe animations
- **Dark / Light / System Theme** support with `localStorage` persistence and `classList` toggling
- **Filterable Projects Grid** with live state filtering (React `useState`)
- **Clickable Project Cards** that open GitHub repositories
- **Functional Contact Form** with validation, WhatsApp deep linking, and fallback email
- **Floating Action Button** for quick GitHub access
- **Fully Responsive** design with mobile-first approach and multiple breakpoints
- **Accessible** navigation with ARIA labels and keyboard support

## 🛠️ Tech Stack

| Technology       | Purpose                              |
|------------------|--------------------------------------|
| **React 18**     | UI components & state management (via CDN) |
| **JSX + Babel**  | Transpilation for modern React syntax |
| **CSS3**         | Custom properties, Flexbox, Grid, Animations, Dark mode |
| **JavaScript (ES6+)** | Logic, form handling, localStorage |
| **HTML5**        | Semantic structure                   |

**Notable Implementation Details:**
- No build tools (Vite/Create-React-App) — pure client-side React via CDN for simplicity and fast loading
- Custom routing system without React Router
- Pure CSS animations (no Framer Motion or external libraries)
- Mobile hamburger menu with smooth state transitions

## 📁 Project Structure

```bash
Portfolio-Website/
├── assets/
│   └── profile.jpg
├── components/
│   ├── Navbar.js          # Theme toggle + responsive navigation
│   ├── Footer.js          # Links and social icons
│   └── ProjectCard.js     # Reusable clickable project component
├── pages/
│   ├── Home.js            # Hero, Animated Skills, Featured Projects
│   ├── About.js
│   ├── Projects.js        # Filterable project grid + state management
│   └── Contact.js         # Form validation + WhatsApp/Email integration
├── index.html             # Entry point with all script includes
├── main.js                # Main App component + routing logic
├── style.css              # All styles with CSS variables and responsive design
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: VS Code + Live Server extension for hot reload

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/TebohoModiba/Portfolio-Website.git

# 2. Navigate to project folder
cd Portfolio-Website

# 3. Open index.html
#    - Right-click index.html → Open with Live Server (Recommended)
#    - Or simply double-click the file
```

The site runs **entirely in the browser** — no `npm install`, no build step required.

## 🎨 Design & Performance

- **CSS Variables** for easy theming and maintainability
- **Performance optimized**: Minimal bundle (CDN), efficient re-renders, lightweight animations
- **Mobile-First** responsive breakpoints:
  - 320px, 480px, 640px, 768px
- **Smooth 60fps animations** using `transform` and `opacity`
- **Backdrop blur** and modern glassmorphism effects on navbar

## 📋 Features Breakdown

### Navigation & Routing
- Custom `navigate()` function with exit/enter animation states
- Persistent active link highlighting

### Projects Page
- Dynamic filtering using React state (`useState`)
- 5 real GitHub-linked projects
- Cards open repository on click (with event propagation handling)

### Contact Form
- Client-side validation
- WhatsApp deep link integration (`wa.me`)
- Email fallback using `mailto:`
- Real-time error clearing on input

### Theme System
- Supports `dark`, `light`, and `system` preference
- Saves preference in `localStorage`
- Respects user's OS preference on first visit

## 📊 Projects Included

- **Portfolio Website** – Current site (React + CSS)
- **Haven App** – React Native mental health application
- **NCD React Website** – Business website with modern UI
- **Habit Tracker** – React Native + Firebase + AI features
- **Mini CRM Website** – Full-stack customer management tool

All projects link directly to their GitHub repositories.

## 📬 Contact & Socials

- **WhatsApp**: [+27 66 096 3925](https://wa.me/27660963925)
- **GitHub**: [TebohoModiba](https://github.com/TebohoModiba)
- **LinkedIn**: [Teboho Modiba](https://www.linkedin.com/in/teboho-modiba-a4766a1b8/)

## 📄 License

This project is open-source under the **MIT License**. Feel free to use it as inspiration or a template for your own portfolio.

---

**Made with passion by Teboho Modiba**  
*Aspiring Software Engineer & Web Developer*

