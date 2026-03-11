import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  Home,
  Megaphone,
  LayoutDashboard,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

const sidebarLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/announcements', label: 'Announcements', icon: Megaphone },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/membership', label: 'Membership', icon: CreditCard },
];

export default function SidebarNav() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  return (
    <aside
      className={`hidden lg:flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      } bg-slate-900 border-r border-slate-800 transition-all duration-300 min-h-0`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-800">
        <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="flex flex-col leading-tight overflow-hidden">
            <span className="text-base font-bold text-white tracking-tight truncate">
              Devonshire
            </span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
              Command Center
            </span>
          </div>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.to;
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={collapsed ? link.label : undefined}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="px-3 py-4 border-t border-slate-800">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 shrink-0" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
