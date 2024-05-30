import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'

export default function Dlc() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center px-7 py-16 overflow-hidden gap-28'>
        <div className='relative flex'>
          <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10' />
          <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10' />
        </div>

        <section className='container flex relative flex-col items-center w-full my-10 gap-5' id='hero'>
          <div>
            <Image
              className='translate-x-[1.5vw]'
              src={'/assets/images/hero-dlc.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
          </div>
          <div className='flex flex-col items-center gap-11'>
            <p className='text-white text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              (DLC) adalah salah satu cabang lomba dari serangkaian kegiatan ANFORCOM 2023 yang dapat diikuti oleh SLTA
              sederajat. Kegiatan ini bertujuan untuk mengasah kemampuan berpikir logis dan kemampuan problem solving
              secara kompetitif. Kompetisi ini terdiri dari 2 tahap, yaitu tahap penyisihan berupa cerdas cermat dan
              tahap final berupa Rally Games dan Competitive Programming.
            </p>
            <div className='flex gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar DLC
                </Button>
              </Link>
              <Link
                href='https://drive.google.com/file/d/19odZRy3oxFvKA6bwFYi3YAMBPqFCCCxg/view?usp=sharing'
                target='_blank'
              >
                <Button color='primary' variant='outline'>
                  Rulebook
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className='container relative flex flex-col items-center gap-12' id='countdown'>
          <TitleBox>Hitung Mundur</TitleBox>
          <div className='flex flex-col md:flex-row gap-14 mt-6'>
            <Countdown date={'2023-09-30T00:00:00+07:00'} />
          </div>
          <Link href='https://dashboard.anforcom.com' target='_blank'>
            <Button>Daftar Sekarang</Button>
          </Link>
        </section>

        <section className='container relative flex flex-col items-center gap-12' id='prize'>
          <TitleBox>Hadiah</TitleBox>
          <div className='flex flex-row gap-12 items-end h-[475px]'>
            <div className=' self-start flex flex-col items-center gap-16'>
              <Image src={'/assets/images/juara1.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-white text-2xl font-bold font-serif tracking-[0.48px]'>Juara 1</h3>
                <p className='text-white text-2xl font-sans tracking-[0.48px]'>Rp. 3.000.000</p>
                <p className='text-[#FAC000] text-2xl font-sans tracking-[0.48px]'>
                  {' '}
                  <span className='text-white'>+</span> Golden Pass
                </p>
                <p className='text-[#FAC000] text-2xl font-sans tracking-[0.48px]'>Informatika Undip</p>
              </div>
            </div>
            <div className='order-first flex flex-col items-center gap-16'>
              <Image src={'/assets/images/juara2.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-white text-2xl font-bold font-serif tracking-[0.48px]'>Juara 2</h3>
                <p className='text-white text-2xl font-sans tracking-[0.48px]'>Rp. 2.000.000</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-16'>
              <Image src={'/assets/images/juara3.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-white text-2xl font-bold font-serif tracking-[0.48px]'>Juara 3</h3>
                <p className='text-white text-2xl font-sans tracking-[0.48px]'>Rp. 1.000.000</p>
              </div>
            </div>
          </div>
        </section>

        <section className='relative w-[750%]' id='highlight'>
          <Highlight />
        </section>

        <section className='container relative flex flex-col items-center gap-16' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Husain' number='0888 2551 944' />
        </section>
      </main>
    </>
  )
}
