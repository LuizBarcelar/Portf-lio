"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full mt-32 border-t 
        bg-white text-zinc-700 
        dark:bg-black dark:text-zinc-400
        border-zinc-300 dark:border-white/10
      "
    >
      {/* Glow apenas no dark */}
      <div
        className="absolute w-full h-24 bg-linear-to-t 
          from-black to-transparent 
          dark:block hidden pointer-events-none"
      ></div>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12 relative">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-black dark:text-white tracking-tight">
              Luiz Barcelar
            </h2>

            <p className="text-zinc-600 dark:text-zinc-500 mt-1 text-sm">
              Desenvolvedor Full Stack & Front-End
            </p>

            <p className="text-zinc-600 dark:text-zinc-500 mt-2 text-sm max-w-md">
              Construindo interfaces performáticas e aplicações modernas
              com foco em experiência, escalabilidade e resultado.
            </p>

            <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-3 max-w-md">
              Foco em aplicações escaláveis com alta performance,
              experiência fluida e arquitetura orientada a resultado
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-sm font-medium">
            <Link
              href="#home"
              className="hover:text-black dark:hover:text-white transition"
            >
              Início
            </Link>
            <Link
              href="#about"
              className="hover:text-black dark:hover:text-white transition"
            >
              Sobre
            </Link>
            <Link
              href="#projects"
              className="hover:text-black dark:hover:text-white transition"
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="hover:text-black dark:hover:text-white transition"
            >
              Contato
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div
          className="
            w-full h-px 
            bg-linear-to-r from-transparent via-zinc-300 to-transparent
            dark:bg-linear-to-r dark:from-transparent dark:via-white/20 dark:to-transparent
          "
        ></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-500">
            Disponível para novos projetos e oportunidades.
          </p>

          <Link
            href="#contact"
            className="text-sm font-medium text-purple-500 hover:text-purple-400 transition inline-flex items-center gap-1 group"
          >
            Vamos conversar
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </Link>
        </div>


        {/* Social icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/LuizBarcelar"
            target="_blank"
            className="group"
          >
            <Github
              size={22}
              className="text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/luiz-barcelar-a73a91331/"
            target="_blank"
            className="group"
          >
            <Linkedin
              size={22}
              className="text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition"
            />
          </a>

          <a
            href="https://wa.me/5561995106609"
            target="_blank"
            className="group"
          >
            <FaWhatsapp
              size={22}
              className="text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition"
            />
          </a>

          <a href="mailto:luizbarcelar2014@gmail.com" className="group">
            <Mail
              size={22}
              className="text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition"
            />
          </a>
        </div>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-600">
          Construído com Next.js · React · TypeScript · Tailwind · NestJS
        </p>

        {/* Copyright */}
        <p className="text-xs text-zinc-600 dark:text-zinc-500">
          © {new Date().getFullYear()} Luiz Barcelar. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
