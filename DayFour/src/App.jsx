import React from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
