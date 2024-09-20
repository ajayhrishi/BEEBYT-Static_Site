import { our_team_page_styles } from "../styles/our_team_page_styles";
import location_icon from "../assets/icons/location_icon.png";
import CEO_picture from "../assets/employee/agresh.jpeg";
import abhilash_img from "../assets/employee/abhilash.jpeg";
import anshid_img from "../assets/employee/anshid.jpeg";
import jamih_img from "../assets/employee/jamih.jpeg";
import misla_img from "../assets/employee/misna.jpeg";
import rishal_img from "../assets/employee/rishal.jpeg";
import vishnu_img from "../assets/employee/vishnu.jpeg";
import muhsina_img from "../assets/employee/muhsina.jpeg";

const abhilash = {
  name: "Abhilash",
  designation_name: "Graphic Designer",
  img: abhilash_img,
};
const anshid = {
  name: "Anshid",
  designation_name: "Web Developer",
  img: anshid_img,
};
const jamihe = {
  name: "Jamihe",
  designation_name: "Buisness Development Executive",
  img: jamih_img,
};
const misla = {
  name: "Misla",
  designation_name: "Social Media Strategist",
  img: misla_img,
};
const rishal = {
  name: "Rishal",
  designation_name: "SEO Analyst",
  img: rishal_img,
};
const vishnu = {
  name: "Vishnu Raj",
  designation_name: "Sales Director",
  img: vishnu_img,
};
const muhsina = {
  name: "Muhsina",
  designation_name: "Buisness Development Executive",
  img: muhsina_img,
};

const OurTeam = () => {
  const employees = [vishnu, misla, abhilash, rishal, anshid, muhsina, jamihe];

  console.log("our team page rendered");
  return (
    <div className={our_team_page_styles.main_div} id="our_team_page_main_div">
      <div className={our_team_page_styles.content_segment}>
        <div name="top_div" className={our_team_page_styles.top_div}>
          <div name="ceo_details" className={our_team_page_styles.ceo_details}>
            <div name="ceo_card" className={our_team_page_styles.ceo_card}>
              <img
                src={CEO_picture}
                className={our_team_page_styles.CEO_picture}
              />
              <div className={our_team_page_styles.name_des}>
                <div name="ceo_name" className={our_team_page_styles.ceo_name}>
                  Agresh Kolothodi{" "}
                </div>
                <div
                  name="designation_name"
                  className={our_team_page_styles.designation_name}
                >
                  CEO, beebyte
                </div>
                <div
                  name="ceo_words"
                  className={our_team_page_styles.ceo_words}
                >
                  " I believe in moving fast with a strong plan in place. Speed
                  drives growth, but adaptability and strategy ensure lasting
                  success. "
                </div>
              </div>
            </div>
          </div>
          <div
            name="location_container"
            className={our_team_page_styles.location_container}
          >
            <img
              src={location_icon}
              className={our_team_page_styles.location_icon}
            />
            <div
              name="location_typo"
              className={our_team_page_styles.location_typo}
            >
              Calicut, Kerala
            </div>
          </div>
        </div>
        <div name="bottom_div" className={our_team_page_styles.bottom_div}>
          <div name="small_title" className={our_team_page_styles.small_title}>
            Team:
          </div>
          <div
            name="employee_container"
            className={our_team_page_styles.employee_container}
          >
            {employees.map((emp) => {
              return (
                <div name="emp_card" className={our_team_page_styles.emp_card}>
                  <img
                    src={emp.img}
                    alt={emp.name}
                    className={our_team_page_styles.emp_img}
                  />
                  <div
                    name="emp_details"
                    className={our_team_page_styles.emp_details}
                  >
                    <div
                      name="emp_name_typ"
                      className={our_team_page_styles.emp_name_typ}
                    >
                      {emp.name}:
                    </div>
                    <div
                      name="emp_desg_typ"
                      className={our_team_page_styles.emp_desg_typ}
                    >
                      {emp.designation_name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
