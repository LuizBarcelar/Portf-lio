"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="
        py-24 px-6 max-w-7xl mx-auto
        text-gray-900 dark:text-gray-100
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
        Meus <span className="text-purple-600 dark:text-purple-400">Projetos</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="
              group relative rounded-3xl overflow-hidden
              border border-gray-300/30 dark:border-white/10
              bg-white/70 dark:bg-white/5
              backdrop-blur-xl
              transition-all duration-500 shadow-lg
              hover:border-purple-500/40
              hover:shadow-purple-500/20 hover:scale-[1.03]
            "
          >
            {/* Imagem */}
            <div className="relative w-full h-56 overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-zinc-400 bg-zinc-200 dark:bg-white/5">
                  Preview em breve
                </div>
              )}

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
              </div>

            {/* Overlay */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {project.problem}
              </p>

              {project.stack && project.stack.length > 0 && (  
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.stack.map((t: string, index: number) => (
                    <Badge
                      key={index}
                      className="
                        bg-purple-600/10 dark:bg-purple-600/20 
                        text-purple-700 dark:text-purple-300
                        border border-purple-600/20 dark:border-purple-400/30
                        hover:bg-purple-600/20 dark:hover:bg-purple-600/30
                        transition
                      "
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4 flex items-center gap-2 
                    text-purple-600 dark:text-purple-400 font-medium 
                    hover:text-purple-700 dark:hover:text-purple-300 
                    transition
                  "
                >
                  Ver projeto <ExternalLink size={18} />
                </a>
              )}
            </div>

            {/* Glow */}
            <div
              className="
                absolute inset-0 pointer-events-none opacity-0
                group-hover:opacity-100 transition duration-700
                bg-linear-to-br
                from-purple-500/10 via-blue-500/10 to-transparent
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
