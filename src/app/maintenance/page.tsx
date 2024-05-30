import Image from 'next/image'

export default function Maintenance() {
  return (
    <main className='flex min-h-screen h-full flex-col items-center justify-center px-24 overflow-hidden'>
      <div className='relative flex'>
        <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10' />
        <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10' />
      </div>

      <section className='relative flex flex-col items-center justify-center backdrop-blur-[500px]'>
        <div className='w-[100vw] h-[100vw] bg-secondary2 blur-[363.5px] rounded-full -right-[350%] -top-[470%] absolute -z-10'></div>
        <div className='w-[80vw] h-[80vw] bg-secondary2 blur-[363.5px] rounded-full -left-[320%] -top-[420%] absolute -z-10'></div>

        <div className='mb-14 z-10'>
          <Image src={'/assets/images/maintenance-icon.svg'} alt='maintenance-icon' width={300} height={300} />
        </div>
        <div className='flex flex-col relative w-full gap-3'>
          <p className='text-cgray-0 text-2xl font-bold font-serif text-center'>We&apos;re Under Maintenance</p>
          <p className='text-cgray-0 text-2xl font-light font-serif text-center'>
            The page you&apos;re looking for is currently <br /> under maintenance and will back soon
          </p>
        </div>
      </section>
    </main>
  )
}
