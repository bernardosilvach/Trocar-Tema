import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme === 'light' ? 'Light' : 'Dark'}</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
};

export default ThemeToggler;
