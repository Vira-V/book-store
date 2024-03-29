import React from 'react';
import { useCountdown } from './useCountdown';
import { DateTimeDisplay } from './DateTimeDisplay';
import "./CountdownTimer.scss";

export const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 10} />
        <p></p>
        <DateTimeDisplay value={hours} type={'Hour'} isDanger={false} />
        <p></p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p></p>
        <DateTimeDisplay value={seconds} type={'Sec'} isDanger={false} />
      </a>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
