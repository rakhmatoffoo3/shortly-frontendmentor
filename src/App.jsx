import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
       <div className="app">
      <Home />
    </div>
    </>
  );
}

export default App;


