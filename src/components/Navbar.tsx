// src/components/Navbar.tsx
import Link from 'next/link'; // <--- Make sure this import is here

// We'll add some inline styles to keep this simple
export default function Navbar() {
  return (
    <nav style={navStyle}>
      <Link href="/" style={logoStyle}>Lichess App</Link>
      <div style={linksContainerStyle}>
        {/* These must be <Link> components */}
        <Link href="/profile" style={linkStyle}>Profile Search</Link>
        <Link href="/leaderboards" style={linkStyle}>Leaderboards</Link>
        <Link href="/tournaments" style={linkStyle}>Tournaments</Link>
      </div>
    </nav>
  );
}

// Basic CSS-in-JS for styling
const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#1e1e1e',
  borderBottom: '1px solid #333',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
};

const linksContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle: React.CSSProperties = {
  color: '#ccc',
  fontSize: '1rem',
};