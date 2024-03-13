/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authReducer from "./authReducer.js";

const Navigations = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigations;
