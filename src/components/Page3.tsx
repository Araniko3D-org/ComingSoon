import "../styles/Page3.css";
import { useState, useEffect } from "react";
import moment from "moment";

const url = "https://araniko3d-backendweb.onrender.com/notify";

const Page3 = () => {
  const [emailValue, setEmailValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [timerObject, setTimerObject] = useState({});
  const [infoText, setInfoText] = useState("");
  const [loading, setLoading] = useState(false);

  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    const a = setInterval(updateClock, 1000);
    return () => {
      clearInterval(a);
    };
  }, []);

  const countdownDate = moment("2023-11-18");
  function updateClock() {
    const currentDate = moment();
    //@ts-ignore
    const duration = moment.duration(countdownDate - currentDate);
    const diffDays = countdownDate.diff(currentDate, "day");
    const t = {
      days: diffDays,
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
    setTimerObject(t);
  }

  const handleChange = (e: any) => {
    const value = e.target.value;
    setEmailValue(value);
    if (value.match(validRegex) && buttonDisabled) {
      setButtonDisabled(false);
    }
    if (!value.match(validRegex) && !buttonDisabled) {
      setButtonDisabled(true);
    }
  };

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      setButtonDisabled(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });
      if (response) {
        if (!response.ok) {
          setInfoText("Something went Wrong.Please try again!");
          console.log(response);
        } else {
          setInfoText("Successfully Subscribed! You will soon be notified.");
        }
        setModalVisible(true);
        setLoading(false);
        setEmailValue("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page3-container">
      <img src="/page3.svg" alt="Page 3 SVG" className="page3-svg" />
      <div className="content">
        <img src="/logo.png" className="logo" />
        <div className="box">
          <div className="counts">
            <div className="value">
              {
                //@ts-ignore
                timerObject.days
              }
            </div>
            Days
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">
              {
                //@ts-ignore
                timerObject.hours
              }
            </div>
            Hours
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">
              {
                //@ts-ignore
                timerObject.minutes
              }
            </div>
            Minutes
          </div>
          <div className="coln">:</div>
          <div className="counts">
            <div className="value">
              {
                //@ts-ignore
                timerObject.seconds
              }
            </div>
            Seconds
          </div>
        </div>
        <div className="email">
          <div className="notify">Notify me</div>
          <input
            type="text"
            placeholder="Enter email"
            value={emailValue}
            onChange={handleChange}
            className="inputs"
          />
          <div className="iconCircle">
            {loading ? (
              <div className="spinner-container">
                <div className="loading-spinner"></div>
              </div>
            ) : (
              <button
                className="notifyButton"
                disabled={buttonDisabled}
                onClick={handleClick}
              >
                <img
                  className="iconSend"
                  src="/sendIcon.png"
                  style={{
                    opacity: buttonDisabled ? 0.3 : 1,
                    cursor: buttonDisabled ? "not-allowed" : "pointer",
                  }}
                ></img>
              </button>
            )}
          </div>
        </div>
      </div>
      {modalVisible && (
        <div className="modalContainer">
          <div
            className="modalBackdrop"
            onClick={() => {
              setModalVisible(false);
            }}
          ></div>
          <div className="modalContent">
            {infoText}
            <br></br>
            <button
              onClick={() => {
                setModalVisible(false);
              }}
              className="closeButton"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page3;
