import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Monday David Sarka | Frontend Developer',
    short_name: 'OnlineMD',
    description:
      'Personal portfolio of Monday David Sarka, a Front-End Engineer based in Abuja, Nigeria.',
    start_url: '/',
    display: 'standalone',
    background_color: '#3b1e32',
    theme_color: '#821186',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
