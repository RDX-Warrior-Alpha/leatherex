
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SourcingAssistant from './components/SourcingAssistant';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Sourcing from './pages/Sourcing';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-colors duration-200 bg-background-light dark:bg-background-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sourcing" element={<Sourcing />} /> 
          </Routes>
        </main>
        <Footer />
        <SourcingAssistant />
      </div>
    </Router>
  );
};

export default App;
