import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github , deploy } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// for each project card and its properties
const ProjectCard = ({index, name, description, tags, image, source_code_link, deploy_link }) => { 
  return(
    // framer motion for the card
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* card tilt */}
      <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          {/* card image of the project */}
          <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl" />
          
          <div className="absolute inset-1 flex justify-end m-1 card-img_hover">
            
            {/* github image */}
            <div onClick={() => window.open(source_code_link, "_blank") } className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-cover" />
            </div>
            
           {/* deploy image */}
            <div onClick={() => window.open(deploy_link, "_blank") } className="blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
              <img src={deploy} alt="deploy" className="w-1/2 h-1/2 object-contain" />
            </div>

          </div>
        </div>

      {/* description and name of the project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* tag of the project wwhich languages or tools used */}
        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    // empty react fragment
    <>
    <motion.div variants={fadeIn()}>
      {/* For introduction section */}
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
     
     <div className="w-full flex">
      {/* main heading for the projects */}
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
        Projects showcase my work and experience through real-world examples of my work. Each project is links to code repositories and Website. It reflects my ability to solve complex problems, work with different technologies. 
      </motion.p>
     </div>

    {/* rendering each project card */}
     <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (<ProjectCard key={`project-${index}`} index={index} {...project} />))}
     </div>
    

    </>
  )
}

export default SectionWrapper(Works, "work");