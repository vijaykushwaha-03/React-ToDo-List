import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, Search, Heart, User } from 'lucide-react';
import './BottomNav.css';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/categories', label: 'Categories', icon: LayoutGrid },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/wishlist', label: 'Wishlist', icon: Heart },
  { to: '/profile', label: 'Profile', icon: User },
];

const BottomNav = () => {
  return (
    <footer className="bottom-nav-container">
      <nav className="bottom-nav">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end // Use 'end' for the home route to prevent it from matching all routes starting with '/'
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon className="nav-icon" size={26} strokeWidth={1.5} />
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;
