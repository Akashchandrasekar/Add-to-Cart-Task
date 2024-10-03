// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <button onClick={openCart}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
