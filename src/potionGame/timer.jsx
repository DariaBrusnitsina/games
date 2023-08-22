import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp, onGameOver }) {
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => onGameOver() });

  return (
    <h3>Осталось <span id="time">{`${minutes}:${seconds}`}</span></h3>
  );
}

export default MyTimer