import { IconArtboard, IconHome2, IconUsers } from '@tabler/icons-react'

const navigationData = [
  {
    label: 'Beranda',
    href: '/',
    icon: <IconHome2 />
  },
  {
    label: 'Kompetisi',
    href: '/competition',
    icon: <IconArtboard />,
    subMenu: [
      {
        label: 'UI-UX Competition',
        href: '/competition/duc'
      },
      {
        label: 'Logic Competition',
        href: '/competition/dlc'
      }
    ]
  },
  {
    label: 'Seminar',
    href: '/seminar',
    icon: <IconUsers />
  }
]

export type NavigationDataType = typeof navigationData

export default navigationData
