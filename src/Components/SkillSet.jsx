import { NavLink } from "react-router-dom";
import { skills } from "../data";
import skillImg from "../Images/skillImg.svg"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion} from "framer-motion";
import {skillVariants} from "../variants"
import "./skillSet.scss";


const SkillSet = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const skillAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      skillAnimation.start({
        opacity: 1,
        y:0,
        transition: {
          delay:0.1,
          duration: 0.2,
          type: "tween",
        },
      });

      document.body.classList.add("skill");
      document.body.classList.add("changeColor");
    } else {
      document.body.classList.remove("skill");
      document.body.classList.remove("changeColor");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section  ref={ref} id="skillSet" className="skilSet | bg-primary-600">
      <motion.div variants={skillVariants} initial="hidden" animate={skillAnimation} className="skillContainer | even-columns container">
        <div  animate="show" className="leftSkill">
          <h3  className="skillHeading | text-primary-800 fs-secondary-heading fw-extraBold ff-primary letterSpace">
            Tech I Use
          </h3>
          <p  className="skillText | text-neutral-100 ff-neutral fs-secondary-heading-text letterSpace">There are some of my skills but not limited to</p>
          <ul className="skillList" key={"skill"}>
            {skills.map(({name , icon}) => {
              return(
                <li key={name}><NavLink key={name} className={"fw-extraBold fs-skill-text ff-primary text-primary-800"}><span>{icon}</span><span>{name}</span></NavLink></li>
              )
            })}
          </ul>
        </div>
        <div className="rightSkill">
          <img src={skillImg} alt="A guy using computers" className="skillImg" />
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSet;
