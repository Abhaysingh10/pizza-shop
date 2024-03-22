import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeOrderReady, setOrderPick } from "../PizzaForm/pizzaFormReducer";
import { Button } from "react-bootstrap";

function OrderPickCard({ ele }) {



  return (
    <div className={`order-parent  p-2 my-1 `}>
      <h5>Order {ele?.orderId}</h5>
      <div>
        {ele.type.label} - {ele?.size.label} - {ele?.base.label}
      </div>
      <div></div>
    </div>
  );
}

export default OrderPickCard;
