// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
