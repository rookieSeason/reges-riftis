import {
  FaFacebookF,
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Roster", href: "roster" },
  { label: "Community", href: "community" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaDiscord, href: "#" },
  { icon: FaTwitch, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaTiktok, href: "#" },
];

export default function GuildFooter() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <footer className="bg-white dark:bg-[#1e1e1e] text-white px-6 md:px-16 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 font-manrope">
        {/* Logo & Motto */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
            Reges Riftis
          </h2>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            Aggressive. Flashy. Elite.
          </p>
          {/* Toggle Switch with Icons */}
          <div className="mt-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-300 ${
                isDarkMode ? "bg-cyan-500" : "bg-cyan-900"
              }`}
            >
              <div
                className={`transform transition-transform duration-300 ${
                  isDarkMode ? "translate-x-7" : "translate-x-0"
                }`}
              >
                <div className="w-5 h-5 bg-white dark:bg-[#1e1e1e] rounded-full shadow-md flex items-center justify-center">
                  {isDarkMode ? (
                    <Moon size={12} className="text-gray-400" />
                  ) : (
                    <Sun size={12} className="text-gray-600" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-sm text-gray-600 dark:text-gray-300 uppercase mb-2">
            Navigation
          </h3>
          <nav className="flex flex-col gap-2 text-gray-400">
            {navLinks.map(({ label, href }) => (
              <Link
                type="button"
                key={label}
                to={href}
                smooth={true}
                offset={-60}
                className="text-sm hover:text-sky-950 dark:hover:text-cyan-500 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Socials & Theme Toggle */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-sm text-gray-600 dark:text-gray-300 uppercase mb-2">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <Link
                  type="button"
                  key={idx}
                  to={href}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-sky-950 dark:hover:text-cyan-500 transition"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-5 text-center text-sm text-gray-400 border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} Reges Riftis. All rights reserved.
      </div>
    </footer>
  );
}
