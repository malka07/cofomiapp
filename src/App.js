import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Organizacion from './components/Opciones/Organizacion'; 
import Institucional from './components/Opciones/Institucional/index.js';
import Inicio from './components/Inicio/';
import { animateScroll as scroll } from 'react-scroll';
import Footer from './components/Footer';
import Aranceles from './components/Opciones/Aranceles/aranceles';
import Profesionales from './components/Opciones/Profesionales/profesionales';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar/Navbar';


import './App.css';

function App() {
  const scrolliToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Inicio />
        
        <Institucional id="institucional" />
      
        <Organizacion />
        <Profesionales />
        <Aranceles />
        <Contacto />
        <Footer />
        
      </div>
    </Router>
  );
}



export default App;
