
import { configure } from 'daisyui';

const getStoredTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

const setStoredTheme = (theme) => {
  localStorage.setItem('theme', theme);
};


const theme = configure({
  dark: getStoredTheme() === 'dark', 
  
});

export { theme, setStoredTheme };