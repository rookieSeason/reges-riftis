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
    <div className="md:w-1/2 flex items-center md:or">
      <div ref={ref}>
        <motion.h2
          variants={fadeInDown}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.4, ease: easeInOut }}
          className="text-6xl md:text-7xl font-extrabold font-roboto-condensed mb-2 text-sky-950 dark:text-cyan-500 tracking-tight italic"
        >
          OPEN TO EVERYONE
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 0.1, duration: 0.4, ease: easeInOut }}
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed font-manrope"
        >
          Whether you're grinding ranked or just playing for fun, the Riftis
          Community is open to all. Join a team that welcomes everyone — from
          casual players to competitive climbers — as we grow, improve, and
          enjoy the Rift together.
        </motion.p>
      </div>
    </div>
  );
}
