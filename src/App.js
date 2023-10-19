import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Import the HomePage component
import RegistrationForm from "./components/RegistrationForm"; // Import your registration form component
import LoginForm from "./components/LoginForm"; // Import your login form component
import DoctorsPage from "./components/DoctorsPage"; // Import your doctors page component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/doctors" element={<DoctorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
