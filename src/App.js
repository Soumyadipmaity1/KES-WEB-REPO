import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreLoader from './components/preloader/preloader';
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutus'; 
import ProjectPage from './pages/projects/projectpage';
import Achievement from './pages/achievements/achivement';
import StuBlogs from './pages/studentblogs/stublogs';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Hide the preloader when the entire page is loaded
    };

    window.addEventListener("load", handleLoad); // Listen for the load event

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup the event listener
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <PreLoader />
      ) : (
        children
      )}
    </Router>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/studentblogs" element={<StuBlogs />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Layout>
  );
}

export default App;
