'use client'

import PageTransition from '@/components/page-transtition'
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'

export default function FramerProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)} mode='wait'>
        <PageTransition>{children}</PageTransition>
      </AnimatePresence>
    </LazyMotion>
  )
}
