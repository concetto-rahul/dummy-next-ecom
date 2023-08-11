"use client";

import { useEffect, useState } from "react";
import "./deal-timer.scss";

type props = {
  endDate: string;
};
export function DealTimer({ endDate }: props) {
  const [timerData, setTimerData] = useState({
    hours: 0,
    mins: -1,
    secs: 0,
    days: 0,
  });

  useEffect(() => {
    const startDate = new Date().getTime();
    const endDateNew = new Date(endDate).getTime();
    if (endDateNew - startDate > 0) {
      let intervalData = setInterval(() => {
        const startDate = new Date().getTime();
        const endDateNew = new Date(endDate).getTime();
        const pendingTime = endDateNew - startDate;
        const days = Math.floor(pendingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (pendingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((pendingTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((pendingTime % (1000 * 60)) / 1000);
        setTimerData({ secs, mins, hours, days });
      }, 1000);
      return () => {
        clearInterval(intervalData);
      };
    }
  }, [endDate]);

  return (
    <div className="deal-timer-counter">
      {timerData.mins >= 0 && (
        <>
          <p>Ends in</p>
          <div className="">
            <div className="timer-data">
              <span>{timerData.hours}</span>
              <span>Hours</span>
            </div>
            <div className="timer-data">
              <span>{timerData.mins}</span>
              <span>Mins</span>
            </div>
            <div className="timer-data">
              <span>{timerData.secs}</span>
              <span>Secs</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
