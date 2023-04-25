import React from "react";
import { Navbar, Projects, AboutMe, Home, Footer } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      <Footer />
    </div>
  );
};

export default Main;
