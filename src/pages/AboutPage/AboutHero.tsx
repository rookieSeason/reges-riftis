import { motion, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";

const fadeInDown = {
  inital: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="md:w-1/2 flex items-center">
      <div ref={ref}>
        <motion.h2
          variants={fadeInDown}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.4, ease: easeInOut }}
          className="text-5xl md:text-6xl font-extrabold font-roboto-condensed mb-6 text-sky-950 dark:text-cyan-500 tracking-tight italic"
        >
          AGGRESIVE. FLASHY. ELITE
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 0.1, duration: 0.4, ease: easeInOut }}
          className="text-md md:text-lg max-w-lg text-gray-700 dark:text-gray-300 leading-relaxed font-manrope"
        >
          A Wild Rift guild forged in the fire of competition. Our playstyle is
          <span className="text-sky-950 dark:text-cyan-500 font-semibold italic">
            {" "}
            aggressive, calculated, and flashy
          </span>
          . We don't just play to win — we dominate, entertain, and evolve.
        </motion.p>
      </div>
    </div>
  );
}
