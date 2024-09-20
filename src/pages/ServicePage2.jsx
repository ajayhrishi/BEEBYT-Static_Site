import { services_page2_styles } from "../styles/services_page2.jsx";
import paper_bg from "../assets/background_images/paper_background.png";
import graphic_bg from "../assets/background_images/home_page_back_ground.png";

const ServicePage2 = () => {
  const card_maker = (info) => {
    if (info.bg === 1) {
      return (
        <div
          className={services_page2_styles.slide}
          key={info.title}
          style={{
            backgroundImage: `url(${graphic_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={services_page2_styles.slide_title}>{info.title}</div>
          <div className={services_page2_styles.slide_content}>{info.data}</div>
        </div>
      );
    } else {
      return (
        <div
          className={services_page2_styles.slide}
          key={info.title}
          style={{
            color: `black`,
            backgroundImage: `url(${paper_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={services_page2_styles.slide_title}>{info.title}</div>
          <div className={services_page2_styles.slide_content}>{info.data}</div>
        </div>
      );
    }
  };

  const seo = {
    bg: 1,
    title: "Search Engine Optimization (SEO)",
    data: "Search Engine Optimization helps your business rank higher on search engines like Google, bringing more visitors to your website and boosting sales without paid ads.",
  };
  const ppc = {
    bg: 1,
    title: "Pay-Per-Click Advertising (PPC).",
    data: "Pay-Per-Click (PPC) advertising is a model where businesses pay a fee each time their ad is clicked, driving targeted traffic to their website.",
  };
  const content_marketing = {
    bg: 2,
    title: "Content Marketing Strategy",
    data: "Content marketing strategy involves creating valuable, relevant content to attract and engage your target audience, driving traffic and boosting business growth.",
  };
  const CRO = {
    bg: 1,
    title: "Cost-Per-Click Advertising (CPC)",
    data: "Conversion Rate Optimization (CRO) improves your website to increase the percentage of visitors who take desired actions, like making a purchase or signing up.",
  };
  const email_marketing = {
    bg: 1,
    title: "Email Marketing",
    data: "Email marketing involves sending targeted emails to your audience to promote products, build relationships, and drive sales.",
  };
  const buisness_consulting = {
    bg: 2,
    title: "Business Consulting",
    data: "Business consulting provides expert advice and solutions to help companies improve performance, streamline operations, and achieve growth goals.",
  };
  const web_developement = {
    bg: 1,
    title: "Web Development",
    data: "Web development involves building and maintaining websites to ensure functionality, performance, and user experience, helping businesses establish a strong online presence..",
  };
  const softwear_development = {
    bg: 1,
    title: "Software Development",
    data: "Software development is the process of designing, coding, testing, and maintaining software applications to solve problems and meet user needs.",
  };

  const datas = [
    seo,
    ppc,
    content_marketing,
    CRO,
    email_marketing,
    buisness_consulting,
    web_developement,
    softwear_development,
  ];

  //JSX element part
  return (
    <div
      name="main_div"
      className={`${services_page2_styles.main_div}`}
      id="main_div"
    >
      <div
        name="slide-container"
        className={`${services_page2_styles.slide_container}`}
        id="slide-container"
      >
        {datas.map((info) => {
          return card_maker(info);
        })}
      </div>
    </div>
  );
};

export default ServicePage2;
