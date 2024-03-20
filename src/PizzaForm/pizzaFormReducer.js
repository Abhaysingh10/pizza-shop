import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
    order:[]
};

export const pizzaFormSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        setPizza:(state, action)=>{
            state.order.push(action.payload)
            toast('Order Placed')
      }
    }
})

export const {setPizza} = pizzaFormSlice.actions

export default pizzaFormSlice.reducer