// src/components/JoinNow.tsx
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
// import {Link} from "react"

export default function JoinNow() {
  return (
    <Element
      name="join"
      className="min-h-screen bg-white dark:bg-[#1e1e1e] px-6 py-16 flex flex-col items-center justify-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-8xl font-bold mb-2 font-roboto-condensed uppercase text-sky-950 dark:text-cyan-500 tracking-tight italic"
      >
        Join Reges Riftis
      </motion.h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6 font-manrope">
        Whether you're casual or competitive, we’re open to all players who are
        passionate and committed. Let’s climb together.
      </p>

      <ul className="text-left text-gray-600 dark:text-gray-400 mb-8 space-y-2 max-w-md font-manrope">
        <li>• 💬 Be active on Discord</li>
        <li>• 🎯 Know your main role and champ pool</li>
        <li>• 🧠 Open to learning and team play</li>
        <li>• 🌍 Based in SEA (PH preferred)</li>
      </ul>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-manrope text-gray-50 dark:text-gray-800 bg-sky-950 hover:bg-sky-800 dark:bg-cyan-500 dark:hover:bg-cyan-600 px-6 py-3 font-semibold"
        style={{
          clipPath:
            "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
        }}
      >
        <FaDiscord className="text-xl" />
        Join Our Discord
      </a>
    </Element>
  );
}
