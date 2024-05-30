'use client'

import { useCountdown } from '@/hooks/useCountdown'
import Image from 'next/image'

interface CountdownPointProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string | number
  unit: string
}

export function CountdownPoint({ time, unit, ...props }: CountdownPointProps) {
  return (
    <div
      className='relative w-full h-ful min-h-max min-w-max p-10 sm:p-12 md:p-14 flex flex-col place-content-center'
      {...props}
    >
      <Image
        src='/assets/images/rounded-star-purple.svg'
        width={128}
        height={128}
        alt='rounded-star'
        className='w-full h-full absolute left-1/2 -translate-x-1/2 -z-10'
      />
      <div className='h-full flex flex-col place-content-center w-[65px] sm:w-[75px] md:w-[85px]'>
        <p
          className='leading-none font-serif text-white text-center text-5xl sm:text-6xl md:text-[4rem] font-bold'
          suppressHydrationWarning
        >
          {time}
        </p>
        <p className='leading-none font-sans text-white text-center text-md sm:text-xl md:text-2xl relative'>{unit}</p>
      </div>
    </div>
  )
}

export default function Countdown({ date }: { date: string }) {
  const [days, hours, minutes, seconds] = useCountdown(date)

  if (days + hours + minutes + seconds <= 0) {
    return <div>Expired</div>
  } else {
    return (
      <div className='md:flex flex-col md:flex-row gap-2 sm:gap-6 md:gap-10 mt-6 grid grid-cols-2'>
        <CountdownPoint time={days} unit='Hari' />
        <CountdownPoint time={hours} unit='Jam' />
        <CountdownPoint time={minutes} unit='Menit' />
        <CountdownPoint time={seconds} unit='Detik' />
      </div>
    )
  }
}
