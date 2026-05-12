import Link from 'next/link'
import { Calculator } from 'lucide-react'

interface FooterProps {
  locale: string
}

const content = {
  en: {
    tagline: 'Free financial calculators for Bangladesh.',
    calculators: 'Calculators',
    links: [
      { label: 'EMI Calculator', href: '/en/emi-calculator' },
      { label: 'Mortgage Calculator', href: '/en/mortgage-calculator' },
      { label: 'Loan Calculator', href: '/en/loan-calculator' },
      { label: 'Tax Calculator', href: '/en/tax-calculator' },
    ],
    info: [
      { label: 'About', href: '/en/about' },
      { label: 'Contact', href: '/en/contact' },
      { label: 'Privacy Policy', href: '/en/privacy' },
    ],
    disclaimer:
      'Results are for guidance only. Consult a financial professional before making any financial decision.',
    copyright: '© 2025 RinnHisab. Free for everyone.',
  },
  bn: {
    tagline: 'বাংলাদেশের জন্য বিনামূল্যে আর্থিক ক্যালকুলেটর।',
    calculators: 'ক্যালকুলেটর',
    links: [
      { label: 'কিস্তি ক্যালকুলেটর', href: '/bn/emi-calculator' },
      { label: 'গৃহঋণ ক্যালকুলেটর', href: '/bn/mortgage-calculator' },
      { label: 'ঋণ ক্যালকুলেটর', href: '/bn/loan-calculator' },
      { label: 'কর ক্যালকুলেটর', href: '/bn/tax-calculator' },
    ],
    info: [
      { label: 'আমাদের সম্পর্কে', href: '/bn/about' },
      { label: 'যোগাযোগ', href: '/bn/contact' },
      { label: 'গোপনীয়তা নীতি', href: '/bn/privacy' },
    ],
    disclaimer:
      'ফলাফল শুধুমাত্র গাইডেন্সের জন্য। যেকোনো আর্থিক সিদ্ধান্ত নেওয়ার আগে একজন আর্থিক বিশেষজ্ঞের পরামর্শ নিন।',
    copyright: '© ২০২৫ ঋণহিসাব। সবার জন্য বিনামূল্যে।',
  },
}

export default function Footer({ locale }: FooterProps) {
  const t = content[locale as keyof typeof content] ?? content.en
  const isBn = locale === 'bn'

  return (
    <footer
      className="mt-20 w-full border-t"
      style={{ borderColor: 'oklch(1 0 0 / 0.08)' }}
    >
      <div className="container py-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'oklch(0.72 0.19 145 / 0.15)' }}
              >
                <Calculator
                  size={16}
                  style={{ color: 'oklch(0.72 0.19 145)' }}
                />
              </div>
              <span className="text-sm font-semibold text-white">
                {isBn ? 'ঋণহিসাব' : 'RinnHisab'}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-white/50">{t.tagline}</p>
          </div>

          {/* Calculators */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-white/30 uppercase">
              {t.calculators}
            </p>
            <ul className="flex flex-col gap-2">
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-white/30 uppercase">
              Info
            </p>
            <ul className="flex flex-col gap-2">
              {t.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-10 rounded-lg p-4"
          style={{ backgroundColor: 'oklch(0.72 0.19 145 / 0.06)' }}
        >
          <p className="text-xs leading-relaxed text-white/40">
            ⚠ {t.disclaimer}
          </p>
        </div>

        {/* Bottom */}
        <div
          className="mt-6 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: 'oklch(1 0 0 / 0.06)' }}
        >
          <p className="text-xs text-white/30">{t.copyright}</p>
          <p className="text-xs text-white/20">
            {isBn
              ? 'বাংলাদেশের মানুষের জন্য তৈরি'
              : 'Built for the people of Bangladesh'}
          </p>
        </div>
      </div>
    </footer>
  )
}
