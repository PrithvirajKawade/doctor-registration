import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [visibleDoctors, setVisibleDoctors] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/doctors");

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const loadMoreDoctors = () => {
    setVisibleDoctors((prevVisibleDoctors) => prevVisibleDoctors + 10);
  };

  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {doctors.slice(0, visibleDoctors).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreDoctors}>Load More</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default DoctorsPage;
