import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {styles} from '../styles';

const Tech = () => {
  return (
   
 
    // div for 3d ball model for showing technolgies
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="flex flex-row flex-wrap justify-center gap-10">
               <motion.div variants={textVariant()}>
    {/* For Heading */}
    <p className={styles.sectionSubText}>Technology</p>
    <h2 className={styles.sectionHeadText}>Expertise:</h2>
  </motion.div></div>

<div className="flex flex-row flex-wrap justify-center gap-10">
      {/* mapping through each technology */}
      {technologies.map((technology) => (<div className="w-28 h-28" key={technology.name}> 

      {/* rendering the ballcanvas */}
      <BallCanvas icon={technology.icon} />
       </div>
       ))}</div>
       </div> 
  )
}

export default SectionWrapper(Tech, "");