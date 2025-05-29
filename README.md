# QuillNot - Paraphraser

QuillNot is an AI-powered paraphrasing app I created out of annoyance with QuillBot's 150-word limit for free users. I wanted a tool that was completely free, without data collection, or annoying ads. So, I built my own.

Unlike QuillBot, this tool automatically saves your input and output as you make changes, so you never have to worry about losing your work.

Feel free to use it for your rewording needs: [quillnot.site](https://www.quillnot.site/)

<img src="https://github.com/user-attachments/assets/63cdde44-2a39-4725-b551-ef79c627e89a" alt="macbook-air-m2-lid-open" height="600rem">

## Tech 

- TypeScript

- React JS

- [Google's Gemini API](https://ai.google.dev/)

- [Tailwind CSS](https://tailwindcss.com/)

- [react-markdown](https://www.npmjs.com/package/react-markdown/v/8.0.6) (to properly style AI's output)

- [Firebase Firestore](https://firebase.google.com/docs/firestore) (backend to store total paraphrases and unique users count)

<br></br>

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
