import React, {useEffect, useState} from 'react';
import './ThemeToggle.css';

export default function ThemeToggle(){
  // Default to dark mode unless the user has an explicit saved preference
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(()=>{
    // Only set the data-theme attribute for light mode so the CSS :root stays as the dark default.
    if(theme === 'light'){
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  },[theme]);

  return (
    <button
      className="theme-toggle"
      onClick={()=>setTheme(t=> t==='light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
