# Vue.js 3 Examen Template
Kamil Kala
05-06-2025

## 📋 Projectbeschrijving
Dit is mijn complete Vue.js 3 template voor examenvoorbereiding.

## 🚀 Installatie-instructies

### Vereisten
- Node.js (versie 16 of hoger)
- npm of yarn
- Git
- Visual Studio Code

### Stap 1: Project clonen
```bash
git clone <repository-url>
cd vue-examen-template
```

### Stap 2: Dependencies installeren
```bash
npm install
```

### Stab 3: Development server starten
```bash
npm run dev
```

De applicatie is nu beschikbaar op: http://localhost:5173

## 📦 Meegeleverde pakketten

### Core Dependencies
- **Vue 3** - JavaScript framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Axios** - HTTP client voor API calls
- **Bootstrap 5** - CSS framework voor styling
- **Popper.js** - Voor Bootstrap tooltips/popovers

### Build Tools
- **Vite** - Build tool en development server
- **@vitejs/plugin-vue** - Vue plugin voor Vite

## 🏗️ Projectstructuur

```
src/
├── components/          # Herbruikbare componenten
│   ├── common/         # Gemeenschappelijke componenten
│   │   ├── AppNavbar.vue
│   │   ├── AppFooter.vue
│   │   ├── AppSidebar.vue
│   │   ├── AppModal.vue
│   │   └── AppCard.vue
│   └── forms/          # Form componenten
│       └── LoginForm.vue
├── views/              # Pagina componenten
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── LoginView.vue
│   └── DashboardView.vue
├── router/             # Vue Router configuratie
│   └── index.js
├── stores/             # Pinia stores
│   └── main.js
├── services/           # API services
│   └── api.js
├── assets/             # Statische bestanden
│   └── images/
├── styles/             # CSS bestanden
│   └── main.css
├── App.vue            # Root component
└── main.js           # Entry point
```

## 🎯 Wat is voorbereid voor het examen

### ✅ Technische Basis
- Vue Router met voorbeeldroutes
- Bootstrap 5 styling
- Pinia state management setup
- Axios configuratie voor API calls
- Responsive navbar, footer en sidebar
- Standaard componenten (cards, modals, forms)
- Placeholder content en afbeeldingen

### ✅ Componenten
- **AppNavbar**: Responsive navigatie
- **AppFooter**: Footer component
- **AppSidebar**: Zijbalk navigatie
- **AppModal**: Herbruikbare modal
- **AppCard**: Standaard card component
- **LoginForm**: Login formulier

### ✅ Pagina's
- Home pagina met voorbeeldcontent
- About pagina
- Login pagina
- Dashboard pagina (basis layout)

### ✅ Services
- API service configuratie
- HTTP interceptors
- Error handling basis

## 🔧 Beschikbare Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run preview` - Preview productie build

## 🆘 Troubleshooting

### Node modules problemen
```bash
rm -rf node_modules package-lock.json
npm install
```
---