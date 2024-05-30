import Image from 'next/image'

type ContactBoxProps = {
  name: string
  number: string
}

export default function ContactBox({ name, number }: ContactBoxProps) {
  return (
    <div className='relative'>
      <div className='translate-x-[10%] bg-white rounded-full py-4 pr-10 md:pr-20 pl-28 flex flex-col leading-none gap-1 md:gap-[15px]'>
        <Image
          className='absolute top-0 bottom-0 m-auto -left-[22.5%]'
          src={'/assets/images/rounded-star-wa.svg'}
          alt=''
          width={180}
          height={180}
        />
        <p className='text-xl md:text-[2rem] font-serif text-[#1C1259] tracking-[0.04rem]'>{name}</p>
        <p className='font-extrabold text-2xl md:text-[2.5rem] font-serif text-[#1C1259] tracking-[0.05rem]'>
          {number}
        </p>
      </div>
    </div>
  )
}
