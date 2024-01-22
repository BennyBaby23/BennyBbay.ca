import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();

  // usestate hook for setting the intial value for message
  const [form, setfirst] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false)

  // function for submiting input and handling changes in input box
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className="xl:mt-15 xl:flex-row flex-col-reverse flex gap-20 overflow-hidden">
      {/* framer motion so contact section slide in */}
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">

        {/* headung for contact section */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}> Connect</h3>

        
        {/* form for each contact section */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">

          {/* input section for Name */}
          <label className="flex flex-col "> 
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium" />
            </label>


          {/* input section for Email */}
          <label className="flex flex-col "> 
            <span className="text-white font-medium mb-4">Email</span>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium" />
            </label>


          {/* input section for Message */}
          <label className="flex flex-col "> 
            <span className="text-white font-medium mb-4">Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Message" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium" />
            </label>


            {/* submit button */}
            <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"> {loading ? 'Sending...' : 'Send'}</button>

        </form>
      </motion.div>

      {/* framer motion for 3d canvas model */}
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"><EarthCanvas /></motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")