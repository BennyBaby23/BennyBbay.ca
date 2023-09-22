import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {styles} from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return(

    <Tilt className="xs:w-[250px] w-full">

      <motion.div variants={fadeIn("right", "spring", 0.10 *index, 7.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options={{max:45, scale:1, speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280Px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      {/* For introduction section */}
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","", 0.1, 7)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">Hi, I am a 23-year-old IT Professional, I started my coding journey as a naive computer science student with a passion to learn everything I could about this programming world - code, unix, linux, theory. And all the while, teaching myself HTML, CSS, and JS development with a dream to build my own web-app, but that soon got overshadowed by my desire to excel in Java. However, I think it's time. It's time to get uncomfortable again. I have a burning desire to be a full fledge Full stack developer and an Entrepreneur, and fulfill that dream younger me had of building my own company, my own product. And in order to do that, I'll be implmementing a few measures to focus more time on fulfilling that dream - a dream that I'll be ready to tackle in 2023 due to the measure I'm putting in place now until the end of 2022. </motion.p>

    <div className="mt-20 flex flex-wrap gap-10"> 
    {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")