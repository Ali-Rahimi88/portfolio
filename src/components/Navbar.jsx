import { Link } from 'react-router-dom'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav>
      <Link to="/" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
        Ali Akbar Rahimi
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar