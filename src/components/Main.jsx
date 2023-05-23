import React from "react";
import { Navbar, Projects, AboutMe, Home, Footer, MessageForm } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
        <Route path="/messageForm" element={<MessageForm/>}/>
        </Routes>
      <Footer />
    </div>
  );
};

export default Main;
