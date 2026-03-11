import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/membership', label: 'Membership' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  return (
    <header className={`sticky top-0 z-50 ${t.navbarBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <div className={`w-9 h-9 rounded-lg ${t.navbarLogoBg} flex items-center justify-center transition-colors duration-500`}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-bold ${t.navbarLogoText} tracking-tight transition-colors duration-500`}>Devonshire</span>
              <span className={`text-[10px] font-medium ${t.navbarSubtext} uppercase tracking-widest hidden sm:block transition-colors duration-500`}>
                Neighborhood Association
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive ? t.navbarLinkActive : t.navbarLink
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/membership"
              className={`ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${t.navbarCta}`}
            >
              Pay Dues
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${t.navbarToggle}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className={`md:hidden ${t.navbarMobileBg} transition-colors duration-500`}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive ? t.navbarLinkActive : t.navbarLink
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className={`block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-300 ${t.navbarCta}`}
            >
              Pay Dues
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
