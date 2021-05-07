import React, { useState, useEffect } from "react";
import moment from "moment";

var countDownTimer;

const TimeCounter = (props) => {

  const [duration, setDuration] = useState(moment.duration(0));

  useEffect(() => {
    if (props.status === 1 || props.status === 2) {
      var eventTime;
      if (typeof props.timeTillDate === "number") {
        eventTime = props.timeTillDate;
      }
      else {
        var eventTime = moment(
          props.timeTillDate,
          props.timeFormat
        ).unix();
      }
      var currentTime = moment().unix();
      var diffTime = eventTime - currentTime;
      var dur = moment.duration(diffTime * 1000, "milliseconds");
      if (dur > 0) {
        countDownTimer = setInterval(() => {
          dur = moment.duration(dur - 1000, "milliseconds");
          setDuration(dur);
        }, 1000);
      }
      return () => {clearInterval(countDownTimer)};
    }    
  }, []);

  const toTwoDigit = (val) => {
    if (String(val).length === 1)
      return "0" + val;
    return val;
  }

  return (
    <div className="bg-white d-flex justify-content-center counter_white">
      <div className="text-center">
        <h1 className="px-md-3 px-2 text_large font-weight-bold">
          {toTwoDigit(Math.floor(duration?.asDays()) ?? "0")}
        </h1>
        <h6>DAYS</h6>
      </div>
      <h1 className="px-md-3 px-2 text_large font-weight-bold">:</h1>
      <div className="text-center">
        <h1 className="px-md-3 px-2 text_large font-weight-bold">
          {toTwoDigit(duration?.hours() ?? "0")}
        </h1>
        <h6>HOURS</h6>
      </div>
      <h1 className="px-md-3 px-2 text_large font-weight-bold">:</h1>
      <div className="text-center">
        <h1 className="px-md-3 px-2 text_large font-weight-bold">
          {toTwoDigit(duration?.minutes() ?? "0")}
        </h1>
        <h6>MINUTES</h6>
      </div>
      <h1 className="px-md-3 px-2 text_large font-weight-bold">:</h1>
      <div className="text-center">
        <h1 className="px-md-3 px-2 text_large font-weight-bold">
          {toTwoDigit(duration?.seconds() ?? "0")}
        </h1>
        <h6>SECONDS</h6>
      </div>
    </div>
  );
}

export default TimeCounter;
