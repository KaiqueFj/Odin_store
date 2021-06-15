import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "../../styles/components/cart-dropdown/cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
