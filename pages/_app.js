import '../styles/global.css';

import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({   
weight: ['variable'],
style: ['normal', 'italic'],
subsets: ['latin'],
display: 'fallback',});

export default function App({ Component, pageProps }) {

  return (
    <main className={jetbrains.className}>
  <Component {...pageProps} />
  </main>
  )

  }