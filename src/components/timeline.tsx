import Image from 'next/image'
import { isDatePast } from '@/utils/check-date'
import { formatDate } from '@/utils/format-date'
import { ITimelineData } from '@/constants/timeline-data'
import { IconCheck } from '@tabler/icons-react'

type ITimelinePointProps = {
  isLast?: boolean
  data: ITimelineData[0]
}

type ITimelineProps = {
  data: ITimelineData
}

export function TimelinePoint({ data, isLast }: ITimelinePointProps) {
  const startIsPassed = isDatePast(data.startDate)
  const endIsPassed = isDatePast(data.endDate ? data.endDate : data.startDate)

  const pass = startIsPassed
    ? '/assets/images/rounded-star-checked-green.svg'
    : '/assets/images/rounded-star-checked-pinky.svg'
  const line = startIsPassed ? '/assets/images/stripe-green.svg' : '/assets/images/stripe-pinky.svg'

  return (
    <div className='flex-none'>
      <div className='flex relative items-start'>
        <div className='relative flex flex-col items-center gap-2'>
          <div className='relative'>
            <Image src={pass} alt='' width={142} height={142} />
            {endIsPassed ? (
              <IconCheck className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
            ) : (
              <>{data.icon}</>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <p className='font-bold text-base md:text-xl text-white font-serif text-center'>{data.title}</p>
            <p className='font-sans text-sm md:text-base text-white text-center'>
              {formatDate(data.startDate)}
              {data.endDate && ` - ${formatDate(data.endDate)}`}
            </p>
          </div>
        </div>
        {!isLast && <Image className=' py-[64px] rotate-0 relative' src={line} alt='' height={11} width={142} />}
      </div>
    </div>
  )
}

export function Timeline({ data }: ITimelineProps) {
  return (
    <div className='flex relative border-cpurple-4 border-4 rounded-[42px] px-2 py-4 md:px-4 md:py-8'>
      <div className='h-auto w-20 bg-gradient-to-r from-cpurple-5 to-transparent z-10 absolute left-2 md:left-4 top-4 bottom-4' />
      <div className='h-auto w-20 bg-gradient-to-l from-cpurple-5 to-transparent z-10 absolute right-2 md:right-4 top-4 bottom-4' />
      <div className='flex overflow-x-scroll scrollbar-thin scroll-smooth px-8'>
        {data.map((item, index) => (
          <TimelinePoint key={index} data={item} isLast={index === data.length - 1} />
        ))}
      </div>
    </div>
  )
}
