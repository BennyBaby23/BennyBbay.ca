import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

    <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

      {/* dot and the purpple line */}
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      {/* Name and details */}
      <div>
      <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Times+New+Roman&size=58&duration=5017&pause=1013&color=6BB5F7&width=582&height=82&lines=HI%2C+I'M+BENNY+BABY;ENTREPRENEUR;FULL+STACK+DEV;ALWAYS+LEARNING" alt="Typing SVG" /></a>
        <p className={`${styles.heroSubText} mt-2 text-white-25`}>I started my coding journey as a naive computer science student with a passion to learn everything I could about this programming world - code, unix, linux, theory. And all the while, teaching myself iOS development with a dream to build my own app, but that soon got overshadowed by my desire to excel in Java. However, I think it's time. It's time to get uncomfortable again. I have a burning desire to be a full fledge Full stack developer and an Entrepreneur, and fulfill that dream younger me had of building my own company, my own product <br className="sm:block hidden"/>  And in order to do that, I'll be implmementing a few measures to focus more time on fulfilling that dream - a dream that I'll be ready to tackle in 2023 due to the measure I'm putting in place now until the end of 2022. Don't wait up, because I'm coming.</p>
      </div>
    </div>

    <ComputersCanvas />
    </section>
  );
};

export default Hero;