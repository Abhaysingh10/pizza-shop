import { Provider } from "react-redux";
import "./App.scss";
import PizzaForm from "./PizzaForm";
import { store } from "./Store";
import Navbar from "./Navbar.js";
import OrderCard from "./OrderCard.js/index.js";

function App() {
  return (
    <Provider store={store}>
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
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  {/* Add more OrderCard components as needed */}
                </div>
              </div>
              <div className="col-3 section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order in making</span>
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>
              </div>
              <div className="col-3  section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order Ready</span>
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>
              </div>
              <div className="col-3  section order-places">
                <div className="d-flex flex-column">
                  <span className="my-4">Order Picked</span>
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>
              </div>
            </div>
            {/* <OrderCard/> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
