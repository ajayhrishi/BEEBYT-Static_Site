import { contact_us_page_styles } from "../styles/contact_us_page_styles";
import line from "../assets/component_images/Line contactuspage.png";

import {
  QuickEmailBox,
  purple_contact_box,
} from "../components/contact_us_page_components";
import twitter from "../assets/icons/TwitterWhite.png";
import insta from "../assets/icons/InstaWhite.png";
import linkedIn from "../assets/icons/LinkedInWhite.png";
import location from "../assets/icons/location_icon.png";
// quick email box and purple contact boxes are set as componets to not exceed the number line this page
const ContactUsPage = () => {
  console.log("contact_us page rendered");
  console.log("end");
  return (
    <div
      className={`${contact_us_page_styles.contact_us_page_main_div}`}
      id="contact_us_page_main"
    >
      {title}
      {top_div_content}
      {bottom_div_content}
    </div>
  );
};

const title = (
  <div name="title_wraper" className={`${contact_us_page_styles.title_wraper}`}>
    <p name="big_title" className={`${contact_us_page_styles.big_title}`}>
      CONTACT US
    </p>
  </div>
);
//---------------- Top div contents

//-----------------------------------
const top_div_content = //main
  (
    <div className={`${contact_us_page_styles.top_div_content}`}>
      <div name="left_segment" className={`${contact_us_page_styles.segment}`}>
        {purple_contact_box}
      </div>
      <img src={line} className={`${contact_us_page_styles.line_seperator}`} />
      <div name="right_segment" className={`${contact_us_page_styles.segment}`}>
        <div
          name="quick_mail_container"
          className={`${contact_us_page_styles.quick_mail_container}`}
        >
          <div
            name="title"
            className={`${contact_us_page_styles.title_right_segment}`}
          >
            Drop a Quicky here, We will get back to you instantly
          </div>
          <QuickEmailBox />
        </div>
      </div>
    </div>
  );

//---------------- bottom div contents

const bottom_div_content = (
  <div className={`${contact_us_page_styles.bottom_div_content}`}>
    <div name="top_div" className={`${contact_us_page_styles.top_div}`}>
      <div name="left_wing" className={`${contact_us_page_styles.left_wing}`}>
        <div
          name="left_wind_title"
          className={`${contact_us_page_styles.left_wing_title}`}
        >
          DIVE INTO THE NEW WORLD OF IN-HOUSE MUSIC
        </div>
        <div
          name="left_wind_content"
          className={`${contact_us_page_styles.left_wing_content}`}
        >
          Lorem ipsum dolor sit amet consectetur. At porttitor ut felis nisl
          ultrices sed sit. Cras nibh quis et diam justo in. Sollicitudin enim
          tincidunt eros mauris senectus neque.
        </div>
      </div>
      <div name="right_wing" className={`${contact_us_page_styles.right_wing}`}>
        <div
          name="right_wing_title"
          className={`${contact_us_page_styles.right_wing_title}`}
        >
          VISIT
        </div>
        <div
          name="right_wing_content"
          className={`${contact_us_page_styles.right_wing_content}`}
        >
          <div name="colOne" className={`${contact_us_page_styles.colOne}`}>
            <div
              name="typography1"
              className={`${contact_us_page_styles.col_one_typos}`}
            >
              Home
            </div>
            <div
              name="typography2"
              className={`${contact_us_page_styles.col_one_typos}`}
            >
              Our Work
            </div>
            <div
              name="typography3"
              className={`${contact_us_page_styles.col_one_typos}`}
            >
              Who we are
            </div>
            <div
              name="typography4"
              className={`${contact_us_page_styles.col_one_typos}`}
            >
              Get in touch
            </div>
          </div>
          <div name="colTwo" className={`${contact_us_page_styles.colTwo}`}>
            <div
              name="col_two_content"
              className={`${contact_us_page_styles.col_two_content}`}
            >
              <div
                name="typography1"
                className={`${contact_us_page_styles.col_one_typos}`}
              >
                NewsLetter
              </div>
              <div
                name="typography2"
                className={`${contact_us_page_styles.col_one_typos}`}
              >
                Podcast
              </div>
              <div
                name="typography3"
                className={`${contact_us_page_styles.col_one_typos}`}
              >
                Press
              </div>
            </div>
            <div
              name="logo_holder"
              className={`${contact_us_page_styles.logo_holder}`}
            >
              <img src={twitter} />
              <img src={insta} />
              <img src={linkedIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name="middle_div" className={`${contact_us_page_styles.middle_div}`}>
      <div
        name="md_left_wing"
        className={`${contact_us_page_styles.md_left_wing}`}
      >
        <img
          src={location}
          alt="location_icon"
          className={`${contact_us_page_styles.location_icon}`}
        />
        <div
          name="location_typo"
          className={`${contact_us_page_styles.location_typo}`}
        >
          Calicut,Kerala | India
        </div>
      </div>
      <div
        name="md_right_wing"
        className={`${contact_us_page_styles.md_right_wing}`}
      >
        <p
          name="md_right_wing1"
          className={`${contact_us_page_styles.md_right_wing_typos}`}
        >
          DATA POLICY
        </p>
        <p
          name="md_right_wing2"
          className={`${contact_us_page_styles.md_right_wing_typos}`}
        >
          IMPRINTS
        </p>
      </div>
    </div>
    <div name="bottom_div" className={`${contact_us_page_styles.bottom_div}`}>
      BEEBYTE.CO
    </div>
  </div>
);

export default ContactUsPage;
