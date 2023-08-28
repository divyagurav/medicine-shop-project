import React, { useState } from "react";
import "./Input.css";

const Input = ({ onAddItem }) => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = () => {
    const newItem = {
      medicineName,
      description,
      price,
      quantity,
    };

    onAddItem(newItem);

    setMedicineName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  const nameChangeHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="input-container">
      <h1>Medicine Shop Dashboard</h1>
      <input
        type="text"
        value={medicineName}
        onChange={nameChangeHandler}
        placeholder="MedicineName"
      />
      <input
        type="text"
        value={description}
        onChange={descriptionChangeHandler}
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={priceChangeHandler}
        placeholder="Price"
      />
      <input
        type="number"
        value={quantity}
        onChange={quantityChangeHandler}
        placeholder="Quantity"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Input;
