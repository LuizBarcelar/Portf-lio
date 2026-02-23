"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`rounded-2xl bg-linear-to-br from-zinc-900 to-zinc-800 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}
