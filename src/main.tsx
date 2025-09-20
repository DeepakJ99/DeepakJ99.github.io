// src/main.tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import 'highlight.js/styles/atom-one-dark.css'; 
import 'react-quill-new/dist/quill.core.css'; // Basic structure CSS
import 'react-quill-new/dist/quill.snow.css'; 
import './index.css'
import { AuthProvider } from './context/AuthContext';
ReactDOM.createRoot(document.getElementById('root')!).render(
       <AuthProvider>
            <App />
       </AuthProvider>
      
);

