import React from "react";
import { Provider } from "react-redux";
import { ProductStore } from "./Features/ProductStore";
import Card from "./Components/Card";
import "./App.css";
const App = () => {
  return (
    <div>
      <Provider store={ProductStore}>
        <Card />
      </Provider>
    </div>
  );
};

export default App;
