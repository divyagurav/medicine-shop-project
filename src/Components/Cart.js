import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.medicineName}>
          <p>MedicineName: {item.medicineName}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
