import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostSingle from './pages/PostSingle';
import PageView from './pages/PageView';
import ShowcaseGallery from './showcases/ShowcaseGallery';
import ShowcaseView from './showcases/ShowcaseView';

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">Devonshire</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/showcases">Showcases</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<PostList />} />
          <Route path="/blog/:slug" element={<PostSingle />} />
          <Route path="/page/:slug" element={<PageView />} />
          <Route path="/showcases" element={<ShowcaseGallery />} />
          <Route path="/showcases/:id" element={<ShowcaseView />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Devonshire. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  );
}
