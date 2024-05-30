import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'

export default function Event() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center px-7 py-16 overflow-hidden gap-16 md:gap-32'>
        <div className='relative flex'>
          <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10' />
          <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10' />
        </div>

        <section className='container flex relative flex-col items-center w-full my-10 gap-5' id='hero'>
          <div>
            <Image
              className='translate-x-[1.5vw] block md:hidden'
              src={'/assets/images/mobile-hero-seminar.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
            <Image
              className='translate-x-[1.5vw] hidden md:block'
              src={'/assets/images/desktop-hero-seminar.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
          </div>
          <div className='flex flex-col items-center gap-11'>
            <p className='text-white text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-6'>
              <Link href='' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar Seminar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className='container max-w-[983px] p-0 relative flex flex-col items-center' id='speaker'>
          <div className='flex flex-col md:flex-row items-center gap-10 md:gap-16'>
            <Image src={'/assets/images/speaker1.png'} alt='' height={500} width={500} />

            <div className='flex flex-col gap-2 md:gap-6 w-full'>
              <h3 className='text-white font-serif text-xl md:text-[2rem] tracking-[0.64px]'>Seminar 1</h3>
              <h1 className='text-white font-serif text-3xl md:text-5xl font-bold tracking-[0.96px]'>
                Artificial Intelligence: Pros, Cons, and Where It All Started
              </h1>
              <div>
                <p className='text-white font-sans text-base md:text-2xl font-bold tracking-[0.48px]'>
                  Cahyo Adhi Hartanto
                </p>
                <p className='text-white font-sans text-base md:text-2xl tracking-[0.48px]'>
                  Artificial Intelligence Engineer / Data Scientist PT Bank Syariah Indonesia Tbk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='container relative flex flex-col items-center gap-12' id='countdown'>
          <TitleBox>Hitung Mundur</TitleBox>
          <Countdown date={'2023-09-30T00:00:00+07:00'} />
          <Link href='https://dashboard.anforcom.com' target='_blank'>
            <Button>Daftar Sekarang</Button>
          </Link>
        </section>

        <section className='relative w-[750%]' id='highlight'>
          <Highlight />
        </section>

        <section className='relative flex flex-col items-center gap-16' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Reihan' number='0858 6518 6206' />
        </section>
      </main>
    </>
  )
}
