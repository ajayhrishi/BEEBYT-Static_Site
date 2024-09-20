import { sale_page_styles } from "../styles/free_consultancy_page_styles";
import background_image from "../assets/background_person.png";
import black_line from "../assets/Line 10.png";
import whatsapp_icon from "../assets/icons/whats_app_transparent.png";
import black_line_veritcal from "../assets/Line 11.png";
import { DialMeLink, phonewithout91 } from "../data.jsx";
import CallBack from "../components/CallBack.jsx";

const FreeConsultancyPage = () => {
  console.log("free consultancy page rendered");
  return (
    <div
      id="free_consultancy_main_div"
      className={`${sale_page_styles.main_div}`}
    >
      <img
        name="page_background"
        src={background_image}
        className={sale_page_styles.background_image}
      />
      <div name="content_div" className={sale_page_styles.content_div}>
        {free_your_thoughts_main_container}
        {middle_container}
        {bottom_container}
      </div>
    </div>
  );
};

//-----------------------------  components used. ----------------------
//-------------------------- top continer ----------------------
const free_your_thoughts_main_container = (
  <div
    name="free_thoughts_tp_container"
    className={sale_page_styles.top_container}
  >
    <div name="main_title" className={sale_page_styles.main_title}>
      FREE YOUR THOUGHTS .....
    </div>
    <div name="second_title" className={sale_page_styles.second_title}>
      Unlock Your Business Potential with Expert Digital Marketing Guidance
    </div>
    <div name="third_title" className={sale_page_styles.third_title}>
      At BEEBYT, we believe that every business has the potential to thrive in
      the digital world. Our free consultancy session is designed to clear the
      clutter and provide you with a clear, actionable plan to elevate your
      brand and drive growth.
    </div>
  </div>
);

//-------------------------- middle continer ----------------------

const middle_container = (
  <div
    name="what_to_expect_md_container"
    className={sale_page_styles.middle_container}
  >
    <p name="tiny_title" className={sale_page_styles.tiny_title}>
      What to expect:
    </p>
    <img
      name="black_line"
      className={sale_page_styles.black_line}
      src={black_line}
    />
    <div
      name="md_content_container"
      className={sale_page_styles.md_content_container}
    >
      <div name="top_row" className={sale_page_styles.row}>
        <div
          name="top1_container"
          className={sale_page_styles.typography_container}
        >
          <p
            name="container_title"
            className={`${sale_page_styles.container_title}`}
          >
            1. Clarify Your Vision:
          </p>
          <p
            name="container_text"
            className={`${sale_page_styles.container_text}`}
          >
            We'll help you articulate your goals and identify the key areas
            where digital marketing can make the biggest impact on your
            business. Whether you're looking to increase brand awareness, drive
            more traffic, or boost sales, we'll help you see the path forward.
          </p>
        </div>
        <div
          name="top2_container"
          className={sale_page_styles.typography_container}
        >
          <p
            name="container_title"
            className={`${sale_page_styles.container_title}`}
          >
            2. Understand the Power of Branding:
          </p>
          <p
            name="container_text"
            className={`${sale_page_styles.container_text}`}
          >
            Your brand is your business's identity in the marketplace. We'll
            show you how effective branding can set you apart from the
            competition, build customer loyalty, and create a lasting impression
            that translates into business growth..
          </p>
        </div>
      </div>
      <div name="bottom_row" className={sale_page_styles.row}>
        <div
          name="bottom1_container"
          className={sale_page_styles.typography_container}
        >
          <p
            name="container_title"
            className={`${sale_page_styles.container_title}`}
          >
            3. Leverage Advanced Technology:
          </p>
          <p
            name="container_text"
            className={`${sale_page_styles.container_text}`}
          >
            In today's fast paced digital landscape, staying ahead of the curve
            is crucial. We'll discuss the latest technologies and tools that can
            help automate your processes, target the right audience, and
            maximize your ROI. Learn how to use data driven strategies and
            innovative solutions to grow your business and increase
            profitability.
          </p>
        </div>
        <div
          name="bottom2_container"
          className={sale_page_styles.typography_container}
        >
          <p
            name="container_title"
            className={`${sale_page_styles.container_title}`}
          >
            4. Actionable Insights:
          </p>
          <p
            name="container_text"
            className={`${sale_page_styles.container_text}`}
          >
            We don't just talk; we deliver actionable insights that you can
            implement right away. Whether it's refining your digital strategy,
            enhancing your online presence, or optimizing your marketing
            campaigns, we’ll provide you with clear steps to take your business
            to the next level.
          </p>
        </div>
      </div>
    </div>
  </div>
);
//-------------------------- bottom continer ----------------------
const bottom_container = (
  <div
    name="talk_to_consultant_container_bt_container"
    className={sale_page_styles.bottom_container}
  >
    <div
      name="talk_box_container"
      className={`${sale_page_styles.talk_box_container}`}
    >
      <div name="box_title" className={`${sale_page_styles.box_title}`}>
        Talk to Consultant, Right Now
      </div>
      <div name="box_content" className={`${sale_page_styles.box_content}`}>
        <div
          name="whats_app_call_container"
          className={`${sale_page_styles.whats_app_call_container}`}
        >
          <a href={`${DialMeLink}`} target="blank">
            <div
              name="whatsapp_wraper"
              className={`${sale_page_styles.whatsapp_wraper}`}
            >
              <img
                name="whats_app_call_icon"
                src={whatsapp_icon}
                className={`${sale_page_styles.whats_app_call_icon}`}
              />
              <p name="number" className={`${sale_page_styles.number}`}>
                +91 {phonewithout91}
              </p>
            </div>
          </a>
        </div>
        <img
          name="line_separator"
          src={black_line_veritcal}
          className={`${sale_page_styles.line_separator}`}
        />
        <div
          name="input_box_container"
          className={`${sale_page_styles.input_box_container}`}
        >
          <CallBack />
        </div>
      </div>
    </div>
  </div>
);

export default FreeConsultancyPage;
