import { motion } from 'framer-motion';
import { styles }  from '../styles';
import { staggerContainer } from '../utils/motion';

// higher order component to wrap everything to make it look good
const SectionWrapper = (Component, idName) => function HOC() {
    return(
        // for wrapping each section for motion and style and padding
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        <Component />

        </motion.section>
    )
}

export default SectionWrapper;