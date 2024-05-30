import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'

export default function Duc() {
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
              src={'/assets/images/hero-duc.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
          </div>
          <div className='flex flex-col items-center gap-11'>
            <p className='text-white text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              UI/UX adalah salah satu cabang lomba dari serangkaian kegiatan ANFORCOM 2023 yang dapat diikuti oleh SLTA
              sederajat dan mahasiswa se-Indonesia. Kegiatan ini berupa kompetisi desain antarmuka sistem/produk yang
              berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.
            </p>
            <div className='flex gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar DUC
                </Button>
              </Link>
              <Link href='https://bit.ly/RulebookDUC2023' target='_blank'>
                <Button color='primary' variant='outline'>
                  Rulebook
                </Button>
              </Link>
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

        <section className='container relative flex flex-col items-center gap-12' id='prize'>
          <TitleBox>Hadiah</TitleBox>
          <div className='flex flex-row gap-12 items-end h-[475px]'>
            <div className=' self-start flex flex-col items-center gap-16'>
              <Image src={'/assets/images/juara1.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-white text-2xl font-bold font-serif tracking-[0.48px]'>Juara 1</h3>
                <p className='text-white text-2xl font-sans tracking-[0.48px]'>Rp. 3.000.000</p>
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
          <ContactBox name='Resma' number='0856 0174 1347' />
        </section>
      </main>
    </>
  )
}
