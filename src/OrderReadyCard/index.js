import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeOrderReady, setOrderPick } from '../PizzaForm/pizzaFormReducer';

function OrderReadyCard({ele}) {
    
    const [seconds, setSeconds] = useState(0);
    // const {transitionClass}  = useSelector(state => state.orderData)
    const [setstateClass, setSetstateClass] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      if (seconds == 180) {
        setSetstateClass("transitionState");
      }
  
      return () => {};
    }, [seconds]);
    const orderPick = (ele) => {
      
      dispatch(removeOrderReady(ele?.orderId))
      dispatch(setOrderPick(ele))
    };
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes} min ${seconds} sec`;
    };
  
  
    return (
    <div className={`order-parent ${setstateClass}  p-2 my-1 `}>
    <h5>Order {ele?.orderId}</h5>
    {formatTime(seconds)}
    <div>
      {ele.type.label} - {ele?.size.label} - {ele?.base.label}
    </div>
    <Button
      onClick={() => {
        orderPick(ele);
      }}
      style={{ backgroundColor: "white", color: "black" }}
    >
      Next
    </Button>
  </div>
  )
}

export default OrderReadyCard