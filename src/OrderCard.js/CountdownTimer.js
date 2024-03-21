import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTransitionClass } from '../PizzaForm/pizzaFormReducer';

function  CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {

      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    if (seconds == 10 ) {
      dispatch(setTransitionClass('transitionState'))
    }
  
    return () => {
      
    }
  }, [seconds])
  

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };



  return (
    <div>
      <p>
        {formatTime(seconds)}
      </p>
    </div>
  );
}

export default CountdownTimer;
