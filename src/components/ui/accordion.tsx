'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 text-start justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none bg-cpurple-6 text-white text-md md:text-xl font-bold font-serif p-6 rounded-3xl',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white font-sans rounded-b-3xl bg-cpurple-6 data-[state=open]:border-t-4 data-[state=open]:border-cpurple-5',
      className
    )}
    {...props}
  >
    <div className='p-6 text-sm md:text-base text-gray-200'>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
