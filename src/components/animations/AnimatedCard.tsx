'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
}: AnimatedCardProps) {
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{
        once: true,
        margin: '-50px',
      }}
    >
      {children}
    </motion.div>
  )
}