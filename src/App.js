import React, { useState } from "react";

import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import Input from "./Components/Input";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div>
      <Input onAddItem={handleAddItem} />
      <Dashboard items={items} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
