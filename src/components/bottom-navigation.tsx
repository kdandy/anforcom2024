'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'
import { Button } from './ui'

type BottomNavigationItemProps = {
  data: {
    label: string
    href: string
    icon: React.ReactNode
    subMenu?: {
      label: string
      href: string
      icon: React.ReactNode
    }[]
  }
}

type BottomNavigationProps = {
  links: {
    label: string
    href: string
    icon: React.ReactNode
  }[]
}

const BottomNavigation = ({ links }: BottomNavigationProps) => {
  return (
    <div>
      <div className='font-sans fixed bottom-0 left-0 right-0 flex max-h-20 w-full justify-around border-t border-t-cpurple-7 bg-cpurple-6 p-2 z-50'>
        {links.map((link) => {
          return <BottomNavigationItem data={link} key={link.href} />
        })}
      </div>
    </div>
  )
}

const BottomNavigationItem = ({ data }: BottomNavigationItemProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const parts = pathname.split('/')
  const newPath = '/' + parts[1]
  const isActive = newPath === data.href ? 'bg-cpurple-4 text-white' : 'text-neutral-400'

  return data.subMenu ? (
    <Popover>
      <PopoverTrigger className='flex flex-1'>
        <div
          className={`${isActive} flex flex-1 flex-grow cursor-pointer flex-col items-center gap-1 rounded-xl p-2 px-4 py-2 transition-all duration-150`}
        >
          <div>{data.icon}</div>
          <span className='text-xs'>{data.label}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className=' border-none rounded-3xl p-2 backdrop-blur-lg bg-cpurple-4 bg-opacity-25'>
        <div className='flex flex-col gap-2'>
          {data.subMenu.map((subLink) => (
            <Link href={subLink.href} key={subLink.href} className='flex'>
              <Button
                variant='subtle'
                className='flex-1 items-center justify-center hover:bg-cpurple-4 rounded-full p-2 !no-underline'
              >
                {subLink.label}
              </Button>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <div
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => router.push(data.href)}
      className={`${isActive} flex flex-1 flex-grow cursor-pointer flex-col items-center gap-1 rounded-xl p-2 px-4 py-2 transition-all duration-150`}
    >
      <div>{data.icon}</div>
      <span className='text-xs'>{data.label}</span>
    </div>
  )
}

export default BottomNavigation
