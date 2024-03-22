import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard.js'
import PizzaForm from './PizzaForm/index.js'
import { useDispatch, useSelector } from 'react-redux'
import OrderInMakingCard from './OrderInMakingCard/index.js'
import OrderReadyCard from './OrderReadyCard/index.js'
import OrderPickCard from './OrderPickCard/index.js'
import { Button } from 'antd'
import Timer from './Timer.js'
import { removeMakingPizza, removeOrderReady, removePizza, removePizzaFromTotalOrder } from './PizzaForm/pizzaFormReducer.js'

function Home() {
    const { totalOrders, order, orderInMaking, orderReady, orderPick } = useSelector(state => state.orderData)
    const [timerValue, setTimerValue] = useState(0);
  const [seconds, setSeconds] = useState(0);

    const dispatch = useDispatch()
        useEffect(() => {
            const interval = setInterval(() => {
                setTimerValue(prevValue => prevValue + 1);
    //   setSeconds((prevSeconds) => prevSeconds + 1);

            }, 1000);
            return () => clearInterval(interval);
        }, []);

        const formatTime = (timeInSeconds) => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            // dispatch(setTime(`${minutes} min ${seconds} sec`))
            return `${minutes} min ${seconds} sec`;
          };

        const cancelOrder = (orderId, stage) => { 
            if (stage == 'Order Placed') {
                dispatch(removePizza(orderId))
            }else if (stage == 'Order In Making'){
                dispatch(removeMakingPizza(orderId))
            }
            else if(stage == 'Order Ready'){
                dispatch(removeOrderReady(orderId))
            }
            dispatch(removePizzaFromTotalOrder(orderId))

         }


    return (
        <div>
            <div className="main">
                <div className="row parent-row">
                    <div className="col-2 pizza-form ms-5 ">
                        <PizzaForm />
                    </div>
                    <div className="col-9 order-body ms-4">
                        <div className="row  section-parent">
                            <div className="col-3 order-places section ">
                                <div className="d-flex flex-column">
                                    <span className="my-4 ">Order Placed</span>
                                    {/* Add Order Cards here */}
                                    {order?.map(ele => {
                                        return <OrderCard ele={ele} />
                                    })}
                                    {/* Add more OrderCard components as needed */}
                                </div>
                            </div>
                            <div className="col-3 section order-places">
                                <div className="d-flex flex-column">
                                    <span className="my-4">Order in Making</span>
                                    {orderInMaking?.map((ele) => {
                                        return <OrderInMakingCard ele={ele} />
                                    })}
                                </div>
                            </div>
                            <div className="col-3  section order-places">
                                <div className="d-flex flex-column">
                                    <span className="my-4">Order Ready</span>
                                    {orderReady?.map((ele) => {
                                        return <OrderReadyCard ele={ele} />
                                    })}
                                </div>
                            </div>
                            <div className="col-3  section order-places">
                                <div className="d-flex flex-column">
                                    <span className="my-4">Order Picked</span>
                                    {orderPick?.map((ele) => {
                                        return <OrderPickCard ele={ele} />
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* <OrderCard/> */}
                    </div>
                </div>
            </div>
            <div className='main-section p-5'>
                <div className='section-table'>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">OrderId</th>
                                <th scope="col">Stage</th>
                                <th scope="col">Total time spent </th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {totalOrders?.map((ele)=>{
                                return <tr>
                                    <td>{ele?.orderId}</td>
                                    <td>{ele?.stage}</td>
                                    <td>{<Timer/>}</td>
                                    {/* <td>{formatTime(seconds)}</td> */}
                                    <td>{ele?.stage != 'Order Picked' ? <Button onClick={()=>{cancelOrder(ele?.orderId, ele?.stage)}}>Cancel</Button> : <></> }</td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Total Order delivered</th>
                                <th scope="col">{orderPick?.length}</th></tr>
                        </thead>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Home