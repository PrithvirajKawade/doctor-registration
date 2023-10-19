import React from "react";
import "./DoctorCard.css";
const DoctorCard = ({ doctor }) => {
  console.log(doctor);
  return (
    <div className="doctorCardContainer">
      <div className="doctor-card">
        <div className="firstContainer">
          <img src="./Profile.png" alt="" className="profilepic" />
          <div className="exp">Experience</div>
          <div className="exp_value">18.2 years</div>
        </div>
        <div className="secContainer">
          <div className="name">{doctor.fullName}</div>
          <div className="degree">{(doctor.degree1, doctor.degree2)}</div>
          <div className="slot">Next slot: 11:00 AM</div>
          <div>Fees</div>
          <div className="feesOnline">
            ₹{doctor.onlineConsultFee} Online Consult
          </div>
          <div className="inPerson">
            ₹{doctor.inPersonConsultFee} In-Person Consult
          </div>
        </div>
      </div>
      <div className="bookAppointment">Book Appointment</div>
    </div>
  );
};

export default DoctorCard;
