// import React from 'react';
import "../styles/Page3.css";
// import SendIcon from '@mui/icons-material/Send';

const Page3 = () => {
  return (
    <div className="page3-container">
      <img src="/src/assets/page3.svg" alt="Page 3 SVG" className="page3-svg" />
      <div className="content"><img src="/src/assets/logo.png" className="logo" />
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
        Notify me
        <div className="iconCircle">
          <img className="iconSend" src="/src/assets/sendIcon.png"></img>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page3;
