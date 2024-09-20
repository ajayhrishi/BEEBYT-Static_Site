import { navbar_styles } from "../styles/component_styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import { scroll_capture } from "../redux/slices";

const Navbar = () => {
  const dispatch = useDispatch();
  const [active_page, set_active_page] = useState("null");
  //---------------------- Scroll dection and capture functionalities for the navebar
  const scrolled_to = useSelector((state) => state.scroll.value);

  const scrollToPosition = (num) => {
    window.scrollTo({ top: num, behavior: "smooth" });
  };

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

  //----------------- Position observer functionality with IntersectionObserver

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render the navbar*********************************************** JSX Part
  return scrolled_to < 100 ? (
    <div name="navbar-parent" className={`${navbar_styles.navbar_parent}`}>
      <div
        name="navbar-buttons-container"
        className={`${navbar_styles.navbar_buttons_container}`}
      >
        <div
          name="navbar-button-services"
          className={`${navbar_styles.navbar_button}`}
        >
          Home
        </div>

        <div
          name="navbar-button-services"
          className={`${navbar_styles.navbar_button}`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("service_page_main_div").offsetTop
            )
          }
        >
          SERVICES
        </div>
        <div
          name="navbar-button-about-us"
          className={`${navbar_styles.navbar_button}`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("our_team_page_main_div").offsetTop
            )
          }
        >
          ABOUT US
        </div>
        <div
          name="navbar-button-contact-us"
          className={`${navbar_styles.navbar_button}`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("contact_us_page_main").offsetTop
            )
          }
        >
          CONTACT US
        </div>
        <div
          name="consultancy-button-background"
          className={`${navbar_styles.get_free_consultancy_button_background}`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("free_consultancy_main_div").offsetTop
            )
          }
        >
          <div
            name="consultancy-button-text"
            className={`${navbar_styles.get_free_consultancy_button}`}
          >
            Get free Consultancy
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      name="navbar-parent-variant"
      className={`${navbar_styles.navbar_parent_varient}
      ${activeSection === "Home" ? `font-bold` : ``}
      `}
    >
      <div
        name="navbar-buttons-container-variant"
        className={`${navbar_styles.navbar_buttons_container_varient}`}
      >
        <div
          name="navbar-button-home-variant"
          className={`${navbar_styles.navbar_button_varient}`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("home_page_main").offsetTop
            )
          }
        >
          Home
        </div>
        <div
          name="navbar-button-services-variant"
          className={`${navbar_styles.navbar_button_varient} ${
            activeSection === "Services" ? `font-bold` : ``
          }`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("service_page_main_div").offsetTop
            )
          }
        >
          Services
        </div>
        <div
          name="navbar-button-about-us-variant"
          className={`${navbar_styles.navbar_button_varient} ${
            activeSection === "Our Team" ? `font-bold` : ``
          }`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("our_team_page_main_div").offsetTop
            )
          }
        >
          About us
        </div>
        <div
          name="navbar-button-contact-us-variant"
          className={`${navbar_styles.navbar_button_varient} ${
            activeSection === "Contact Us" ? `font-bold` : ``
          }`}
          onClick={() =>
            scrollToPosition(
              document.getElementById("contact_us_page_main").offsetTop
            )
          }
        >
          Contact us
        </div>

        <div
          name="consultancy-button-background-variant"
          className={`${navbar_styles.get_free_consultancy_button_background_varient}`}
        >
          <div
            name="consultancy-button-text-variant"
            className={`${navbar_styles.get_free_consultancy_button_varient}
            ${activeSection === "Get Free Consultancy" ? `font-bold` : ``}
            `}
            onClick={() =>
              scrollToPosition(
                document.getElementById("free_consultancy_main_div").offsetTop
              )
            }
          >
            Get free Consultancy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
