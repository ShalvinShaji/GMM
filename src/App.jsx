import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Facilities from "./pages/Facilities";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Gallery from "./pages/Gallery";
import Governingboard from "./pages/Governingboard";
import Revgeorgemathen from "./pages/Revgeorgemathen";
import Visionmission from "./pages/Visionmission";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scrolltop from "./components/Scrolltop";
import Chatbot from "./components/Chatbot";
import Backtotop from "./components/Backtotop";

const App = () => {
  return (
    <>
      <Scrolltop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/governing-board" element={<Governingboard />} />
        <Route path="/reverend-george-mathen" element={<Revgeorgemathen />} />
        <Route path="/our-vision-mission" element={<Visionmission />} />
      </Routes>
      <Chatbot />
      <Backtotop />
      <Footer />
    </>
  );
};

export default App;
