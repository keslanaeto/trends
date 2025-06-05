// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Casual from './pages/dresses/Bespoke';
import Party from './pages/dresses/ReadyWear';
import Bridal from './pages/dresses/Bridal';
import About from './pages/About';
import Contact from './pages/Contact';
import AllDresses from './pages/dresses/AllDresses'




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dresses/casual" element={<Casual />} />
        <Route path="/dresses/party" element={<Party />} />
        <Route path='/dresses'element={<AllDresses/>} /> 
        <Route path='/dresses/bridal' element={<Bridal/>} />
      </Routes>
    </>
  );
};

export default App;
