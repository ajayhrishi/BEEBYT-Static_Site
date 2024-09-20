import { useState, useEffect } from "react";
import handburgerClosed from "../assets/interactive_icons/closed.png";
import handburgerOpened from "../assets/interactive_icons/opened.png";
import { floating_elements } from "../styles/component_styles.jsx";
import { useSelector, useDispatch } from "react-redux";
import { scroll_capture } from "../redux/slices";
import { throttle } from "lodash";

const HandBurgerMenu = () => {
  const dispatch = useDispatch();
  const [open, setOpened] = useState(false);
  const scrolled_to = useSelector((state) => state.scroll.value);

  const scrollToPosition = (num) => {
    window.scrollTo({ top: num, behavior: "smooth" });
  };

  //--------------------- segment decide which section is active
  const [activeSection, setActiveSection] = useState("first_");
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
        scrolled_to >= document.getElementById(section.id).offsetTop &&
        scrolled_to <
          document.getElementById(section.id).offsetTop +
            document.getElementById(section.id).offsetHeight
    );
    if (active) {
      setActiveSection(active.name);
      console.log(activeSection, "now active");
    }
  }, [scrolled_to]);

  //---------------------- Scroll dection and capture functionalities for the navebar

  useEffect(() => {
    // Scroll handler to dispatch the scroll position
    const handleScroll = () => {
      dispatch(scroll_capture(window.scrollY));
    };

    // Throttled scroll event listener
    const throttledHandleScroll = throttle(handleScroll, 300);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [dispatch]);

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
          className={activeSection === "Home" ? `font-bold` : ``}
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
          className={activeSection === "Services" ? `font-bold` : ``}
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
          className={activeSection === "Our Team" ? `font-bold` : ``}
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
            activeSection === "Get Free Consultancy" ? `font-bold` : ``
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
