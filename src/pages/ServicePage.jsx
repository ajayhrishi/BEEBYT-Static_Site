/********** Importing Styles *************/
import {
  service_page_styles,
  card1style,
  card2style,
} from "../styles/service_page_styles";

import SocialMediaCard from "../components/SocialMediaCard.jsx";

const ServicePage = () => {
  console.log("servicePage1 rendered");
  const app_development_card_data = {
    top_title: "App Development",
    image_container_class: "app_development_card_image_container",
    image_class: "app_development_card_image.png",
    image_name: "image_App_developement.png",
    bottom_optional_title: "",
    number_of_likes: 35,
    number_of_comments: 38,
    number_of_shares: 31,
    card_type: card1style,
  };
  const digital_marketing_card_data = {
    top_title: "Digital Marketing",
    image_container_class: "digital_marketing_card_image_container",
    image_class: "digital_marketing_card_image",
    image_name: "image_Digital_marketing.png",
    bottom_optional_title: "",
    number_of_likes: 29,
    number_of_comments: 18,
    number_of_shares: 72,
    card_type: card1style,
  };
  const branding_card_data = {
    top_title: "",
    image_container_class: "branding_card_image_container",
    image_class: "branding_card_image",
    image_name: "image_Branding.png",
    bottom_optional_title: "Branding",
    number_of_likes: 41,
    number_of_comments: 15,
    number_of_shares: 74,
    card_type: card2style,
  };
  const web_wevelopment_card_data = {
    top_title: "",
    image_container_class: "digital_marketing_card_image_container",
    image_class: "digital_marketing_card_image",
    image_name: "image_Web_development.png",
    bottom_optional_title: "Web Development",
    number_of_likes: 80,
    number_of_comments: 18,
    number_of_shares: 96,
    card_type: card2style,
  };
  const softwear_development_card_data = {
    top_title: "",
    image_container_class: "digital_marketing_card_image_container",
    image_class: "digital_marketing_card_image",
    image_name: "image_Softwear_developement.png",
    bottom_optional_title: "Software Development",
    number_of_likes: 35,
    number_of_comments: 11,
    number_of_shares: 57,
    card_type: card2style,
  };
  const buisness_consulting_card_data = {
    top_title: "Business Consulting",
    image_container_class: "digital_marketing_card_image_container",
    image_class: "digital_marketing_card_image",
    image_name: "image_Buisness_consulting.png",
    bottom_optional_title: "",
    number_of_likes: 41,
    number_of_comments: 3,
    number_of_shares: 96,
    card_type: card1style,
  };

  const cardDataArray = [
    app_development_card_data,
    branding_card_data,
    digital_marketing_card_data,

    softwear_development_card_data,
    buisness_consulting_card_data,
    web_wevelopment_card_data,
  ];

  return (
    <div
      className={service_page_styles.service_page_main_div}
      id="service_page_main_div"
    >
      <div className={service_page_styles.service_page_title_container}>
        <p className={service_page_styles.service_page_title}>SERVICES</p>
      </div>
      <div
        name="container_of_class"
        className={service_page_styles.social_media_card_container}
      >
        {cardDataArray.map((index, data) => (
          <SocialMediaCard info={index} key={index.image_name} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
