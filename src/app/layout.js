import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['latin'] , weight: '400'})

export const metadata = {
  title: 'Cryptito',
  description: 'The Fastest Way To Follow The CRypto Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
