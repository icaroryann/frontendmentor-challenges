import './global.css'
import Header from './ui/page'
import { Inconsolata } from 'next/font/google'

export const metadata = {
  title: 'Frontend Mentor | Conference ticket generator',
  description: 'Conference ticket generator',
}

const inconsolata = Inconsolata({ subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} text-white flex flex-col items-center`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
