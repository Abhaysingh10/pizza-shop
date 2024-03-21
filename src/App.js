import { Provider, useSelector } from "react-redux";
import "./App.scss";
import { store } from "./Store"; 
import Home from "./Home.js";

function App() {

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
