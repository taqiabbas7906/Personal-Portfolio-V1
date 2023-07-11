import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contactInput.scss";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const ContactInput = () => {
  const [messageStatus, setMessageStatus] = useState("Shoot Message")
  const { values, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (e, action) => {
        setMessageStatus("Sending...")
        emailjs
          .sendForm(
            "service_nxjvneg",
            "template_znit6ek",
            form.current,
            "Pi4Gh2H_HGhaFbTe2"
          )
          .then(
            (result) => {
              setMessageStatus("Message Sent")
              setTimeout(setMessageStatus("Shoot Message"),2000)
            },
            (error) => {
              setMessageStatus("Try Again")
              setTimeout(setMessageStatus("Shoot Message"),2000)
            }
          );

        action.resetForm();
      },
    });


  const form = useRef();

  return (
    <form ref={form} className="contactInput" onSubmit={handleSubmit}>
      <div className="contactTop">
        <div className="contactName bg-primary-800 ff-neutral fs-about-text">
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="contactEmail bg-primary-800 ff-neutral fs-about-text">
          <input
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="contactMessage bg-primary-800 ff-neutral fs-about-text">
        <textarea
          autoComplete="off"
          name="message"
          placeholder="Message"
          rows={30}
          cols={50}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <button type="submit" className="cta">
        <span className="ff-neutral fs-button">{messageStatus}</span>
      </button>
    </form>
  );
};
export default ContactInput;
