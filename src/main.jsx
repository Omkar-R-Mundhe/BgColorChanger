import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Instead of calling the app several times which can create multiple roots.create a single App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <App/>
   
  </StrictMode>
);
