import aboutSectionPic from "../Images/about-section-pic.webp";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import resume from "../Taqi's Resume.pdf"
import { Link } from "react-router-dom";
import { useAnimation ,motion} from "framer-motion";
import { aboutVariants } from "../variants";
import "./about.scss";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const aboutAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
    aboutAnimation.start({
        opacity: 1,
        y:0,
        transition: {
          delay:0.1,
          duration: 0.2,
          type: "tween",
        },
      });

      document.body.classList.add("about");
      document.body.classList.remove("changeColor");
    } else {
      document.body.classList.remove("about");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} id="about" className="about | bg-primary-800">
      <motion.div variants={aboutVariants} initial="hidden" animate={aboutAnimation} className="aboutContainer | container even-columns">
        <div className="leftAbout">
          <div className="aboutImgContainer">
            <div className="imgFilter | bg-primary-500"></div>
            <img
              alt="Syed Taqi Abbas"
              src={aboutSectionPic}
              className="aboutImg"
            />
            <div className="aboutPicBorder"></div>
          </div>
        </div>
        <div className="rightAbout">
          <h3 className="aboutHeading | fs-secondary-heading fw-extraBold ff-primary text-primary-600 letterSpace">
            Talking About Myself
          </h3>
          <div className="aboutText | fw-regular fs-about-text ff-neutral text-neutral-100">
            <p>
              My name is Syed Taqi Abbas and I am 18 years old. I have 2 years
              of experience in web development, specializing in front-end design
              with HTML/CSS/JS. My goal is always to create responsive websites
              that look great on any device - which means that I'm extremely
              capable at creating user interfaces that are both visually
              appealing and mobile-friendly.
            </p>
            <p>
              I appreciate my job and put all of my effort into it, no matter
              what time of day it is. I really enjoy working with clients,
              regardless of how busy things are. If you're looking for a skilled
              developer who can help you build an amazing website, please feel
              free to check out my <a rel="noreferrer" target="_blank" className="link" href="https://www.linkedin.com/in/syedtaqiabbas/">LinkedIn</a> profile or <Link className="link" to="/contact">Contact</Link> me from here
            </p>
          </div>
          <button className={`cta resume fill`}>
              <a
                rel="noreferrer"
                className={`ff-neutral fs-button`}
                href={resume}
                download={resume}
                target={"_blank"}
              >
                Resume
              </a>
            </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
