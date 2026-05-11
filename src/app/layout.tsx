import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
  preload: false,
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'RinnHisab — Free Loan & Tax Calculators for Bangladesh',
    template: '%s | RinnHisab',
  },
  description:
    'Free EMI, mortgage, loan and tax calculators for Bangladesh. Calculate your monthly installments instantly in Bengali and English.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  keywords: [
    'EMI calculator Bangladesh',
    'loan calculator Bangladesh',
    'mortgage calculator Bangladesh',
    'ঋণ হিসাব',
    'কিস্তি ক্যালকুলেটর',
  ],
  openGraph: {
    type: 'website',
    siteName: 'RinnHisab',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansBengali.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
