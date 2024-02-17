import React from "react";
import { useNavigate } from "react-router-dom";

function Receiving() {
  const navigate = useNavigate();

  function mainPageGoTo() {
    navigate("/");
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          height: 150,
          width: 250,
          backgroundColor: "lightBlue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          color: "white",
        }}
      >
        <button onClick={mainPageGoTo} style={{width:"20%"}}>Go Back</button>
        <p style={{ textAlign: "center" }}>Enter OTP</p>

        <div style={{width:"100%",height:30 ,display:"flex",justifyContent:"center"}}>
          <input
            type="text"
            maxLength="1"
            pattern="[0-9]"
            
            style={{
              height: 30,
              marginLeft:"5px",
              width: "100%",
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
            }}
          ></input>
          <input
            type="text"
            
            style={{
              height: 30,
              marginLeft:"5px",
              width: "100%",
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
            }}
          ></input>
          <input
            type="text"
            
            style={{
              height: 30,
              width: "100%",
              marginLeft:"5px",
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
            }}
          ></input>
          <input
            type="text"
            
            style={{
              height: 30,
              width: "100%",
              marginLeft:"5px",
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
            }}
          ></input>
        </div>

        <button
          // Call handleSendOTP function when button is clicked
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
         Login
        </button>
      </form>
    </div>
  );
}

export default Receiving;
