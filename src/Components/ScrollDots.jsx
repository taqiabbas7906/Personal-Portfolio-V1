import { scrollDotsLinks } from '../data'
import { motion } from 'framer-motion'
import "./scrollDots.scss"
import { scrollDotVariant , scrollChildVariants } from '../variants'
const ScrollDots = () => {
  return (
    <aside>
    <motion.ul variants={scrollDotVariant} initial="hidden" animate= "show" className="scrollDots" key={"scrollDots"}>
        {scrollDotsLinks.map(({id, src})=>{
            return(
                <motion.a variants={scrollChildVariants} href={src} key={id}><li className='dot' key={id} >
                    
                </li></motion.a>
            )
        })}
    </motion.ul>
    </aside>
  )
}

export default ScrollDots