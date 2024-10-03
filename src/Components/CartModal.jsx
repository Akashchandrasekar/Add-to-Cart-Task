// src/components/CartModal.jsx
import React from 'react';
import CartItem from './CartItem';

const CartModal = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={closeCart}>Close</button>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
