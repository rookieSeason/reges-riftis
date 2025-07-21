import { motion, easeInOut } from "framer-motion";
import { Link } from "react-scroll";

// Optimized animation variants - consolidated and performance-focused
const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeInOut },
};

const fadeInDelayed = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.4, ease: easeInOut },
};

const scaleButton = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  // whileHover: { scale: 1 },
  transition: { delay: 0.4, duration: 0.3, ease: easeInOut },
};
const BUTTON_CLIP =
  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)";

const HeroContent = () => (
  <article className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left mt-14 md:mt-0">
    <motion.h1
      {...fadeInUp}
      className="text-6xl text-gray-900 dark:text-gray-100 md:text-7xl max-w-md font-extrabold font-roboto-condensed mb-4 leading-13 md:leading-15 tracking-tight italic"
    >
      WELCOME TO{" "}
      <span className="text-sky-950 dark:text-cyan-500">REGES RIFTIS</span>
    </motion.h1>

    <motion.p
      {...fadeInDelayed}
      className="text-md max-w-lg md:text-lg pr-5 text-gray-700 dark:text-gray-300 mb-4 font-manrope"
    >
      A high-level Wild Rift guild committed to competitive excellence,
      strategic gameplay, and team synergy. We play with purpose, precision, and
      passion—built to dominate every Rift we enter.
    </motion.p>

    <motion.div {...scaleButton}>
      <Link
        to="about"
        offset={-60}
        className="inline-block bg-sky-950 dark:bg-cyan-500 hover:bg-sky-800 text-gray-100 dark:hover:bg-cyan-600 dark:text-black font-semibold font-manrope px-6 py-3 text-md transition"
        style={{ clipPath: BUTTON_CLIP }}
        smooth={true}
        duration={500}
      >
        View More
      </Link>
    </motion.div>
  </article>
);

export default HeroContent;
