import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

export default function Footer() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  return (
    <footer className={`${t.footerBg} ${t.footerText} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-lg ${t.navbarLogoBg} flex items-center justify-center transition-colors duration-500`}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className={`text-lg font-bold ${t.footerHeading} transition-colors duration-500`}>Devonshire</span>
            </div>
            <p className={`text-sm ${t.footerMuted} leading-relaxed max-w-xs transition-colors duration-500`}>
              Supporting community safety, connection, and neighborhood improvement since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-semibold ${t.footerHeading} uppercase tracking-wider mb-4 transition-colors duration-500`}>Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/announcements" className={`text-sm ${t.footerLink} transition-colors`}>
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={`text-sm ${t.footerLink} transition-colors`}>
                  Member Dashboard
                </Link>
              </li>
              <li>
                <Link to="/membership" className={`text-sm ${t.footerLink} transition-colors`}>
                  Pay Dues
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className={`text-sm font-semibold ${t.footerHeading} uppercase tracking-wider mb-4 transition-colors duration-500`}>About</h4>
            <ul className="space-y-2.5">
              <li>
                <span className={`text-sm ${t.footerLink} transition-colors cursor-pointer`}>
                  Board Members
                </span>
              </li>
              <li>
                <span className={`text-sm ${t.footerLink} transition-colors cursor-pointer`}>
                  Resources
                </span>
              </li>
              <li>
                <span className={`text-sm ${t.footerLink} transition-colors cursor-pointer`}>
                  Bylaws
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm font-semibold ${t.footerHeading} uppercase tracking-wider mb-4 transition-colors duration-500`}>Contact</h4>
            <ul className="space-y-2.5">
              <li className={`text-sm ${t.footerMuted} transition-colors duration-500`}>info@devonshireneighborhood.com</li>
              <li className={`text-sm ${t.footerMuted} transition-colors duration-500`}>P.O. Box 12345</li>
              <li className={`text-sm ${t.footerMuted} transition-colors duration-500`}>Dallas, TX 75209</li>
            </ul>
          </div>
        </div>

        <div className={`mt-10 pt-8 border-t ${t.footerBorder} text-center transition-colors duration-500`}>
          <p className={`text-sm ${t.footerCopy} transition-colors duration-500`}>
            &copy; {new Date().getFullYear()} Devonshire Neighborhood Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
