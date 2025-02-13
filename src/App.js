import './App.css';
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutus'; 
import ProjectPage from './pages/projects/projectpage';
import Achievement from './pages/achievements/achivement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import EventsPage from './pages/event/event';
import KallisticFlair from './pages/kallisticflair/kaalisticflair';

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
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path="/events/kallisticflair" element={<KallisticFlair/>} />

      </Routes>
    </Router>
  );
}

export default App;





