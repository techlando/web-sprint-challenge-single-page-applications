import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderForm from "./Components/OrderForm";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code </p>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
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
