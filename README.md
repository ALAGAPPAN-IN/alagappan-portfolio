# N. Alagappan — Portfolio

A modern dark-themed developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed

### Installation & Running Locally

```bash
# 1. Navigate into the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Option 1 — Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

**Option 2 — Vercel Dashboard:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

---

### Deploy to Netlify

**Option 1 — Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option 2 — Netlify Dashboard:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy** ✅

---

### Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. In `package.json`, add:
```json
"homepage": "https://ALAGAPPAN-IN.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. In `vite.config.js`, set base:
```js
base: '/portfolio/'
```

4. Deploy:
```bash
npm run deploy
```

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Styling
- **Lucide React** — Icons
- **Google Fonts** — Syne, Outfit, JetBrains Mono

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Internship.jsx
│   │   ├── Certificates.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## ✨ Features

- Dark theme with glassmorphism cards
- Typewriter hero animation
- Scroll-triggered reveal animations
- Responsive mobile-first design
- Gradient mesh background
- Noise texture overlay
- Skill progress bars
- Copy email button
- Smooth navigation with active states

---

Built by **N. Alagappan** — Web Developer & CSE Student at SRIT
