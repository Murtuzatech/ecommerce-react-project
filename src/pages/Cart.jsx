
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>

        <div className="cart-empty-box">
          <p>Your cart is currently empty.</p>

          <Link to="/home" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      <div className="cart-content">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-img"
              />

              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p className="cart-item-price">${item.price}</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <p className="total-amount">
            Total: ${totalPrice.toFixed(2)}
          </p>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

