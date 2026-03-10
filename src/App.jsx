import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import MembershipPage from './pages/MembershipPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import DiagramsPage from './pages/DiagramsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
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
