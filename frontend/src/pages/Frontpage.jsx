/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login/Signup/Login";
import Register from "./Login/Signup/Register";
const Frontpage = () => {
  return (
    <div>
        <h1>Login or sign up ! </h1>
      <Link to="/login" element={<Login />}>
        <button>LogIn</button>
      </Link>
      <Link to="/register" element={<Register />}>
        <button>SignIn</button>
      </Link>
    </div>
  );
};

export default Frontpage;
