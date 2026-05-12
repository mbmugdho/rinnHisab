'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { Calculator, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

type Locale = 'en' | 'bn'

interface HeaderProps {
  locale: string
}

const content = {
  en: {
    brand: 'RinnHisab',
    subtitle: 'For Bangladesh',
    links: [
      { label: 'About', href: '/en/about' },
      { label: 'Contact', href: '/en/contact' },
    ],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  bn: {
    brand: 'ঋণহিসাব',
    subtitle: 'বাংলাদেশের জন্য',
    links: [
      { label: 'আমাদের সম্পর্কে', href: '/bn/about' },
      { label: 'যোগাযোগ', href: '/bn/contact' },
    ],
    openMenu: 'মেনু খুলুন',
    closeMenu: 'মেনু বন্ধ করুন',
  },
}

function getLocalePath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean)
  const rest = segments.slice(1)

  return `/${targetLocale}${rest.length ? `/${rest.join('/')}` : ''}`
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLocale: Locale = locale === 'bn' ? 'bn' : 'en'
  const isBn = currentLocale === 'bn'
  const t = content[currentLocale]

  const enPath = useMemo(() => getLocalePath(pathname, 'en'), [pathname])
  const bnPath = useMemo(() => getLocalePath(pathname, 'bn'), [pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: 'oklch(0.07 0 0 / 0.82)',
        borderColor: 'oklch(1 0 0 / 0.08)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href={`/${currentLocale}`}
            className="flex min-w-0 items-center gap-3 no-underline"
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: 'oklch(0.72 0.19 145 / 0.12)',
                borderColor: 'oklch(0.72 0.19 145 / 0.18)',
              }}
            >
              <Calculator size={17} style={{ color: 'oklch(0.72 0.19 145)' }} />
            </div>

            <div className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-sm font-semibold tracking-tight text-white">
                {t.brand}
              </span>
              <span className="hidden text-[11px] text-white/35 sm:block">
                {t.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-2">
              {t.links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-medium no-underline transition-colors',
                      isActive
                        ? 'bg-white/8 text-white'
                        : 'text-white/65 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div
              className="h-5 w-px"
              style={{ backgroundColor: 'oklch(1 0 0 / 0.08)' }}
            />

            {/* Language Switch */}
            <div
              className="flex items-center rounded-full border p-1"
              style={{
                borderColor: 'oklch(1 0 0 / 0.08)',
                backgroundColor: 'oklch(1 0 0 / 0.03)',
              }}
            >
              <Link
                href={enPath}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-semibold no-underline transition-colors',
                  !isBn ? 'text-black' : 'text-white/55 hover:text-white'
                )}
                style={
                  !isBn
                    ? { backgroundColor: 'oklch(0.72 0.19 145)' }
                    : undefined
                }
              >
                EN
              </Link>

              <Link
                href={bnPath}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-semibold no-underline transition-colors',
                  isBn ? 'text-black' : 'text-white/55 hover:text-white'
                )}
                style={
                  isBn ? { backgroundColor: 'oklch(0.72 0.19 145)' } : undefined
                }
              >
                BN
              </Link>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switch */}
            <div
              className="flex items-center rounded-full border p-1"
              style={{
                borderColor: 'oklch(1 0 0 / 0.08)',
                backgroundColor: 'oklch(1 0 0 / 0.03)',
              }}
            >
              <Link
                href={enPath}
                className={cn(
                  'rounded-full px-2.5 py-1 text-[11px] font-semibold no-underline transition-colors',
                  !isBn ? 'text-black' : 'text-white/55'
                )}
                style={
                  !isBn
                    ? { backgroundColor: 'oklch(0.72 0.19 145)' }
                    : undefined
                }
              >
                EN
              </Link>

              <Link
                href={bnPath}
                className={cn(
                  'rounded-full px-2.5 py-1 text-[11px] font-semibold no-underline transition-colors',
                  isBn ? 'text-black' : 'text-white/55'
                )}
                style={
                  isBn ? { backgroundColor: 'oklch(0.72 0.19 145)' } : undefined
                }
              >
                BN
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              className={cn(
                'rounded-lg p-2 transition-colors',
                menuOpen
                  ? 'bg-white/8 text-white'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              )}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t pt-3 pb-4 md:hidden"
            style={{ borderColor: 'oklch(1 0 0 / 0.08)' }}
          >
            <nav className="flex flex-col gap-1.5">
              {t.links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'rounded-xl px-4 py-3 text-sm font-medium no-underline transition-colors',
                      isActive
                        ? 'bg-white/8 text-white'
                        : 'text-white/65 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
