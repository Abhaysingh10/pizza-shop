import React from 'react'
import CountdownTimer from './CountdownTimer'
import './OrderCard.scss'
import { Button } from 'react-bootstrap'

const OrderCard = () => {
  return (
    <div className='order-parent p-2 my-1'>
        <CountdownTimer/>
        <Button>Next</Button>
  </div>
  )
}

export default OrderCard