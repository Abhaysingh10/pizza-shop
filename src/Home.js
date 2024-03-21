import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard.js'
import PizzaForm from './PizzaForm/index.js'
import { useSelector } from 'react-redux'
import OrderInMakingCard from './OrderInMakingCard/index.js'
import OrderReadyCard from './OrderReadyCard/index.js'
import OrderPickCard from './OrderPickCard/index.js'
import { Table } from 'antd'

function Home() {
    const {totalOrders, order, orderInMaking, orderReady, orderPick} = useSelector(state => state.orderData)
    const [dataSource, setDataSource] = useState([])
      
      const columns = [
        {
          title: 'Order ID',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'Stage',
          dataIndex: 'stage',
          key: 'stage',
        },
        {
          title: 'Total time spent',
          dataIndex: 'totalTimeSpent',
          key: 'totalTimeSpent',
        },
        {
            title: 'Action',
            dataIndex: 'cancel',
            key: 'cancel',
          },
      ];


    
      

      console.log("TotalOrders", totalOrders)
      
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
                    return <OrderCard ele={ele}/>
                  })}
                  {/* Add more OrderCard components as needed */}
                </div>
              </div>
              <div className="col-3 section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order in Making</span>
                  {orderInMaking?.map((ele)=>{
                    return <OrderInMakingCard ele={ele}/>
                  })}
                </div>
              </div>
              <div className="col-3  section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order Ready</span>
                    {orderReady?.map((ele)=>{
                        return <OrderReadyCard ele={ele}/>
                    })}
                </div>
              </div>
              <div className="col-3  section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order Picked</span>
                    {orderPick?.map((ele)=>{
                        return <OrderPickCard ele={ele}/>
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
            <Table dataSource={totalOrders} columns={columns}/>
            
        </div>
      </div>
    </div>
  )
}

export default Home