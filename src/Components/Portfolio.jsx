import PortfolioGrid from "./PortfolioGrid"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { portfolioVariants } from "../variants"
import { useEffect
 } from "react"
import "./portfolio.scss"

const Portfolio = (props) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const portfolioAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      portfolioAnimation.start({
        opacity: 1,
        y:0,
        transition: {
          delay:0.1,
          duration: 0.2,
          type: "tween",
        },
      });

      document.body.classList.add("portfolio");
      document.body.classList.remove("changeColor");
    } else {
      document.body.classList.remove("portfolio");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} id='portfolio' className='portfolio | bg-primary-700' >
      <motion.div variants={portfolioVariants} initial="hidden" animate={portfolioAnimation} className="portfolioContainer | container">
        <h3 className="portfolioHeading | ff-primary fs-secondary-heading fw-extraBold text-primary-600 letterSpace">Some of My Work</h3>
        <p className='portfolioText | fs-secondary-heading-text text-neutral-100 ff-neutral fw-regular letterSpace'>Wanna see more designs? Checkout my <a target="_blank" rel="noreferrer" href={"https://dribbble.com/syedtaqiabbas"} className="link">Dribbble</a> profile</p>
        <PortfolioGrid number={props.number} btn={props.btn}/>
      </motion.div>
    </section>
  )
}

export default Portfolio