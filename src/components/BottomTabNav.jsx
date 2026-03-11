import { Link, useLocation } from 'react-router-dom';
import { Home, Megaphone, LayoutDashboard, CreditCard } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/announcements', label: 'Feed', icon: Megaphone },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/membership', label: 'Pay', icon: CreditCard },
];

export default function BottomTabNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-rose-100/50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.to;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'text-rose-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-rose-500' : ''}`} />
              <span>{tab.label}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-rose-500 mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
