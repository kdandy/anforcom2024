import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='relative pb-[128px] md:pb-24 py-0 overflow-hidden'>
      <div className='container flex w-full justify-center'>
        <div className='flex flex-col w-full max-w-[983px] h-max rounded-[42px] border-4 border-cpurple-4'>
          <div className='bg-secondary1 rounded-t-[40px] pt-[46px] pb-8 px-10 flex flex-col gap-8 border-b-4 border-b-cpurple-4'>
            <Image src={'/assets/images/anforcom-vector.svg'} alt='' height={32} width={32} />
            <p className='font-sans text-white text-sm md:text-base'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex text-primary font-serif gap-6 flex-col md:flex-row text-sm md:text-base'>
              <Link className='underline-offset-[7px] hover:underline' href='https://www.instagram.com/anforcom/'>
                Instagram
              </Link>
              <Link className='underline-offset-[7px] hover:underline' href='https://twitter.com/Anforcom'>
                Twitter
              </Link>
              {/* <Link className='underline-offset-[7px] hover:underline' href='https://www.facebook.com/'>
                Facebook
              </Link> */}
              {/* <Link className='underline-offset-[7px] hover:underline' href='https://www.github.com/'>
                Github
              </Link> */}
              <Link className='underline-offset-[7px] hover:underline' href='https://www.youtube.com/@anforcom3831'>
                YouTube
              </Link>
            </div>
          </div>
          <div className='bg-secondary1 rounded-b-[40px] pt-[26px] pb-[30px] px-10 flex gap-4 items-center'>
            <Image src={'/assets/images/angkasa-juang.svg'} alt='' height={39} width={24} />
            <div className='flex flex-col md:flex-row gap-1'>
              <p className='font-sans text-white text-xs md:text-sm'>&#169; 2024</p>
              <p className='font-sans text-white text-xs md:text-sm'>
                Himpunan Mahasiswa Informatika Universitas Diponegoro
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-[125%] bg-[#120C3B] blur-[65px] rounded-t-[50%] -bottom-[42.5%] absolute -z-10' />
    </footer>
  )
}
