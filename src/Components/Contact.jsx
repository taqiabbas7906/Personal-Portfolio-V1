import ContactInput from "./ContactInput";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactVariants } from "../variants";
import { socialLinks } from "../data";
import { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const contactAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      contactAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.2,
          type: "tween",
        },
      });

      document.body.classList.add("contact");
      document.body.classList.add("changeColor");
    } else {
      document.body.classList.remove("contact");
      document.body.classList.remove("changeColor");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} className="contact | bg-primary-600" id="contact">
      <motion.div
        variants={contactVariants}
        initial="hidden"
        animate={contactAnimation}
        className="contactContainer | container"
      >
        <h3 className="contactHeading | text-primary-800 ff-primary fs-secondary-heading fw-extraBold letterSpace">
          Wanna Say Something?
        </h3>
        <p className="contactText | text-neutral-100 ff-neutral fs-secondary-heading-text fw-regular letterSpace">
          Have any proposal, Query or just wanna say Hello don’t hesitate just
          mail me.
        </p>
        <ContactInput />
        <ul className="socialLinks mobile">
          {socialLinks.map(({ name, icon, url }) => {
            return (
              <motion.li
                whileHover={{ y: -4 }}
                key={name}
                className="cta hollow socialLink"
              >
                <a rel="noreferrer" target="_blank" href={url}>
                  {icon}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Contact;
