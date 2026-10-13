import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label="Toggle dark/light mode"
    >
      {theme === 'dark' ? '🌙 Light Mode' : '☀️ Dark Mode'}
    </button>
  );
}
