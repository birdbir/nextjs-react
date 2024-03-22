import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/conponets/navbar/Navbar'
import Footer from '@/conponets/footer/Footer'
import ClientSideProviderTest from '@/conponets/clientSideProviderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:"Nextjs 14 Homepage",
    template:"%s | Nextjs 14"
  },
  description:"Nextjs-react description"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}