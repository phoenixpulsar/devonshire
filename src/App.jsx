import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

  return (
    <div className={`min-h-screen flex flex-col ${t.pageBg} transition-colors duration-500`}>
      <ScrollToTop />
      <VariantSwitcher />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/diagrams" element={<DiagramsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
