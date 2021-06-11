import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../image/logo/logo.svg";
import { auth } from "../../firebase/fireabase.utils";

import "../../styles//components/header/header.styles.scss";

const Header = ({ currentUser }) => (
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
        <div className="option" onClick={() => auth.signOut()}> SING OUT</div>
      ) : (
        <Link className="option" to="/singIn">
          
          SING IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
