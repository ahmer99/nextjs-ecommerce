
import Header from './components/Header'
import './globals.css'


import { Poppins} from 'next/font/google'

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
