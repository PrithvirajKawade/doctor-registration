import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorList = ({ doctors }) => {
  return (
    <div>
      <h2>Registered Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <button onClick={() => console.log("clicked")}>Load More</button>
    </div>
  );
};

export default DoctorList;
