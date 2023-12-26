import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider } from 'daisyui';
// import { theme, setStoredTheme } from './theme';
// import ThemeToggleButton from './ThemeToggleButton';

const queryClient = new QueryClient()

// const storedTheme = localStorage.getItem('theme') || 'light';
// setStoredTheme(storedTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     </QueryClientProvider>
  
  </React.StrictMode>,
  
);

