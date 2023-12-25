import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Pousada Cordel',
    default: 'Pousada Cordel - Itaúnas, Espírito Santo, Brasil',
  },
  description:
    'A Pousada Cordel, em Itaúnas, oferece uma experiência encantadora, com aconchego e decoração inspirada na cultura local. Localizada em meio às belezas naturais da região, convida os hóspedes a explorarem a vila e suas praias.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
