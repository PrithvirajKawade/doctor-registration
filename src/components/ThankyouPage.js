import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = ({ setIsSubmitted }) => {
  return (
    <div className="thank-you-page">
      <h2>Thank You for Registration!</h2>
      <p>Your registration was successful.</p>
      <button onClick={() => setIsSubmitted(false)}>Go back</button>
      <button>Go to Login</button>
    </div>
  );
};

export default ThankYouPage;
