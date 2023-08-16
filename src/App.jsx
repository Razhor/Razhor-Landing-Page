import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <>
        <Head />
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Body>
        <Footer />
      </>
    </Router>
  );
};

export default App;
