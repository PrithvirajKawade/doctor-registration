import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Medical App</h2>
      <img className="femaleDoc" src="./femaleDoctor.png" alt="" />
      <div className="button-container">
        <Link to="/register" className="button">
          Register
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/doctors" className="button">
          View Doctors
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
