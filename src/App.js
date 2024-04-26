import './App.css';
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutus'; 
import ProjectPage from './pages/projects/projectpage';
import Achievement from './pages/achievements/achivement';
import StuBlogs from './pages/studentblogs/stublogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/studentblogs" element={<StuBlogs/>} />
        <Route path="/achievement" element={<Achievement/>} />

      </Routes>
    </Router>
  );
}

export default App;





