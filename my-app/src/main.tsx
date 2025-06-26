import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './app.tsx'
import Menu from './index.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
    <Menu />
  </StrictMode>
)
