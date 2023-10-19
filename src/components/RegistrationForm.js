import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import ThankYouPage from "./ThankyouPage";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    dateOfGraduation: "",
    degree1: "",
    degree2: "",
    onlineConsultFee: "",
    inPersonConsultFee: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+{}|:<>?~/]).{8,}$/;
    const isValid = passwordRegex.test(password);
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters, with at least 1 special character and 1 digit.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: null,
      }));
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile Number is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form or handle the data here
      const doctorData = {
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        fullName: formData.fullName,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        dateOfGraduation: formData.dateOfGraduation,
        degree1: formData.degree1,
        degree2: formData.degree2,
        onlineConsultFee: formData.onlineConsultFee,
        inPersonConsultFee: formData.inPersonConsultFee,
      };

      try {
        const response = await axios.post(
          "http://localhost:3001/doctors",
          doctorData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Doctor registered successfully:", response.data);
        setIsSubmitted(true);

        setFormData({
          mobileNumber: "",
          email: "",
          fullName: "",
          password: "",
          confirmPassword: "",
          dateOfGraduation: "",
          degree1: "",
          degree2: "",
          onlineConsultFee: "",
          inPersonConsultFee: "",
        });
      } catch (error) {
        console.error("Error registering doctor:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="main_container">
      {isSubmitted ? (
        <ThankYouPage setIsSubmitted={setIsSubmitted} />
      ) : (
        <div>
          <h2>Contact Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && (
                <span className="error">{errors.mobileNumber}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Set Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className={`password-toggle ${showPassword ? "show" : ""}`}
                  onClick={handleShowPassword}
                >
                  👁️
                </span>
              </div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className={`password-toggle ${showPassword ? "show" : ""}`}
                  onClick={handleShowPassword}
                >
                  👁️
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="dateOfGraduation">Date of Graduation</label>
              <input
                type="date"
                id="dateOfGraduation"
                name="dateOfGraduation"
                value={formData.dateOfGraduation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="degree1">Degree 1</label>
              <input
                type="text"
                id="degree1"
                name="degree1"
                value={formData.degree1}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="degree2">Degree 2</label>
              <input
                type="text"
                id="degree2"
                name="degree2"
                value={formData.degree2}
                onChange={handleChange}
              />
            </div>

            <div className="add_another">
              <button>Add Another</button>
            </div>

            <div className="form-group">
              <label htmlFor="onlineConsultFee">
                Online Consult Fee (Rupees)
              </label>
              <input
                type="text"
                id="onlineConsultFee"
                name="onlineConsultFee"
                value={formData.onlineConsultFee}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inPersonConsultFee">
                In-Person Consult Fee (Rupees)
              </label>
              <input
                type="text"
                id="inPersonConsultFee"
                name="inPersonConsultFee"
                value={formData.inPersonConsultFee}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
