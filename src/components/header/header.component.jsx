import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/fireabase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../image/logo/logo.svg";

import "../../styles//components/header/header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SING OUT
        </div>
      ) : (
        <Link className="option" to="/singIn">
          SING IN
        </Link>
      )}
      <CartIcon />
      
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
