import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";


const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement 
  // styling the element
  contentStyle= {{ background: '#1d1833', color: '#fff'}} 
  contentArrowStyle={{ boderRight: '7px solid #232631' }} 
  date={experience.date} 
  iconStyle={{ background: experience.iconBg }} 
  icon = {<div className="flex justify-center items-center w-full h-full"><img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/></div>}>

    {/*whats inside the element, company name and position name */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>

    {/* work experience details in unordered list */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (

        // rendering the list in points
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>)


const Experience = () => {
  return (

    <>
      <motion.div variants={fadeIn()}>
      {/* For introduction section */}
      <p className={styles.sectionSubText}>My Accomplishments Thus Far</p>
    </motion.div>
      <h2 className={styles.sectionHeadText}>WORK EXPERIENCE.</h2>


    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {
          experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience} />))
        }
      </VerticalTimeline>
    </div>
    </>

  )
}

export default SectionWrapper(Experience, "experience");