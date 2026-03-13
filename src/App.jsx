import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";   
import AboutUs from "./pages/AboutUs";   
import Services from "./pages/services" 
import Doctor from "./pages/doctorPage"
import Band from "./pages/bandpage"
import Pharma from "./pages/pharmapg"
import Institute from "./pages/institue"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/band" element={<Band />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/institute" element={<Institute />} />
      </Routes>
    </Router>
  );
}

export default App;
