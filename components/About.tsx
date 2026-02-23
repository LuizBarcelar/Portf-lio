"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-24 px-6 max-w-6xl mx-auto 
        bg-background text-foreground transition-colors
      "
    >
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-16"
      >
        Sobre <span className="text-purple-500">Mim</span>
      </motion.h2>

      {/* FOTO + TEXTO */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* FOTO GRANDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative rounded-3xl overflow-hidden shadow-2xl 
            bg-white/40 dark:bg-white/5
            border border-black/10 dark:border-white/10
            shadow-purple-700/10 
            dark:shadow-purple-500/20
            backdrop-blur-xl transition-colors
          "
        >
          <img
            src="/foto.jpg"
            alt="Foto de Luiz Barcelar"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-br 
          " />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-3xl font-bold">
            Desenvolvedor <span className="text-purple-500">Full Stack</span>
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Sou apaixonado por tecnologia e pela criação de interfaces modernas, rápidas e acessíveis...
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Desenvolvo experiências digitais fluidas e elegantes...
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Atualmente com foco em aplicações front-end dentro de uma atuação Full Stack...
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div
              className="
                p-4 rounded-xl text-center 
                bg-white/40 dark:bg-white/5
                border border-black/10 dark:border-white/10
              "
            >
              <span className="text-2xl font-bold text-purple-500">+3</span>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Anos de experiência
              </p>
            </div>

            <div
              className="
                p-4 rounded-xl text-center 
                bg-white/40 dark:bg-white/5
                border border-black/10 dark:border-white/10
              "
            >
              <span className="text-2xl font-bold text-purple-500">+20</span>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Projetos entregues
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CARDS INFORMATIVOS */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Formação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            p-6 rounded-2xl backdrop-blur-xl 
            bg-white/40 dark:bg-white/5
            border border-black/10 dark:border-white/10
            transition-colors
          "
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-3 tracking-wide text-center">
            Formação
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            • Análise e Desenvolvimento de Sistemas
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Gran Faculdade
          </span>

        </motion.div>

        {/* Pós-graduações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            p-6 rounded-2xl backdrop-blur-xl 
            bg-white/40 dark:bg-white/5
            border border-black/10 dark:border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-3 tracking-wide text-center">
            Especialização
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            • Desenvolvimento Full Stack e Cloud Computing
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            • Inteligência Artificial e Gestão Pública
          </p>
        </motion.div>

        {/* Cursos & Qualificações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            p-6 rounded-2xl backdrop-blur-xl 
            bg-white/40 dark:bg-white/5
            border border-black/10 dark:border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-3 tracking-wide text-center">
            Educação Contínua
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              • Next.js & React ( App Router, Server Actions, RSC ) + APIs com NestJS
            </li>
            <li>• Front-End com React</li>
            <li>• Interfaces Responsivas</li>
            <li>• Consumo de APIs REST</li>
            <li>• JavaScript Moderno</li>
          </ul>
        </motion.div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            p-6 rounded-2xl backdrop-blur-xl 
            bg-white/40 dark:bg-white/5
            border border-black/10 dark:border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-3 tracking-wide text-center">
            Stack Principal
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            React • Next.js • TypeScript • Tailwind CSS • shadcn/ui • REST APIs • Git • NestJS 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
