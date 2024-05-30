import Image from 'next/image'

export default function Highlight() {
  return (
    <div className='relative flex flex-col gap-4 items-center'>
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover bg-blue-600/30 backdrop-brightness-75'
          src={'/assets/images/highlight-1.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-2.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-3.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-4.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-5.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-6.jpg'}
          alt=''
          width={640}
          height={640}
        />
      </div>

      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-7.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-8.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-9.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-10.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight-11.jpg'}
          alt=''
          width={640}
          height={640}
        />
      </div>
    </div>
  )
}
