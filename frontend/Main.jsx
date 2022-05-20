import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import Chat from "./src/pages/chat/chat";
import Home from "./src/pages/Home";
import Login from "./src/pages/login";
import Register from "./src/pages/Register";

const Main = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
