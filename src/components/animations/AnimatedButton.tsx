'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  as?: 'button' | 'a' | 'div'
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className = '',
  href,
  onClick,
  as = 'button',
  disabled = false,
}: AnimatedButtonProps) {
  const Component = motion[as]

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <Component
      className={className}
      href={href}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
    >
      {children}
    </Component>
  )
}