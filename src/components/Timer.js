import Countdown from "react-countdown";
import "./timer.css";

export default function Timer() {
  return (
    <Countdown
      date={Date.parse("2023-03-27T10:00:00+01:00")}
      renderer={(data) => (
        <div className="timer">
          <div className="timerUnit">
            <h4>Days</h4>
            <u>{data.days}</u>
          </div>
          :
          <div className="timerUnit">
            <h4>Hours</h4>
            <u>{data.hours}</u>
          </div>
          :
          <div className="timerUnit">
            <h4>Minutes</h4>
            <u>{data.minutes}</u>
          </div>
          :
          <div className="timerUnit">
            <h4>Seconds</h4>
            <u>{data.seconds}</u>
          </div>
        </div>
      )}
    />
  );
}
