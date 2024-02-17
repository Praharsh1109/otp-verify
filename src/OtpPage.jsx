import React from 'react';
import { useNavigate } from 'react-router-dom';

function OtpPage() {
  const navigate = useNavigate(); // Getting the navigate function

  const handleSendOTP = () => {
   
    navigate('/Receiving'); 
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          height: 150,
          width: 250,
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          color: "white",
        }}
      >
        <p style={{ textAlign: "center" }}>Enter OTP</p>
        <input
          type="text"
          placeholder="Enter mobile number"
          style={{
            height: 30,
            width: "100%",
            borderRadius: "5px",
            border: "none",
            paddingLeft: "5px",
          }}
        />
        <button
          onClick={handleSendOTP} // Call handleSendOTP function when button is clicked
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}

export default OtpPage;
