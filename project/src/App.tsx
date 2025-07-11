import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Schedule from './components/Schedule';
import About from './components/About';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Schedule />
      <About />
      <Tips />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;