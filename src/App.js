import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import "./App.css"

const App = () => {
  return (
    <>
    <header>
      <div>
      <h1>Lambda Eats</h1>
      </div>
      <div>
      <Link to="/">Home</Link>
      <Link to="/pizza" id="order-pizza">Order</Link>
      </div>
      </header>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
          <p>Please Order some pizza!</p>
        </Route>
        <Route exact path="/pizza">
          <h2>order</h2>
          <OrderForm />
        </Route>
        <Route exact path="/mypizza">
          <h2>My Pizza!</h2>
        </Route>
      </Switch>
    </>
  );
};
export default App;
