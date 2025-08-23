# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


#Project Overview: Secure Messenger Frontend
```
##Project Structure
secure-messenger-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── GlassCard.tsx
│   ├── pages/
│   │   └── auth/
│   │       ├── AuthLayout.tsx
│   │       ├── LoginPage.tsx
│   │       └── RegisterPage.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
##Technology Stack
Framework: React 19 with TypeScript
Build Tool: Vite 7
Routing: React Router DOM 7
Styling: Emotion (CSS-in-JS)
Animations: Framer Motion
Linting: ESLint with TypeScript ESLint
Project Configuration
Package.json
Scripts for development, building, linting, and preview
Dependencies include React 19, React Router DOM 7, Emotion, and Framer Motion
Dev dependencies for TypeScript, ESLint, and Vite plugins

TypeScript Configuration
Split configuration with tsconfig.app.json for application code and tsconfig.node.json for build tools
Strict mode enabled with modern ES2022/ES2023 targets
React JSX transformation enabled
verbatimModuleSyntax enabled, requiring explicit type-only imports
Application Architecture
Entry Point (main.tsx)
Standard React application bootstrap with StrictMode
Renders the main App component
Main App Component (App.tsx)
Implements routing with React Router DOM
Routes:
/login → LoginPage
/register → RegisterPage
/ → Redirects to /login
Authentication Flow
AuthLayout (src/pages/auth/AuthLayout.tsx)

Provides a styled container with gradient background
Uses Framer Motion for entrance animations
Wraps authentication forms
Fixed TypeScript warning by using type-only import for ReactNode
LoginPage (src/pages/auth/LoginPage.tsx)

Email and password inputs
Login button with handler
Links to register page and forgot password (not implemented)
Uses GlassCard components for styling
RegisterPage (src/pages/auth/RegisterPage.tsx)

Email, username, and password inputs
Register button with handler
Link to login page
Uses GlassCard components for styling
UI Components (GlassCard.tsx)
A collection of styled components using Emotion:

GlassCard: Main card container with glassmorphism effect
Input: Styled input fields with focus effects
Button: Primary action button with hover effects
Title: Page titles
SubText: Supporting text
Link: Styled anchor elements
Styling
Global styles in src/index.css and src/App.css
Dark theme with gradient backgrounds
Glassmorphism design language throughout
Key Features
Modern authentication UI with glassmorphism design
Animated transitions using Framer Motion
Responsive layout that works on different screen sizes
Type-safe React components with TypeScript
Clean routing setup with automatic redirects
Development Workflow
Development server: npm run dev
Build for production: npm run build
Linting: npm run lint
Preview production build: npm run preview
The project follows modern React best practices with a clean separation of concerns between pages and components. The authentication flow is well-structured with reusable UI components. I've also fixed a TypeScript warning in AuthLayout.tsx by using a type-only import for ReactNode, which is required when verbatimModuleSyntax is enabled in the TypeScript configuration.