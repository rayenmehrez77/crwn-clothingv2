import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cart.context";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = ({ history }) => {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <Button onClick={() => history.push("/checkout")}>
          GO TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
