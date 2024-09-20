import facebook from "../assets/icons/FaceBookWhite.png";
import linkedIn from "../assets/icons/LinkedInWhite.png";
import twitter from "../assets/icons/TwitterWhite.png";
import instagram from "../assets/icons/InstaWhite.png";
import navbarLogo from "../assets/logo.png";

import {
  instaLink,
  facebookLink,
  TwitterLink,
  LinkedInLink,
} from "../data.jsx";

import {
  home_page_styles,
  bottom_navbar_styles,
} from "../styles/home_page_styles.jsx";

const HomePage = () => {
  console.log("--------- Start");
  console.log("home_page rendered");
  return (
    <div id="home_page_main" className={`${home_page_styles.main_div}`}>
      <div
        name="homepage-top-banner"
        className={`${home_page_styles.homepage_top_banner}`}
      >
        <div
          name="logo-container"
          className={`${home_page_styles.logo_container}`}
        >
          <img
            name="logo"
            src={navbarLogo}
            alt="Logo"
            className={`${home_page_styles.logo}`}
          />
        </div>
        <div
          name="home-page-center"
          className={`${home_page_styles.home_page_center}`}
        >
          <h1
            name="home-page-center-title"
            className={`${home_page_styles.home_page_center_title}`}
          >
            BEEBYT
          </h1>
          <h3
            name="home-page-center-subtitle"
            className={`${home_page_styles.home_page_center_subtitle}`}
          >
            Growth with Strategy
          </h3>
        </div>
      </div>
      {/* bottom navbar segment */}
      <div
        name="home_bottom_navbar_container"
        className={`${bottom_navbar_styles.home_bottom_navbar_container}`}
      >
        <div
          name="navbar-homepage-bottom"
          className={`${bottom_navbar_styles.navbar_homepage_bottom}`}
        >
          <div
            name="navbar-homepage-button-icons"
            className={`${bottom_navbar_styles.navbar_homepage_button_container}`}
          >
            <a href={facebookLink} target="blank">
              <img
                name="facebook-icon"
                src={facebook}
                className={`${bottom_navbar_styles.navbar_homepage_button_icon}`}
                alt="facebook"
              />
            </a>
            <a href={LinkedInLink} target="blank">
              <img
                name="linkedin-icon"
                src={linkedIn}
                className={`${bottom_navbar_styles.navbar_homepage_button_icon}`}
                alt="linkedIn"
              />
            </a>
            <a href={TwitterLink} target="blank">
              <img
                name="twitter-icon"
                src={twitter}
                className={`${bottom_navbar_styles.navbar_homepage_button_icon}`}
                alt="twitter"
              />
            </a>
            <a href={instaLink} target="blank">
              <img
                name="instagram-icon"
                src={instagram}
                className={`${bottom_navbar_styles.navbar_homepage_button_icon}`}
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
