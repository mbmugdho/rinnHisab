'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Calculator } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface HeaderProps {
  locale: string
}

const navLinks = {
  en: [
    { label: 'About', href: '/en/about' },
    { label: 'Contact', href: '/en/contact' },
  ],
  bn: [
    { label: 'আমাদের সম্পর্কে', href: '/bn/about' },
    { label: 'যোগাযোগ', href: '/bn/contact' },
  ],
}

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = navLinks[locale as keyof typeof navLinks] ?? navLinks.en
  const isBn = locale === 'bn'

  const toggleLocale = () => {
    const newLocale = isBn ? 'en' : 'bn'
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    return `/${newLocale}${pathWithoutLocale || ''}`
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: 'oklch(0.07 0 0 / 0.85)',
        borderColor: 'oklch(1 0 0 / 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 no-underline"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: 'oklch(0.72 0.19 145 / 0.15)' }}
            >
              <Calculator size={16} style={{ color: 'oklch(0.72 0.19 145)' }} />
            </div>
            <span className="text-sm font-semibold text-white">
              {isBn ? 'ঋণহিসাব' : 'RinnHisab'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm no-underline transition-colors',
                  pathname === link.href
                    ? 'bg-white/08 text-white'
                    : 'hover:bg-white/05 text-white/60 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <Link
              href={toggleLocale()}
              className="ml-2 rounded-md px-3 py-1.5 text-sm font-medium no-underline transition-colors"
              style={{
                color: 'oklch(0.72 0.19 145)',
                border: '1px solid oklch(0.72 0.19 145 / 0.30)',
              }}
            >
              {isBn ? 'EN' : 'বাং'}
            </Link>
          </nav>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Toggle Mobile */}
            <Link
              href={toggleLocale()}
              className="rounded-md px-2.5 py-1 text-xs font-medium no-underline"
              style={{
                color: 'oklch(0.72 0.19 145)',
                border: '1px solid oklch(0.72 0.19 145 / 0.30)',
              }}
            >
              {isBn ? 'EN' : 'বাং'}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md p-1.5 text-white/60 hover:text-white"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="flex flex-col gap-1 border-t py-3 md:hidden"
            style={{ borderColor: 'oklch(1 0 0 / 0.08)' }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2.5 text-sm no-underline transition-colors',
                  pathname === link.href
                    ? 'bg-white/08 text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
