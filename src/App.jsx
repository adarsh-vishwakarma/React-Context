import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";

const App = () => {
  return (
    <div className="p-10">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
