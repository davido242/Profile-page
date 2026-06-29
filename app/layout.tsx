import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import IOSInstallHint from '@/components/IOSInstallHint'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#821186',
}

export const metadata: Metadata = {
  title: 'OnlineMD Ent. | Monday David Sarka | Frontend Developer',
  description:
    'Personal portfolio of Monday David Sarka, a Front-End Engineer based in Abuja, Nigeria. Explore his works, contact info, and social media.',
  keywords:
    'Monday David Sarka, Front-End Engineer, AI Engineer, web developer, portfolio, Abuja, Nigeria, OnlineMD',
  authors: [{ name: 'Monday David Sarka' }],
  icons: {
    icon: '/images/favicon.png',
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'OnlineMD',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Monday David Sarka | Front-End Engineer | Front-end Developer',
    description:
      'Explore the portfolio and projects of Monday David Sarka, a skilled Front-End Engineer from Abuja.',
    images: [
      {
        url: 'https://onlinemd.netlify.app/images/OnlineMD_Enterprise.png',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://onlinemd.netlify.app',
    siteName: 'OnlineMD Ent.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <IOSInstallHint />
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/6811568400e88619103f2148/1iq1rjtin';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
