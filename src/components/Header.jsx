import { useState } from 'react';

const links = [
  { label: 'What We Do', href: '#services' },
  { label: 'Our Gallery', href: '#gallery' },
  { label: 'Selected Work', href: '#projects' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Aangan Interiors home" onClick={closeMenu}>
        Rainbasera<span>venue &amp; living</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >{menuOpen ? '×' : '☰'}</button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s Talk <span>↗</span></a>
      </nav>
    </header>
  );
}
