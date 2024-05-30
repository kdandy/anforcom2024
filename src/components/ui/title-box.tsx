import { ReactNode } from 'react'
import Image from 'next/image'

type BoxProps = {
  children: ReactNode
}

export default function TitleBox({ children }: BoxProps) {
  return (
    <div className='relative'>
      <Image
        className='absolute w-[27px] -top-[1.1rem] left-4
                        md:w-[37px] md:-top-[1.6rem] md:left-6 
                        lg:w-[47px] lg:-top-[1.95rem] lg:left-8'
        src={'/assets/images/star-pinky.svg'}
        alt=''
        width={47}
        height={47}
      />

      <p
        className='py-[9.5px] text-secondary1 text-base font-serif font-extrabold tracking-[0.617px] bg-white rounded-full px-4 
                    md:text-xl md:px-6
                    lg:text-3xl lg:px-7'
      >
        {children}
      </p>

      <Image
        className='absolute w-[18px] -bottom-[0.8rem] right-[1.1rem]
                        md:w-[25px] md:-bottom-[1.2rem] md:right-6
                        lg:w-[35px] lg:-bottom-[1.65rem] lg:right-8'
        src={'/assets/images/star-yellow.svg'}
        alt=''
        width={35}
        height={35}
      />
    </div>
  )
}
