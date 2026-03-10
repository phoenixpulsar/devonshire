import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Devonshire</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Supporting community safety, connection, and neighborhood improvement since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/announcements" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Member Dashboard
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pay Dues
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Board Members
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Resources
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Bylaws
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-gray-400">info@devonshireneighborhood.com</li>
              <li className="text-sm text-gray-400">P.O. Box 12345</li>
              <li className="text-sm text-gray-400">Dallas, TX 75209</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Devonshire Neighborhood Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
