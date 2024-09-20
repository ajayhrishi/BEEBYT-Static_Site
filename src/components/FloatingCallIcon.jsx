import React from "react";
import callImage from "../assets/icons/Whats App call icon.png";
import { floating_elements } from "../styles/component_styles.jsx";

import { phone } from "../data.jsx";

const FloatingCallIcon = () => {
  return (
    <a href={`tel:${phone}`} className={`${floating_elements.callIcon}`}>
      <img
        className={`${floating_elements.call_icon}`}
        src={callImage}
        alt="Call Icon"
      />
    </a>
  );
};

export default FloatingCallIcon;
