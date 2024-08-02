/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Signup/Login";
import Landingpage from "./pages/Landingpage";
import Register from "./pages/Login/Signup/Register";
import Frontpage from "./pages/Frontpage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
};

export default App;
