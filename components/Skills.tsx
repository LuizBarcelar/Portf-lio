"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Layers, Server, Rocket, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "./ui/TiltCard";

const skills = [
  { name: "React", icon: Code, level: "Expert", group: "Frontend" },
  { name: "Next.js", icon: Layers, level: "Expert", group: "Frontend" },
  { name: "TypeScript", icon: Cpu, level: "Avançado", group: "Frontend" },
  { name: "Tailwind CSS", icon: LayoutDashboard, level: "Avançado", group: "Frontend" },

  { name: "Node.js", icon: Server, level: "Intermediário", group: "Backend" },
  { name: "NestJS", icon: Server, level: "Em evolução", group: "Backend" },

  { name: "Server Components", icon: Rocket, level: "Em evolução", group: "Arquitetura" },
  { name: "Server Actions", icon: Rocket, level: "Em evolução", group: "Arquitetura" },
  { name: "App Router", icon: Rocket, level: "Avançado", group: "Arquitetura" },
  { name: "REST APIs", icon: Rocket, level: "Avançado", group: "Arquitetura" },
];

export default function SkillsUltra() {
  const groupedSkills: Record<string, typeof skills> = {
    Frontend: skills.filter(skill => skill.group === "Frontend"),
    Backend: skills.filter(skill => skill.group === "Backend"),
    Arquitetura: skills.filter(skill => skill.group === "Arquitetura"),
  };

  return (
    <section id="skills" className="px-6 py-24 max-w-7xl mx-auto relative">

      {/* PARTICULAS DE LUZ */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
              x: [0, Math.random() * 500 - 250],
              y: [0, Math.random() * 400 - 200],
            }}
            transition={{
              duration: 6,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-2 h-2 rounded-full bg-purple-500/40 blur-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-16"
      >
        Minhas <span className="text-purple-500">Skills</span>
      </motion.h2>

      {/* GRID ULTRA */}
      <div className="flex flex-col gap-20">
      {Object.entries(groupedSkills).map(([group, items], groupIndex) => (
        <div key={group}>

      {/* Título do grupo */}
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-purple-400 mb-3 uppercase tracking-wide"
      >
        {group}
      </motion.h3>

      <div className="h-px w-full bg-linear-to-r from-purple-500/40 via-purple-500/10 to-transparent mb-8" />
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <TiltCard key={skill.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  backdrop-blur-xl bg-white/10 dark:bg-black/20
                  border border-white/10 rounded-3xl 
                  p-8 shadow-xl relative overflow-hidden
                  group hover:border-purple-500/40 transition
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition bg-linear-to-br from-purple-500/40 to-blue-500/40 blur-2xl" />

                <div className="relative flex flex-col items-center text-center gap-4">
                  <Icon size={50} className="text-purple-400 drop-shadow-lg" />

                  <h4 className="text-xl font-semibold">{skill.name}</h4>

                  <span className="
                    px-3 py-1 rounded-full text-xs font-medium
                    bg-purple-500/20 text-purple-300 border border-purple-500/40
                  ">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </div>
  ))}
</div>
</section>
);
}