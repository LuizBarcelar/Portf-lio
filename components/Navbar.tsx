"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll detector
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        w-[90%] md:w-[75%] lg:w-[65%]
        rounded-2xl
        border backdrop-blur-2xl
        shadow-[0_8px_30px_rgb(0,0,0,0.15)]
        transition-all duration-500 ease-out
        border-white/10 bg-white/5
        ${isScrolled ? "py-2 mt-2" : "py-4 mt-4"}
      `}
    >
      <div className="flex items-center justify-between px-6">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="
            text-xl font-semibold tracking-wide 
            bg-clip-text text-transparent 
            bg-linear-to-r from-purple-400 to-blue-400
          "
        >
          Luiz Barcelar
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name} className="group relative">
              <Link
                href={link.href}
                className="
                  text-white/80 group-hover:text-white
                  transition-all duration-300
                "
              >
                {link.name}
              </Link>

              {/* underline animado */}
              <span
                className="
                  absolute left-0 -bottom-1 
                  h-0.5 w-0 
                  bg-linear-to-r from-purple-400 to-blue-400
                  transition-all duration-300 
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="
            hidden md:inline-flex items-center
            bg-purple-500 hover:bg-purple-600
            text-white text-sm font-medium
            px-4 py-2 rounded-xl
            transition shadow-lg shadow-purple-500/20
          "
        >
          Vamos conversar
        </Link>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden md:hidden"
      >
        <ul className="flex flex-col px-6 pb-4 pt-2">
          {links.map((link) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                href={link.href}
                className="block py-2 text-lg text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
