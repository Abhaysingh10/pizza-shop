import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./OrderCard.scss";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removePizza, setOrderInMaking, setTransitionClass } from "../PizzaForm/pizzaFormReducer";

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
    if (seconds == 180) {
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
