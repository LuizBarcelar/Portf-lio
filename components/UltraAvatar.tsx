"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useScroll } from "framer-motion";

export default function UltraAvatar3D() {
  // Movimento baseado no mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) / 25;
      const moveY = (e.clientY - innerHeight / 2) / 25;

      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const rotateX = useTransform(y, [ -20, 20 ], [ 20, -20 ]);
  const rotateY = useTransform(x, [ -20, 20 ], [ -20, 20 ]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 0.9]);
  const glowScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.12]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 50 }}
      className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000"
    >
      {/* CAMADA 3D — FUNDO HOLOGRÁFICO */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-600/40 via-blue-500/40 to-cyan-400/40 blur-2xl"
        style={{
          x: useTransform(x, v => v / 3),
          y: useTransform(y, v => v / 3),
        }}
      />

      {/* CAMADA GLASS FUTURISTA */}
      <motion.div
        style={{
          x: useTransform(x, v => v / 6),
          y: useTransform(y, v => v / 6),
        }}
        className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden"
      >
        {/* FOTO */}
        <motion.img
          src="/Avatar.jpg"
          alt="Foto 3D Premium"
          style={{
            scale: useTransform(x, v => 1 + Math.abs(v) / 100),
          }}
          className="w-full h-full object-cover"
        />

        {/* REFLEXO 3D */}
        <motion.div
          style={{
            x: useTransform(x, v => v / 8),
          }}
          className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent mix-blend-screen pointer-events-none"
        />
      </motion.div>

      {/* BORDA DE LUZ ANIMADA */}
      <motion.div
        style={{
          opacity: glowOpacity,
          scale: glowScale,
        }}
        className="absolute inset-0 rounded-3xl border-2 border-purple-400/60 shadow-[0_0_60px_rgba(168,85,247,0.9)]"
      />

      {/* ANÉIS ORBITAIS 3D */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 rounded-full border-t-4 border-purple-400/30 blur-md"
      />
    </motion.div>
  );
}
