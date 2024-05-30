'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import TitleBox from '@/components/ui/title-box'
import Highlight from '@/components/highlight'
import Countdown from '@/components/countdown'
import { Timeline } from '@/components/timeline'
import { timelineData } from '@/constants/timeline-data'
import { cn } from '@/lib/utils'
import { questionData } from '@/constants/questions-data'
import FaqAccordion from '@/components/faq-accordion'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center py-16 overflow-hidden gap-10 sm:gap-20 md:gap-32'>
        <div className='relative flex'>
          <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10' />
          <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10' />
        </div>

        <section
          className='container max-w-[983px] flex relative flex-col items-center w-full my-10 gap-2 md:gap-5'
          id='hero'
        >
          <div>
            <Image
              className='translate-x-[1.5vw] block md:hidden'
              src={'/assets/images/mobile-hero-home.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
            <Image
              className='translate-x-[1.5vw] hidden md:block'
              src={'/assets/images/desktop-hero-home.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
          </div>
          <div className='flex flex-col items-center gap-6 md:gap-11'>
            <p className='text-white text-center font-normal text-xs sm:text-sm md:text-base opacity-50 font-sans w-full md:w-2/3'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-4 md:gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar
                </Button>
              </Link>
              <Link href='#teaser'>
                <Button color='primary' variant='outline'>
                  Teaser
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          className='container max-w-[983px] relative flex flex-col items-center gap-6 sm:gap-8 md:gap-12'
          id='countdown'
        >
          <TitleBox>Menuju Puncak Acara</TitleBox>
          <Countdown date={'2023-09-30T00:00:00+07:00'} />
          <div className='flex flex-col gap-4  sm:gap-5 md:gap-6 items-center'>
            <Link href='https://dashboard.anforcom.com' target='_blank'>
              <Button>Daftar Sekarang</Button>
            </Link>
            <Link href='#regtutorial' className='text-primary font-sans hover:text-cyellow-7 underline'>
              Tutorial Pendaftaran
            </Link>
          </div>
        </section>

        <section className='container max-w-[983px] relative flex flex-col items-center gap-14' id='timeline'>
          <TitleBox>Linimasa</TitleBox>

          <div className='flex flex-col w-full justify-center lg:flex-row lg:gap-1'>
            <Timeline data={timelineData} />
          </div>
        </section>

        <section className='relative w-[750%]' id='highlight'>
          <Highlight />
        </section>

        <section className='relative w-full' id='teaser'>
          <div className='container max-w-[983px] w-full flex flex-col items-center gap-10 md:gap-20 '>
            <TitleBox>Video Teaser</TitleBox>
            <div className='relative bg-[#170F4A] rounded-3xl p-3 md:p-6 w-full aspect-video'>
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[56px] md:max-w-[96px] right-16 md:-top-10 -top-4'
                src={'/assets/images/flower-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -left-10 md:-top-10 -top-4'
                src={'/assets/images/star-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[50px] md:max-w-[84px] left-10 md:left-16 -bottom-4 md:-bottom-10'
                src={'/assets/images/flower-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -right-4 md:-right-9 -bottom-10'
                src={'/assets/images/star-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />

              <iframe
                id='ytplayer'
                className='rounded-lg'
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/7ReUxB037Rk'
                title='Anforcom Teaser'
                frameBorder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 absolute right-0 left-0 -z-10 -bottom-20 md:-bottom-50 lg:-bottom-36'>
            {[1, 2, 3, 4].map((_item, index) => (
              <div className='flex' key={index}>
                <span
                  className={cn(
                    'font-extrabold w-full font-sans text-[9.5vw] leading-5 md:leading-8 lg:leading-[64px] text-justify after:inline-block after:w-full after:content-[" "] text-[#676190]',
                    index % 2 ? 'opacity-30' : 'opacity-100'
                  )}
                >
                  TEASER ANFORCOM
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className='relative w-full' id='regtutorial'>
          <div className='container max-w-[983px] w-full flex flex-col items-center gap-10 md:gap-20 '>
            <TitleBox>Tutorial Pendaftaran</TitleBox>
            <div className='relative bg-[#170F4A] rounded-3xl p-3 md:p-6 w-full aspect-video'>
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[56px] md:max-w-[96px] right-16 md:-top-10 -top-4'
                src={'/assets/images/flower-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -left-10 md:-top-10 -top-4'
                src={'/assets/images/star-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[50px] md:max-w-[84px] left-10 md:left-16 -bottom-4 md:-bottom-10'
                src={'/assets/images/flower-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -right-4 md:-right-9 -bottom-10'
                src={'/assets/images/star-icons.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />

              <iframe
                id='ytplayer'
                className='rounded-lg'
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/Kp51sPjC7js'
                title='Tutorial Registrasi Anforcom 2023'
                frameBorder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section
          className='container max-w-[983px] relative flex flex-col items-center gap-10 md:gap-20 w-full mt-16 md:mt-0'
          id='faq'
        >
          <TitleBox>Pertanyaan Biasa Ditanyakan</TitleBox>
          <div className='flex flex-col w-full gap-6'>
            <FaqAccordion data={questionData} />
          </div>
        </section>
      </main>
    </>
  )
}
