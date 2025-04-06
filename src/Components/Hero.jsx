import Cta from "./Cta";
import scrollImg from "../Images/scroll.webp";
import HeroSectionImg from "../Images/hero-section-pic.webp";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import {
  leftheroVariants,
  leftHeroChildVariants,
  heroVariants,
  rightHeroCircleVariant,
  rightImgVariant,
  rightHeroVariants,
  scrollVariant
} from "../variants";
import ScrollDots from './ScrollDots';
import "./hero.scss";


const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const heroAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      heroAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          type: "tween",
        },
      });

      document.body.classList.add("hero");
      document.body.classList.remove("changeColor");
    } else {
      document.body.classList.remove("hero");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section id="hero" ref={ref} className="hero | bg-primary-800">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={heroAnimation}
        className="heroContainer | even-columns container"
      >
        <motion.div
          variants={leftheroVariants}
          initial="hidden"
          animate="show"
          className="leftHero"
        >
          <motion.p
            variants={leftHeroChildVariants}
            className="helloHeading | fs-hello-heading ff-accent fw-medium text-primary-600"
          >
            Hello, I am
          </motion.p>
          <motion.div variants={leftHeroChildVariants}>
            <h2 className="fs-heading ff-primary text text-neutral-100">
              Syed <span className="text-primary-600">Taqi</span> Abbas,
            </h2>
            <h3 className=" fs-heading ff-primary text-accent-200">
              Web Developer
            </h3>
          </motion.div>
          <motion.p
            variants={leftHeroChildVariants}
            className="heroText | fs-heading-text ff-neutral text-neutral-100"
          >
            I am a Web Developer and also a occasionally designer I am a
            positive, enthusiastic and I will perform highly in my role.
          </motion.p>
          <motion.div variants={leftHeroChildVariants} className="contactBtn">
            <Cta className="fs=button" id={1} open={"self"} />
          </motion.div>
          <motion.div
            variants={scrollVariant}
            animate="show"
            initial="hidden"
            className="scroll"
          >
            <img className="scrollImg" src={scrollImg} alt="scroll" />
            <p className="scrollText | fs-scroll ff-neutral text-neutral-100">
              Scroll <span>Down</span>
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="rightHero">
          <motion.div className="heroImg | bg-primary-600">
            <motion.div
              variants={rightHeroVariants}
              initial="hidden"
              animate="show"
              className="personContainer"
            >
              <motion.div
                variants={rightHeroCircleVariant}
                className="circle | bg-neutral-100"
              ></motion.div>
              <motion.img
                variants={rightImgVariant}
                src={HeroSectionImg}
                alt=""
                className="personImg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <ScrollDots/>
    </section>
  );
};

export default Hero;
