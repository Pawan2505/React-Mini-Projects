import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = "December, 28, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="row">
          <div className="col-3">
            <h1>{days < 10 ? "0" + days : days}</h1>
            <span className="text">Days</span>
          </div>
          <div className="col-3">
            <h1>{hours < 10 ? "0" + hours : hours}</h1>
            <span className="text">hours</span>
          </div>
          <div className="col-3">
            <h1>{mins < 10 ? "0" + mins : mins}</h1>
            <span className="text">Mins</span>
          </div>
          <div className="col-3">
            <h1>{secs < 10 ? "0" + secs : secs}</h1>
            <span className="text">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
