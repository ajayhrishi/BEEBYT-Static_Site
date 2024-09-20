import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { contact_us_page_styles } from "../styles/contact_us_page_styles.jsx";
import { email, DialMeLink, whatsAppLink, emailjsData } from "../data.jsx";

//icons
import send_icon from "../assets/icons/whatapp_send.png";
import whatsapp_transparent from "../assets/icons/whatsapp.png";
import call_now from "../assets/icons/whats_app_transparent.png";
import gmail_icon from "../assets/icons/gmail.png";

export const QuickEmailBox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm(
        emailjsData.service_id,
        emailjsData.template_id,
        form.current,
        emailjsData.publicKey
      )
      .then(
        () => {
          window.alert("Your email has been forwarded to EmailJS team");
        },
        (error) => {
          window.alert(
            `Technical Error, Unable to send email. 
              Fix will be out soon!`,
            error.text
          );
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`${contact_us_page_styles.quick_mail_box}`}
    >
      <div
        name="input_wrapper_top"
        className={`${contact_us_page_styles.input_wraper_top}`}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className={`${contact_us_page_styles.your_name_input}`}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className={`${contact_us_page_styles.your_email_input}`}
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        className={`${contact_us_page_styles.your_message_input}`}
      />
      <button type="submit" className={`${contact_us_page_styles.send_button}`}>
        Send
        <img
          src={send_icon}
          className={`${contact_us_page_styles.send_icon}`}
        />
      </button>
    </form>
  );
};

export const purple_contact_box = //---------------------- child
  (
    <div
      name="purple_container"
      className={`${contact_us_page_styles.purple_container}`}
    >
      <a href={`${DialMeLink}`} target="blank">
        <div name="call_now" className={`${contact_us_page_styles.wraper}`}>
          <div name="typography_container">
            <p name="call_now_tag" className={`${contact_us_page_styles.tags}`}>
              Call now
            </p>
            <p name="number" className={`${contact_us_page_styles.number}`}>
              +91 9876543210
            </p>
          </div>
          <img
            alt="whats_app"
            src={call_now}
            className={`${contact_us_page_styles.left_icon}`}
          />
        </div>
      </a>
      <a href={`${whatsAppLink}`} target="blank">
        <div name="whats_app" className={`${contact_us_page_styles.wraper}`}>
          <div name="typography_container">
            <p name="call_now_tag" className={`${contact_us_page_styles.tags}`}>
              Whatsapp Us
            </p>
            <p name="number" className={`${contact_us_page_styles.number}`}>
              +91 9876543210
            </p>
          </div>
          <img
            alt="whats_app"
            src={whatsapp_transparent}
            className={`${contact_us_page_styles.left_icon}`}
          />
        </div>
      </a>
      <a
        href={`mailto:${email}?subject=Customer From Beebyte Official website`}
      >
        <div name="mail_us" className={`${contact_us_page_styles.wraper}`}>
          <div name="typography_container">
            <p
              name="email_now_tag"
              className={`${contact_us_page_styles.tags}`}
            >
              Email Us
            </p>
            <p name="email" className={`${contact_us_page_styles.number}`}>
              beebytbusinesssolutions@gmail.com
            </p>
          </div>
          <img
            alt="whats_app"
            src={gmail_icon}
            className={`${contact_us_page_styles.left_icon}`}
          />
        </div>
      </a>
    </div>
  );
