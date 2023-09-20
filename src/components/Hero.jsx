import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

    <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

      {/* dot and the purpple line */}
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#AEE1F9]' />
        <div className='w-1 sm:h-80 h-40 blue-gradient' />
      </div>

      {/* Name and details */}
      <div>
      <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=70&pause=1000&color=AEE1F9&width=718&height=109&lines=I'M+BENNY+BABY;ENTREPRENEUR;SOFTWARE+ENGINEER;ALWAYS+LEARNING" alt="Typing SVG" /></a>
      <p className={`${styles.heroSubText} mt-2 text-white-25`}>Printf (Orli Say's "Hello World!");</p>
      </div>
    </div>

    <ComputersCanvas />
   {/*Scrolling animation with framer motion  */}
   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.dev animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1" />
        </div>
        </a>
    </div>

    </section>
  );
};

export default Hero;