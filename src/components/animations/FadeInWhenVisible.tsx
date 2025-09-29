'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInWhenVisibleProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: FadeInWhenVisibleProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut" as const,
      }}
    >
      {children}
    </motion.div>
  )
}