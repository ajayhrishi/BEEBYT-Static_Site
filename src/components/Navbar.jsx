import { navbar_styles } from "../styles/component_styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { scroll_capture } from "../redux/slices";

const NaveBar = ({ element }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      dispatch(scroll_capture(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolled_to = useSelector((state) => {
    return state.scroll.value;
  });

  const scrollToPosition = (num) => {
    // getting scroll position from redux store
    window.scrollTo({ top: num, behavior: "smooth" });
  };

  //---------------------------------- NaveBar JSX
  return scrolled_to < 100 ? (
    <div name="navbar-parent" className={`${navbar_styles.navbar_parent}`}>
      <div
        name="navbar-buttons-container"
        className={`${navbar_styles.navbar_buttons_container}`}
      >
        <div
          name="navbar-button-home"
          className={`${navbar_styles.navbar_button}`}
          onClick={() => scrollToPosition(element.home_page_main)}
        >
          HOME
        </div>
        <div
          name="navbar-button-services"
          className={`${navbar_styles.navbar_button}`}
          onClick={() => scrollToPosition(element.service_page_main_div)}
        >
          SERVICES
        </div>
        <div
          name="navbar-button-about-us"
          className={`${navbar_styles.navbar_button}`}
          onClick={() => scrollToPosition(element.our_team_page_main_div)}
        >
          ABOUT US
        </div>
        <div
          name="navbar-button-contact-us"
          className={`${navbar_styles.navbar_button}`}
          onClick={() => scrollToPosition(element.contact_us_page_main)}
        >
          CONTACT US
        </div>
        <div
          name="consultancy-button-background"
          className={`${navbar_styles.get_free_consultancy_button_background}`}
          onClick={() => scrollToPosition(element.free_consultancy_main_div)}
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
      className={`${navbar_styles.navbar_parent_varient}`}
    >
      <div
        name="navbar-buttons-container-variant"
        className={`${navbar_styles.navbar_buttons_container_varient}`}
      >
        <div
          name="navbar-button-home-variant"
          className={`${navbar_styles.navbar_button_varient}`}
          onClick={() => scrollToPosition(element.home_page_main)}
        >
          Home
        </div>
        <div
          name="navbar-button-services-variant"
          className={`${navbar_styles.navbar_button_varient}`}
          onClick={() => scrollToPosition(element.service_page_main_div)}
        >
          Services
        </div>
        <div
          name="navbar-button-about-us-variant"
          className={`${navbar_styles.navbar_button_varient}`}
          onClick={() => scrollToPosition(element.our_team_page_main_div)}
        >
          About us
        </div>
        <div
          name="navbar-button-contact-us-variant"
          className={`${navbar_styles.navbar_button_varient}`}
          onClick={() => scrollToPosition(element.contact_us_page_main)}
        >
          Contact us
        </div>

        <div
          name="consultancy-button-background-variant"
          className={`${navbar_styles.get_free_consultancy_button_background_varient}`}
        >
          <div
            name="consultancy-button-text-variant"
            className={`${navbar_styles.get_free_consultancy_button_varient}`}
            onClick={() => scrollToPosition(element.free_consultancy_main_div)}
          >
            Get free Consultancy
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
