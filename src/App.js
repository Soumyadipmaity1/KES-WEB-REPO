import './App.css';
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutus'; 
import ProjectPage from './pages/projects/projectpage';
import Achievement from './pages/achievements/achivement';
import StuBlogs from './pages/studentblogs/stublogs';
import event from './pages/event/event'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/studentblogs" element={<StuBlogs/>} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path='/event' element={event} />
      </Routes>
    </Router>
  );
}

export default App;





