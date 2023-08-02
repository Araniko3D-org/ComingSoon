// import React from 'react';
import "../styles/Page3.css";
import { useState } from "react";
// import SendIcon from '@mui/icons-material/Send';

const url = "http://192.168.1.66:8000/notify";

const Page3 = () => {
  const [emailValue, setEmailValue] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChange = (e: any) => {
    const value = e.target.value;
    setEmailValue(value);
    if (value.match(validRegex) && buttonDisabled) {
      setbuttonDisabled(false);
    }
    if (!value.match(validRegex) && !buttonDisabled) {
      setbuttonDisabled(true);
    }
  };

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });
      if (!response.ok) {
        throw new Error("Network Responded with error");
      }
      const responseData = await response.json()
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page3-container">
      <img src="/src/assets/page3.svg" alt="Page 3 SVG" className="page3-svg" />
      <div className="content">
        <img src="/src/assets/logo.png" className="logo" />
        <div className="box">
          <div className="counts">
            <div className="value">12</div>Days
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">12</div>Hours
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">12</div>Minutes
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">12</div>Seconds
          </div>
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="Notify me"
            value={emailValue}
            onChange={handleChange}
          />
          <div className="iconCircle">
            <button
              className="notifyButton"
              disabled={buttonDisabled}
              onClick={handleClick}
            >
              <img className="iconSend" src="/src/assets/sendIcon.png"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
