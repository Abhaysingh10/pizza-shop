import { configureStore } from '@reduxjs/toolkit'
import pizzaFormReducer from '../PizzaForm/pizzaFormReducer'

export const store = configureStore({
  reducer: {
    orderData:pizzaFormReducer
  },
})
