import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing';
import './tailwind.config';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  // Check if the current route is '/'
  const isLandingPage = location.pathname === '/';

  return (
    <div className={!isLandingPage ? 'app-container' : ''}>
      {!isLandingPage && <Navbar />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      {/* Render the footer only if the current route is not '/' */}
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default App;
