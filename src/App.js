import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Footer from "./footer";
import Content from "./content";
import News from "./News";
import About from "./About"
import Contact from './Contact';
import Games from './Games';
import "./App.css";
import "./script";
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <BrowserRouter>
        <div className="Navbar">
          <div className='logo-name'>      {/* logo */}
          <img src="/Ro-deck logo.png" className='logo' alt='rodeck-logo'></img>
          <h2>Ro-Deck</h2>
          </div>
          {/* Hamburger Button */}
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
          <nav className="App">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>               {/* Navbar */}
            <li>
              <Link to="/" id="home1">Home</Link>
            </li>
            <li>
              <Link to="/news" id="news2">News</Link>
            </li>
            <li>
              <Link to="/Contact" id="contact3">Contact</Link>
            </li>
            <li>
              <Link to="/about" id="about4">About</Link>
            </li>
            <li>
              <Link to="/Games" id="game5">Games</Link>
            </li>
          </ul>                          {/* User name */}
          <h2 className="user-welcome">-Welcome, User!</h2>
          </nav>
          </div> 
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/News" element={<News />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Games" element={<Games />}/>
          </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
