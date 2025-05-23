import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Poppins font family (primary) and keep Inter (secondary)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
