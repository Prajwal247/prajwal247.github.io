import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const themes = useMemo(() => ({
    light: { icon: '☀️', label: 'Light' },
    dark: { icon: '🌙', label: 'Dark' },
    system: { icon: '💻', label: 'Auto' }
  }), []);

  useEffect(() => {
    const body = document.body;
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      body.classList.toggle('light-theme', !systemPrefersDark);
    } else if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    const handler = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);

  useEffect(() => {
    const onDocumentClick = (event) => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      if (!nav.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  return (
    <nav id="nav">
      <Link to="/" className="logo">Prajwal Thapa</Link>
      <div
        className={`burger-menu${menuOpen ? ' active' : ''}`}
        id="burgerMenu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/publications">Publications</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><a href="https://prajwal247.github.io/Prajwal_thapa_CV.pdf" target="_blank" rel="noreferrer">CV</a></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="theme-switcher" id="themeSwitcher">
        <div className="theme-current" id="themeCurrent" onClick={(e) => {
          e.stopPropagation();
          const el = document.getElementById('themeSwitcher');
          el?.classList.toggle('open');
        }}>
          <span id="currentThemeIcon">{themes[theme].icon}</span>
          <span id="currentThemeLabel">{themes[theme].label}</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="theme-dropdown">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              className={`theme-option${theme === t ? ' active' : ''}`}
              data-theme={t}
              onClick={(e) => {
                e.stopPropagation();
                setTheme(t);
                localStorage.setItem('theme', t);
                const el = document.getElementById('themeSwitcher');
                el?.classList.remove('open');
              }}
            >
              <span>{themes[t].icon}</span>
              <span>{themes[t].label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

