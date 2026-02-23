"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";
import UltraAvatar3D from "./UltraAvatar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        px-6 py-20 md:py-32 max-w-6xl mx-auto relative
        text-gray-900 dark:text-gray-100
      "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center"
        >
          <UltraAvatar3D />
        </motion.div>

        {/* TEXTO */}
        <div className="flex flex-col gap-6 text-left md:max-w-xl">

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-medium text-purple-600 dark:text-purple-400"
          >
            Desenvolvedor Full Stack • React • Next.js
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Transformo ideias em <br />
            aplicações reais
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-2xl md:text-3xl font-semibold
              bg-clip-text text-transparent
              bg-linear-to-r from-purple-600 to-blue-600
              dark:from-purple-500 dark:to-blue-500
            "
          >
            Luiz Barcelar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 text-lg md:text-xl"
          >
            Crio aplicações modernas com foco em experiência do usuário,
            arquitetura escalável e impacto real no produto.
          </motion.p>

          {/* BOTÕES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col lg:flex-row items-center gap-4 mt-4 w-full"
          >
            {/* GitHub */}
            <a
              href="https://github.com/LuizBarcelar"
              target="_blank"
              className="
                flex items-center justify-center gap-2 
                w-full md:w-auto
                bg-purple-600 hover:bg-purple-700 text-white 
                dark:bg-purple-500 dark:hover:bg-purple-600
                transition px-5 py-3 rounded-xl font-medium
              "
            >
              <Github size={20} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/luiz-barcelar-a73a91331/"
              target="_blank"
              className="
                flex items-center justify-center gap-2 
                w-full md:w-auto
                border border-purple-400 dark:border-purple-300
                hover:bg-purple-400 hover:text-black
                dark:hover:bg-purple-300 dark:hover:text-black
                transition px-5 py-3 rounded-xl font-medium
              "
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            {/* Download CV */}
            <a
              href="/LuizBarcelarCurrículo.pdf"
              download
              className="
                flex items-center justify-center gap-2
                w-full md:w-auto
                bg-purple-600 hover:bg-purple-700 text-white
                dark:bg-purple-500 dark:hover:bg-purple-600
                transition px-5 py-3 rounded-xl font-medium
              "
            >
              <FileDown size={22} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* EFEITOS DE FUNDO */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-40 -left-10 w-72 h-72 
          bg-purple-600/10 dark:bg-purple-600/20 blur-3xl rounded-full" />

        <div className="absolute bottom-20 -right-10 w-72 h-72 
          bg-blue-600/10 dark:bg-blue-600/20 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
