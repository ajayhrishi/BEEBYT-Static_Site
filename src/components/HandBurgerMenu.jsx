import { useState } from "react";
import handburgerClosed from "../assets/interactive_icons/closed.png";
import handburgerOpened from "../assets/interactive_icons/opened.png"; // Fixed the typo here
import { floating_elements } from "../styles/component_styles.jsx";

import callImage from "../assets/icons/Whats App call icon.png";
import { phone } from "../data.jsx";

const HandBurgerMenu = ({ element }) => {
  const [open, setOpened] = useState(false);

  const scrollToPosition = (num) => {
    window.scrollTo({ top: num, behavior: "smooth" });
  };
  return (
    <div
      name="handburger_main_div"
      className={floating_elements.handburger_main_div}
    >
      <img
        src={open ? handburgerClosed : handburgerOpened}
        onClick={() => setOpened(!open)}
        alt="Hamburger Menu"
        className={floating_elements.handburger_icon}
      />
      <div
        name="handburger_navbar"
        className={open ? floating_elements.handburger_navbar : `hidden`}
      >
        <div
          name="button"
          onClick={() => scrollToPosition(element.home_page_main)} // +50 is used to get the aligment in the right place for the phone screen
        >
          Home
        </div>
        <div
          name="button"
          onClick={() => scrollToPosition(element.service_page_main_div + 50)}
        >
          Services
        </div>
        <div
          name="button"
          onClick={() => scrollToPosition(element.our_team_page_main_div + 50)}
        >
          Our Team
        </div>
        <div
          name="button"
          onClick={() =>
            scrollToPosition(element.free_consultancy_main_div + 130)
          }
        >
          Get Free Consultancy
        </div>
        <div
          name="button"
          onClick={() => scrollToPosition(element.contact_us_page_main + 280)}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default HandBurgerMenu;
/** 
export const FloatingCallIcon = () => {
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

*/
