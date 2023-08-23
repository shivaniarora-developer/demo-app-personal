import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
     
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content="Name of your web site" />
  <meta name="author" content="Marketify" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  <title>Elisc</title>
 <link
    href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    rel="stylesheet"
  />
 <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
    />
<link
    href="https://fonts.googleapis.com/css2?family=Kristi&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" type="text/css" href="/css/plugins.css"/>
  <link rel="stylesheet" type="text/css" href="/css/style.css"/>

  <Script src="/js/jquery.js" defer/>
        <Script  src="/js/ie8.js" defer/>
        <Script src="/js/plugins.js" defer/>
        <Script src="/js/init.js" defer/> 
  </head>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}