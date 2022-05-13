import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cart.context";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(cartContext);
  let navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
