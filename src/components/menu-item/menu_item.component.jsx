import React from "react";

import "../../styles/components/menu-item/menu-item.styles.scss";

// informations in the sections
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className= {`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title"> {title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
