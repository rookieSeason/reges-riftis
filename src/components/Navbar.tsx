import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Roster", "Community"];

  return (
    <nav className="bg-white dark:bg-[#1e1e1e] shadow-md text-white fixed w-full z-50 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer invert dark:invert-0"
        >
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline text-xl font-bold uppercase tracking-wide text-white">
              Reges Riftis
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-60}
              className="relative text-gray-700 dark:text-gray-300 font-manrope transition duration-200 cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-950 dark:after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="join"
            smooth={true}
            duration={500}
            offset={-60}
            className="relative inline-block px-5 py-2 text-sm font-semibold font-manrope text-white bg-sky-950 hover:bg-sky-800 dark:text-black dark:bg-cyan-500 dark:hover:bg-cyan-600 transition cursor-pointer"
            style={{
              clipPath:
                "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
            }}
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-gray-700 dark:text-gray-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1e1e1e] px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-center text-gray-700 dark:text-gray-300 hover:text-sky-950 dark:hover:text-cyan-500 font-manrope cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <Link
            to="join"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => setIsOpen(false)}
            className="block font-manrope mt-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-sm text-black font-semibold mx-auto w-fit cursor-pointer"
            style={{
              clipPath:
                "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
            }}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}
