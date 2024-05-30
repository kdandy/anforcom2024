import {
  IconBrandZoom,
  IconConfetti,
  IconFileDownload,
  IconPencil,
  IconTrophy,
  IconUsersGroup
} from '@tabler/icons-react'

export const timelineData = [
  {
    title: 'Registration Batch 1',
    startDate: '2023-07-18T00:00:00',
    endDate: '2023-08-06T00:00:00',
    icon: <IconPencil className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'UI/UX Proposal Submission',
    startDate: '2023-07-18T00:00:00',
    endDate: '2023-09-03T00:00:00',
    icon: <IconFileDownload className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'Registration Batch 2',
    startDate: '2023-08-08T00:00:00',
    endDate: '2023-08-29T00:00:00',
    icon: <IconPencil className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'DLC Preliminary Rounds',
    startDate: '2023-09-23T00:00:00',
    endDate: null,
    icon: <IconUsersGroup className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'Finalist Announcement',
    startDate: '2023-09-24T00:00:00',
    endDate: null,
    icon: <IconConfetti className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'Technical Meeting',
    startDate: '2023-09-26T00:00:00',
    endDate: null,
    icon: <IconBrandZoom className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  },
  {
    title: 'Final Day & Seminar',
    startDate: '2023-09-30T00:00:00',
    endDate: null,
    icon: <IconTrophy className='absolute right-0 left-0 m-auto z-10 top-0 bottom-0' color='#fff' size={70} />
  }
]

export type ITimelineData = typeof timelineData
