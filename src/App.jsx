import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarNav from './components/SidebarNav';
import BottomTabNav from './components/BottomTabNav';
import VariantSwitcher from './components/VariantSwitcher';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import MembershipPage from './pages/MembershipPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import DiagramsPage from './pages/DiagramsPage';
import { useTheme } from './context/ThemeContext';
import { themes } from './themes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const pages = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/diagrams" element={<DiagramsPage />} />
    </Routes>
  );

  // Option 6: Command Center — sidebar layout
  if (activeVariant === 6) {
    return (
      <div className={`min-h-screen flex flex-col ${t.pageBg} transition-colors duration-500`}>
        <ScrollToTop />
        <VariantSwitcher />
        {/* Mobile: top navbar; Desktop: sidebar */}
        <div className="lg:hidden">
          <Navbar />
        </div>
        <div className="flex flex-1 min-h-0">
          <SidebarNav />
          <main className="flex-1 overflow-y-auto">
            {pages}
          </main>
        </div>
        <div className="lg:hidden">
          <Footer />
        </div>
      </div>
    );
  }

  // Option 7: Community Feed — bottom nav layout
  if (activeVariant === 7) {
    return (
      <div className={`min-h-screen flex flex-col ${t.pageBg} transition-colors duration-500`}>
        <ScrollToTop />
        <VariantSwitcher />
        {/* Minimal top nav on desktop */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <main className="flex-1">
          {pages}
        </main>
        <BottomTabNav />
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
    );
  }

  // Options 1–5: Standard top navbar layout
  return (
    <div className={`min-h-screen flex flex-col ${t.pageBg} transition-colors duration-500`}>
      <ScrollToTop />
      <VariantSwitcher />
      <Navbar />
      <main className="flex-1">
        {pages}
      </main>
      <Footer />
    </div>
  );
}
