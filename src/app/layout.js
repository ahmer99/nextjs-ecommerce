
import Head from 'next/head';
import Header from './components/Header'
import './globals.css'


import { Poppins} from 'next/font/google'

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'AHMER FILIX',
  description: 'ITS NEXT APP CREATED MUHAMMAD AHMER',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  <link rel="icon" href="/ahmerflixLogo.png" type="image/png" /> {/* Update the href value with the path to your favicon file */}
</Head>
      <body className={roboto.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
