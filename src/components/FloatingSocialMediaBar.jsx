import facebook_img from "../assets/icons/FaceBookWhite.png";
import linkedIn_img from "../assets/icons/LinkedInWhite.png";
import X_img from "../assets/icons/TwitterWhite.png";
import instagram_img from "../assets/icons/InstaWhite.png";
import whatsApp_img from "../assets/icons/WhatsAppWhite.png";
import { useSelector } from "react-redux";

import {
  instaLink,
  facebookLink,
  TwitterLink,
  LinkedInLink,
  whatsAppLink,
} from "../data.jsx";

import { floating_elements } from "../styles/component_styles.jsx";

const FloatingSocialMediaBar = () => {
  const scrolled_to = useSelector((state) => {
    return state.scroll.value;
  });
  console.log(scrolled_to);

  if (scrolled_to > 700) {
    return (
      <div className={`${floating_elements.floatingSocialMediaBar}`}>
        <a href={`${facebookLink}`} target="_blank">
          <img
            src={facebook_img}
            alt="facebook_img"
            className={`${floating_elements.floatingSocialMediaBarIcons}`}
          />
        </a>
        <a href={`${LinkedInLink}`} target="_blank">
          <img
            src={linkedIn_img}
            alt="LinkedIn_img"
            className={`${floating_elements.floatingSocialMediaBarIcons}`}
          />
        </a>
        <a href={`${TwitterLink}`} target="_blank">
          <img
            src={X_img}
            alt="x_img"
            className={`${floating_elements.floatingSocialMediaBarIcons}`}
          />
        </a>
        <a href={`${instaLink}`} target="_blank">
          <img
            src={instagram_img}
            alt="instagram_img"
            className={`${floating_elements.floatingSocialMediaBarIcons}`}
          />
        </a>
        <a href={`${whatsAppLink}`} target="_blank">
          <img
            src={whatsApp_img}
            alt="whatsApp_img"
            className={`${floating_elements.floatingSocialMediaBarIcons}`}
          />
        </a>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default FloatingSocialMediaBar;
