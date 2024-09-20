//Icon imports
import like_icon from "../assets/social_media_card_items/socialMediacard_icons/likes.png";
import comment_icon from "../assets/social_media_card_items/socialMediacard_icons/comments.png";
import share_icon from "../assets/social_media_card_items/socialMediacard_icons/shares.png";
import save_icon from "../assets/social_media_card_items/socialMediacard_icons/save.png";
import card_heading_logo from "../assets/logo.png";
import card_3_dot_icon from "../assets/social_media_card_items/socialMediacard_icons/threedots.png";

const SocialMediaCard = (info) => {
  const card_data = info.info; //extracting the data of the card.
  const style = card_data.card_type;
  // to be processed with the second type of card styles.
  const typography_below_image = `typography_below_image`;
  const card_heading_typography_elements_container = `card_heading_typography_elements_container`;

  return (
    <div name="card_main_class_div" className={`${style.card_main_class_div}`}>
      {/************** top main container ************************** */}
      <div
        name="card_top_main_container"
        className={`${style.card_top_main_container}`}
      >
        {/**------------------------------------------------------------ */}
        <div
          name="card_heading_elements_container"
          className={`${style.card_heading_elements_container}`}
        >
          {/**__________________________________________________________*/}
          <div
            name="card_heading_logo_conainer"
            className={`${style.card_heading_logo_conainer}`}
          >
            <div
              name="card_logo_background"
              className={`${style.card_logo_background}`}
            >
              <img
                name="card_heading_logo"
                src={card_heading_logo}
                alt={card_data.top_title || card_data.bottom_optional_title}
              />
            </div>
          </div>
          {/**__________________________________________________________*/}
          <div
            name="card_heading_typography_elements_container"
            className={`${style.card_heading_typography_elements_container}`}
          >
            <div
              name="mainheadingandtag"
              className={`${style.mainheadingandtag}`}
            >
              <div name="main_heading" className={`${style.main_heading}`}>
                BEEBYTE
              </div>
              <div name="beebyte_tag" className={`${style.beebyte_tag}`}>
                @beebyt.co
              </div>
            </div>
            <div name="service" className={`${style.service}`}>
              {card_data.top_title}
            </div>
          </div>
        </div>
        {/**------------------------------------------------------------ */}
        <div
          name="card_3_dot_icon_container"
          className={`${style.card_3_dot_icon_container}`}
        >
          <img
            name="card_3_dot_icon"
            className={`${style.card_3_dot_icon}`}
            src={card_3_dot_icon}
            alt={card_data.top_title || card_data.bottom_optional_title}
          />
        </div>
      </div>
      {/************** Card Image main container ************************** */}
      <div
        name="card_image_conatiner"
        className={`${style.card_image_conatiner}`}
      >
        <img
          name="card_image"
          src={`/service_card_images/${card_data.image_name}`}
          alt={card_data.top_title || card_data.bottom_optional_title}
          className={`${style.card_image}`}
        />
      </div>
      {/************** Card second last main container ************************** */}
      <div name="typography_below_image" className={typography_below_image}>
        <div
          name="card_heading_typography_elements_container"
          className={card_heading_typography_elements_container}
        >
          {card_data.bottom_optional_title ? (
            <div
              name="card_heading_typography_elements_container_variant"
              className={`${style.card_heading_typography_elements_container}`}
            >
              <div
                name="below_image_heading_tag"
                className={`${style.below_image_heading_tag}`}
              >
                <div
                  name="main_heading_variant"
                  className={`${style.main_heading}`}
                >
                  BEEBYTE
                </div>
                <div
                  name="beebyte_tag_variant"
                  className={`${style.beebyte_tag}`}
                >
                  @beebyt.co
                </div>
              </div>
              <div name="service_variant" className={`${style.service}`}>
                {card_data.bottom_optional_title}
              </div>
            </div>
          ) : (
            <p
              name="subtitle_below_typography"
              className="subtitle_below_typography"
            ></p>
          )}
        </div>
      </div>
      {/*****************card_botton_main container*************************** */}
      <div
        name="card_bottom_main_conatiner"
        className={`${style.card_bottom_main_conatiner} mt-[auto] mb-[15px]`}
      >
        <div name="main_segments" className={`${style.main_segments}`}>
          <div name="like_segment" className={`${style.like_segment}`}>
            <img
              name="like_icon"
              className={`${style.like_icon}`}
              src={like_icon}
              alt={card_data.top_title || card_data.bottom_optional_title}
            />
            <div name="number_of_likes" className={`${style.number_of_likes}`}>
              {card_data.number_of_likes}
            </div>
          </div>
          <div name="comment_segment" className={`${style.comment_segment}`}>
            <img
              name="comment_icon"
              className={`${style.comment_icon}`}
              src={comment_icon}
              alt={card_data.top_title || card_data.bottom_optional_title}
            />
            <div
              name="number_of_comments"
              className={`${style.number_of_comments}`}
            >
              {card_data.number_of_comments}
            </div>
          </div>
          <div name="share_segment" className={`${style.share_segment}`}>
            <img
              name="share_icon"
              className={`${style.share_icon}`}
              src={share_icon}
              alt={card_data.top_title || card_data.bottom_optional_title}
            />
            <div
              name="number_of_shares"
              className={`${style.number_of_shares}`}
            >
              {card_data.number_of_shares}
            </div>
          </div>
          <div
            name="save_icon_container"
            className={`${style.save_icon_container}`}
          >
            <img
              name="save_icon_class"
              className={`${style.save_icon_class}`}
              src={save_icon}
              alt={card_data.top_title || card_data.bottom_optional_title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
