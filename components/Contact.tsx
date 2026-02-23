"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { sendContact } from "@/app/actions/sendContact";
import { useState } from "react";

export default function ContactSection() {

  const [status, setStatus] = useState<null | "loading" | "success" | "error">(null);

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-16"
      >
        Entre em <span className="text-purple-500">Contato</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* --- INFO DE CONTATO --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative p-8 rounded-3xl backdrop-blur-xl transition
            bg-white/60 dark:bg-white/5
            border border-black/10 dark:border-white/10
            shadow-xl hover:shadow-purple-500/20
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-br 
            from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 opacity-50" 
          />

          <div className="relative flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-purple-500">
              Vamos conversar!
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Entre em contato comigo para projetos, parcerias ou oportunidades.
            </p>

            {/* EMAIL */}
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
              <Mail className="text-purple-500" />
              <a
                href="mailto:luizbarcelar2014@gmail.com"
                className="hover:text-purple-600 dark:hover:text-purple-300 transition"
              >
                luizbarcelar2014@gmail.com
              </a>
            </div>

            {/* TELEFONE */}
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
              <Phone className="text-purple-500" />
              <span>(61) 9 9510-6609</span>
            </div>

            {/* LOCAL */}
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
              <MapPin className="text-purple-500" />
              <span>Brasília — DF</span>
            </div>
          </div>
        </motion.div>

        {/* --- FORMULÁRIO --- */}
        <motion.form
          action={async (formData) => {
            setStatus("loading");

            const res = await sendContact(formData);

            if (!res?.success) {
              setStatus("error");
              return;
            }

            setStatus("success");
            window.location.href = res.mailto!;
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative p-8 rounded-3xl backdrop-blur-xl transition
            bg-white/60 dark:bg-white/5
            border border-black/10 dark:border-white/10
            shadow-xl hover:shadow-purple-500/20
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-br 
            from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 opacity-50" 
          />

          <div className="relative flex flex-col gap-6">

            {/* NOME */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 dark:text-gray-200 text-sm">
                Seu nome
              </label>
              <input
                name="name"
                type="text"
                className="
                  w-full rounded-xl px-4 py-3 transition
                  bg-gray-200/60 text-gray-800 placeholder-gray-500
                  dark:bg-black/20 dark:text-gray-200 dark:placeholder-gray-400
                  border border-black/10 dark:border-white/20
                  focus:outline-none focus:border-purple-500
                "
                placeholder="Digite seu nome..."
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 dark:text-gray-200 text-sm">
                Seu email
              </label>
              <input
                name="email"
                type="email"
                className="
                  w-full rounded-xl px-4 py-3 transition
                  bg-gray-200/60 text-gray-800 placeholder-gray-500
                  dark:bg-black/20 dark:text-gray-200 dark:placeholder-gray-400
                  border border-black/10 dark:border-white/20
                  focus:outline-none focus:border-purple-500
                "
                placeholder="Digite seu email..."
              />
            </div>

            {/* MENSAGEM */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 dark:text-gray-200 text-sm">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                className="
                  w-full rounded-xl px-4 py-3 transition resize-none
                  bg-gray-200/60 text-gray-800 placeholder-gray-500
                  dark:bg-black/20 dark:text-gray-200 dark:placeholder-gray-400
                  border border-black/10 dark:border-white/20
                  focus:outline-none focus:border-purple-500
                "
                placeholder="Escreva sua mensagem..."
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                flex items-center justify-center gap-2 w-full 
                bg-purple-600 hover:bg-purple-700 
                text-white px-6 py-3 rounded-xl font-medium 
                transition shadow-lg shadow-purple-600/20
                disabled:opacity-50
              "
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              <Send size={18} />
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                Abrindo seu email...
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Preencha todos os campos.
              </p>
            )}

          </div>
        </motion.form>
      </div>
    </section>
  );
}
