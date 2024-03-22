import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./OrderCard.scss";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removePizza, setOrderInMaking, setTime, setTransitionClass } from "../PizzaForm/pizzaFormReducer";

const OrderCard = ({ ele }) => {
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
const getSizeValueInSeconds = (sizeValue) => {
  switch (sizeValue) {
    case 'small':
      return 180;
    case 'medium':
      return 240;
    case 'large':
      return 300;
    default:
      return 0;
  }
};

const sizeValueInSeconds = getSizeValueInSeconds(ele?.size.value);

if (sizeValueInSeconds !== 0 && seconds === sizeValueInSeconds) {
  setSetstateClass("transitionState");
}

    return () => {};
  }, [seconds]);

  const orderInMaking = (ele) => {
    dispatch(removePizza(ele?.orderId))
    dispatch(setOrderInMaking(ele))
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    // dispatch(setTime(`${minutes} min ${seconds} sec`))
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <div className={`order-parent ${setstateClass}  p-2 my-1 `}>
      <h5>Order {ele?.orderId}</h5>
      {/* <CountdownTimer /> */}
      {formatTime(seconds)}
      <div>
        {ele.type.label} - {ele?.size.label} - {ele?.base.label}
      </div>
      <Button
        onClick={()=>{
            orderInMaking(ele)
        }}
        style={{ backgroundColor: "white", color: "black" }}
      >
        Next
      </Button>
    </div>
  );
};

export default OrderCard;
