import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import "./App.css"

const App = () => {
  const [orders, setOrders] = useState([]);

  return (
    <>
    <header>
      <div>
      <h1>Lambda Eats</h1>
      </div>
      <div>
      <Link data-test-id="home" to="/">Home</Link>
      <Link data-test-id="order-pizza" to="/pizza" id="order-pizza">Order</Link>
      </div>
      </header>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
          <p>Please Order some pizza!</p>
        </Route>
        <Route exact path="/pizza">
          <h2>order</h2>
          <OrderForm  orders={orders} setOrders={setOrders}/>
        </Route>
        <Route exact path="/mypizza">
          <h2>My Pizza!</h2>
          {
            orders.map((order, index) => (
              <section key={`mypizza${index}`}>
                <p>Name: {order.name}</p>
                <p>Pizza size: {order.size}</p>
                {/* <p>Toppings: {order.pepperoni && (<p>Pepperoni</p>)} {order.sausage && (<p>Sausage</p>)} {order.ham && (<p>ham</p>)} {order.jalapenos && (<p>Jalapenos</p>)}</p> */}
                <p>Special Instrucstions: {order.special}</p>
              </section>
            ))
          }
        </Route>
      </Switch>
    </>
  );
};
export default App;
