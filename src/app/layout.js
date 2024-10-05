import { Inter, Poppins } from 'next/font/google'
import  Navbar  from "@/components/navbar/navbar"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['latin'] , weight: '400'})

export const metadata = {
  title: 'Cryptito',
  description: 'The Fastest Way To Follow The Crypto Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='lg:mx-[200px] mx-[20px]'>
        <Navbar/>
        {children}
        </div>
        </body>
    </html>
  )
}
