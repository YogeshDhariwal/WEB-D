# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installing Tailwind Css
``` 
Step-1
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
```
 ``` 
Step-2
 creates 2 file:
 1.tailwind.config.js
 2.postcss.config.js
 ```
 ```
Step-3  Add configuration 
 content:["./src/**/*.{js,jsx,ts}"]
 ```
 ```
Step-4  Include these to index.css or App.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
 ```
 ``` 
Step-5  Start server
    npm run dev
 ```