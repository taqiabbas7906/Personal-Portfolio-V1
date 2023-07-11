import {socialLinks} from "../data.js";
import {motion} from "framer-motion"
import { asideVariants } from "../variants.js";
import "./socials.scss"

const Socials = () => {
  return (
    <aside >
      <motion.ul variants={asideVariants} initial="hidden" animate ="show" className="socialLinks">
       
            {socialLinks.map(({name,icon,url})=>{
                return(
                    <motion.li whileHover={{y:-4}}  key={name} className="cta hollow socialLink">
                        <a rel="noreferrer" target="_blank" href={url} >{icon}</a>
                    </motion.li>
                )
            })}
      <div className="line"></div>
      </motion.ul>
    </aside>
  );
};

export default Socials;
