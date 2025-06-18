// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'
import Bespoke from './pages/Bespoke';
import Readytowear from "./pages/Readytowear"
import Bridal from './pages/Bridal';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/bespoke' element={<Bespoke/> }/>
        <Route path='/readytowear' element={<Readytowear/>} />
        <Route path='/bridal' element={<Bridal/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
