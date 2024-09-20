import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailjsData } from "../data.jsx";
import { sale_page_styles } from "../styles/free_consultancy_page_styles.jsx";

const CallBack = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsData.service_id,
        emailjsData.template_id,
        form.current,
        emailjsData.publicKey
      )
      .then(
        () => {
          alert(
            "Your number has been submitted successfully! We will call you back."
          );
        },
        (error) => {
          alert(
            "Technical Error, Unable to send the number. Please try again."
          );
          console.log("Technical Error:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="input_box"
        className={`${sale_page_styles.input_box}`}
        placeholder="Drop your number. We will call you back."
        required
      />
    </form>
  );
};

export default CallBack;
