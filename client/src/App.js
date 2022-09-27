import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Contact from "./components/Contact/Contact";
import Collaborate from './components/Collaborate/Collaborate';
import Donations from './components/Donations/Donations';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Project from "./components/Project/Project";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/donate' element={<Donations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
