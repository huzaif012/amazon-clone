import React from "react";
import "./Checkout.css";
import Subtotal from"./Subtotal"
import CheckoutProduct from"./CheckoutProduct"
import { useStateValue} from "./StateProvider"

function Checkout() {
  const [{basket, user}, dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
      <div className="checkout_right">
          <Subtotal />
      </div>
  <h3>Hello, {!user ? "Guest" : user.email}</h3>
        <div className="checkout_title">
          <h1>Your shopping Basket</h1>
          {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
        </div>
      </div>
      
    </div>
  );
}

export default Checkout;