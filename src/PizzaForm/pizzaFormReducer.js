import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  totalOrders:[],
  order: [],
  orderInMaking: [],
  orderReady: [],
  orderPick: [],
  transitionClass: "",
  orderIdCounter: 1,
};

export const pizzaFormSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPizza: (state, action) => {
      const orderId = state.orderIdCounter.toString().padStart(3, "0"); 
      const stage = 'Order Placed'
      const cancel = 'Cancel'
      
      state.order.push({ ...action.payload, orderId }); 
      state.totalOrders.push({...action.payload, orderId, stage, cancel });
      state.orderIdCounter++;
    },
    setTransitionClass: (state, action) => {
      console.log("first", action.payload);
      state.transitionClass = action.payload;
    },
    setOrderInMaking: (state, action) => {
      state.orderInMaking.push(action.payload);
      const index = state.totalOrders.findIndex(pizza => pizza.orderId === action.payload.orderId);
      if (index !== -1) {
        state.totalOrders[index].stage = "Order In Making";
      }
    },
    setOrderReady: (state, action) => {
      state.orderReady.push(action.payload);
      const index = state.totalOrders.findIndex(pizza => pizza.orderId === action.payload.orderId);
      if (index !== -1) {
        state.totalOrders[index].stage = "Order Ready";
      }
    },
    setOrderPick: (state, action) => {
      state.orderPick.push(action.payload);
      const index = state.totalOrders.findIndex(pizza => pizza.orderId === action.payload.orderId);
      if (index !== -1) {
        state.totalOrders[index].stage = "Order Picked";
      }
    },
    removePizza: (state, action) => {
      // Filter out the pizza object with orderId matching action.payload
      state.order = state.order.filter(
        (pizza) => pizza.orderId !== action.payload
      );
    },
    removeMakingPizza: (state, action) => {
      state.orderInMaking = state.orderInMaking.filter(
        (pizza) => pizza.orderId !== action.payload
      );
    },
    removeOrderReady: (state, action) => {
      state.orderReady = state.orderReady.filter(
        (pizza) => pizza.orderId !== action.payload
      );
    },
    removePizzaFromTotalOrder:(state, action)=>{
      state.totalOrders = state.totalOrders.filter(order => order.orderId !== action.payload);
    }
  },
});

export const {
  setPizza,
  setTransitionClass,
  setOrderInMaking,
  setOrderReady,
  setOrderPick,
  removePizza,
  removeMakingPizza,
  removeOrderReady,
  setTime,
  removePizzaFromTotalOrder
} = pizzaFormSlice.actions;

export default pizzaFormSlice.reducer;
