import { Sora as FontSerif } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSerif = FontSerif({ subsets: ['latin'], variable: '--font-serif' })

export const fontSans = localFont({
  src: '../assets/fonts/InstrumentSans.ttf',
  variable: '--font-sans'
})
