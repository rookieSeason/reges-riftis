import { motion, useInView, easeInOut, type Variants } from "framer-motion";
import { useRef, type JSX } from "react";

const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function RosterHero(): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-left mb-12 md:mb-10">
      <motion.h1
        variants={fadeInDown}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-roboto-condensed mb-2 text-sky-950 dark:text-cyan-500 tracking-tight italic"
      >
        MEET THE RIFTIS
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ delay: 0.2, duration: 0.5, ease: easeInOut }}
        className="text-md md:text-lg text-gray-700 dark:text-gray-300 font-manrope max-w-2xl"
      >
        A team of elite players mastering Wild Rift with precision, strategy,
        and unmatched skill. We don’t just play — we set the standard.
      </motion.p>

      {/* Decorative underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "120px" } : { width: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: easeInOut }}
        className="h-1  bg-sky-950 dark:bg-cyan-500 mt-2"
      />
    </div>
  );
}
