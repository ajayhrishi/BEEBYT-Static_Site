import { useState, useEffect } from "react";
import handburgerClosed from "../assets/interactive_icons/closed.png";
import handburgerOpened from "../assets/interactive_icons/opened.png";
import { floating_elements } from "../styles/component_styles.jsx";
import { useSelector } from "react-redux";

const HandBurgerMenu = () => {
  const [open, setOpened] = useState(false);
  const scrolled_till = useSelector((state) => state.scroll.value);
  const [activeSection, setActiveSection] = useState("");

  const scrollToPosition = (num) => {
    window.scrollTo({ top: num, behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      { id: "home_page_main", name: "Home" },
      { id: "service_page_main_div", name: "Services" },
      { id: "our_team_page_main_div", name: "Our Team" },
      { id: "free_consultancy_main_div", name: "Get Free Consultancy" },
      { id: "contact_us_page_main", name: "Contact Us" },
    ];

    // Determine the current active section based on scroll position
    const active = sections.find(
      (section) =>
        scrolled_till >= document.getElementById(section.id).offsetTop &&
        scrolled_till <
          document.getElementById(section.id).offsetTop +
            document.getElementById(section.id).offsetHeight
    );
    if (active) {
      setActiveSection(active.name);
    }
  }, [scrolled_till]);

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
        {/* Home Button */}
        <div
          name="button"
          className={
            activeSection === "Home"
              ? floating_elements.active_button
              : floating_elements.button
          }
          onClick={() =>
            scrollToPosition(
              document.getElementById("home_page_main").offsetTop
            )
          }
        >
          Home
        </div>

        {/* Services Button */}
        <div
          name="button"
          className={
            activeSection === "Services"
              ? floating_elements.active_button
              : floating_elements.button
          }
          onClick={() =>
            scrollToPosition(
              document.getElementById("service_page_main_div").offsetTop
            )
          }
        >
          Services
        </div>

        {/* Our Team Button */}
        <div
          name="button"
          className={
            activeSection === "Our Team"
              ? floating_elements.active_button
              : floating_elements.button
          }
          onClick={() =>
            scrollToPosition(
              document.getElementById("our_team_page_main_div").offsetTop
            )
          }
        >
          Our Team
        </div>

        {/* Get Free Consultancy Button */}
        <div
          name="button"
          className={
            activeSection === "Get Free Consultancy"
              ? floating_elements.active_button
              : floating_elements.button
          }
          onClick={() =>
            scrollToPosition(
              document.getElementById("free_consultancy_main_div").offsetTop
            )
          }
        >
          Get Free Consultancy
        </div>

        {/* Contact Us Button */}
        <div
          name="button"
          className={activeSection === "Contact Us" ? `font-bold` : ``}
          onClick={() =>
            scrollToPosition(
              document.getElementById("contact_us_page_main").offsetTop
            )
          }
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default HandBurgerMenu;
