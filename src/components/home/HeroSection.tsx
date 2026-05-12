import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeContent } from '@/lib/constants/home-content'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  locale: string
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const localeKey = locale === 'bn' ? 'bn' : 'en'
  const t = (homeContent[localeKey] ?? homeContent.en).hero

  return (
    <section className="hero-glow relative flex w-full justify-center overflow-hidden">
      <div className="container flex w-full flex-col items-center">
        <div className="h-8 sm:h-10 lg:h-14" aria-hidden="true" />

        {/* ── TEXT ── */}
        <div className="flex w-full max-w-[760px] flex-col items-center text-center">
          <Badge variant="outline" size="default">
            {t.badge}
          </Badge>

          <h1 className="mt-7 font-bold tracking-tight sm:mt-8">
            <span className="text-white">{t.line1} </span>
            <span className="text-glow-green">{t.highlight}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground-muted sm:mt-6 sm:text-lg">
            {t.sub}
          </p>

          <div className="mt-9 sm:mt-10">
            <Button variant="default" size="lg" asChild>
              <Link
                href={`/${localeKey}/emi-calculator`}
                className="no-underline"
              >
                <span>{t.cta}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-black/15">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {t.trustPoints.map((point) => (
              <Badge key={point} variant="outline" size="sm">
                {point}
              </Badge>
            ))}
          </div>
        </div>

        {/* ── MOCKUP ── */}
        <div className="relative mt-16 w-full max-w-[920px] pb-16 sm:mt-20 sm:pb-20 lg:mt-24 lg:pb-24">
          <div
            className="pointer-events-none absolute -inset-8 rounded-3xl blur-3xl lg:-inset-12"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.72 0.19 145 / 0.10), transparent 70%)',
            }}
          />

          <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/40 lg:rounded-2xl"
            style={{ backgroundColor: 'oklch(0.06 0 0)' }}
          >
            {/* Browser Chrome */}
            <div
              className="relative flex items-center justify-center border-b border-border px-4 py-3"
              style={{ backgroundColor: 'oklch(0.09 0 0)' }}
            >
              <div className="absolute left-4 flex gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
              </div>

              <div className="flex h-7 w-full max-w-sm items-center gap-2 rounded-lg border border-border bg-surface px-3">
                <div className="h-3 w-3 rounded-full bg-primary/40" />
                <span className="truncate text-[11px] font-medium text-foreground-subtle">
                  rinnhisab.com/{localeKey}/emi-calculator
                </span>
              </div>
            </div>

            {/* App Content */}
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/12">
                    <div className="h-3.5 w-3.5 rounded bg-primary" />
                  </div>
                  <span className="text-sm font-semibold text-white/75">
                    {t.preview.title}
                  </span>
                </div>
                <p className="mt-1.5 pl-[42px] text-xs text-foreground-subtle">
                  {t.preview.subtitle}
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
                {/* Left: Inputs */}
                <div className="flex flex-col gap-3.5">
                  {t.preview.fields.map((field, index) => (
                    <div
                      key={field.label}
                      className="rounded-xl border border-border p-4"
                      style={{ backgroundColor: 'oklch(1 0 0 / 0.02)' }}
                    >
                      <p className="text-[11px] font-medium tracking-wide text-foreground-subtle uppercase">
                        {field.label}
                      </p>
                      <p className="mt-2.5 text-base font-semibold text-white/80">
                        {field.value}
                      </p>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-primary/50"
                          style={{
                            width: index === 0 ? '45%' : index === 1 ? '35%' : '60%',
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  <Button variant="default" size="lg" className="mt-1 w-full">
                    {localeKey === 'bn' ? 'হিসাব করুন' : 'Calculate EMI'}
                  </Button>
                </div>

                {/* Right: Results */}
                <div className="flex flex-col gap-3.5">
                  <div className="rounded-xl border border-primary/15 bg-primary/6 p-5">
                    <p className="text-xs font-medium text-foreground-muted">
                      {t.preview.resultLabel}
                    </p>
                    <p className="mt-2.5 text-3xl font-bold tracking-tight text-primary">
                      {t.preview.resultValue}
                    </p>
                    <p className="mt-1.5 text-xs text-foreground-subtle">
                      {localeKey === 'bn' ? 'প্রতি মাসে' : 'per month'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {t.preview.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border p-4"
                        style={{ backgroundColor: 'oklch(1 0 0 / 0.02)' }}
                      >
                        <p className="text-[11px] text-foreground-subtle">{stat.label}</p>
                        <p className="mt-2 text-sm font-semibold text-white/75">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="rounded-xl border border-border p-4"
                    style={{ backgroundColor: 'oklch(1 0 0 / 0.02)' }}
                  >
                    <p className="text-[11px] font-medium text-foreground-subtle">
                      {localeKey === 'bn' ? 'পেমেন্ট বিভাজন' : 'Payment Breakdown'}
                    </p>
                    <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full">
                      <div className="h-full bg-primary" style={{ width: '46%' }} />
                      <div className="h-full bg-primary/30" style={{ width: '54%' }} />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-[10px] text-foreground-subtle">
                          {localeKey === 'bn' ? 'আসল' : 'Principal'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-primary/30" />
                        <span className="text-[10px] text-foreground-subtle">
                          {localeKey === 'bn' ? 'সুদ' : 'Interest'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amortization Table */}
              <div className="mt-6">
                <div className="overflow-hidden rounded-xl border border-border"
                  style={{ backgroundColor: 'oklch(1 0 0 / 0.02)' }}
                >
                  <div
                    className="grid grid-cols-5 gap-2 border-b border-border px-5 py-3"
                    style={{ backgroundColor: 'oklch(1 0 0 / 0.03)' }}
                  >
                    {(localeKey === 'bn'
                      ? ['মাস', 'কিস্তি', 'আসল', 'সুদ', 'বাকি']
                      : ['Month', 'EMI', 'Principal', 'Interest', 'Balance']
                    ).map((col) => (
                      <span
                        key={col}
                        className="text-[10px] font-semibold tracking-wide text-foreground-subtle uppercase"
                      >
                        {col}
                      </span>
                    ))}
                  </div>

                  {[
                    {
                      month: localeKey === 'bn' ? '১' : '1',
                      emi: localeKey === 'bn' ? '৳৮,৯৯৭' : '৳8,997',
                      principal: localeKey === 'bn' ? '৳১,৪৯৭' : '৳1,497',
                      interest: localeKey === 'bn' ? '৳৭,৫০০' : '৳7,500',
                      balance: localeKey === 'bn' ? '৳৯,৯৮,৫০৩' : '৳9,98,503',
                    },
                    {
                      month: localeKey === 'bn' ? '২' : '2',
                      emi: localeKey === 'bn' ? '৳৮,৯৯৭' : '৳8,997',
                      principal: localeKey === 'bn' ? '৳১,৫০৮' : '৳1,508',
                      interest: localeKey === 'bn' ? '৳৭,৪৮৯' : '৳7,489',
                      balance: localeKey === 'bn' ? '৳৯,৯৬,৯৯৫' : '৳9,96,995',
                    },
                    {
                      month: localeKey === 'bn' ? '৩' : '3',
                      emi: localeKey === 'bn' ? '৳৮,৯৯৭' : '৳8,997',
                      principal: localeKey === 'bn' ? '৳১,৫১৯' : '৳1,519',
                      interest: localeKey === 'bn' ? '৳৭,৪৭৮' : '৳7,478',
                      balance: localeKey === 'bn' ? '৳৯,৯৫,৪৭৬' : '৳9,95,476',
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-5 gap-2 border-b border-border/50 px-5 py-3 last:border-b-0"
                    >
                      <span className="text-xs font-medium text-white/50">{row.month}</span>
                      <span className="text-xs text-white/45">{row.emi}</span>
                      <span className="text-xs text-primary/70">{row.principal}</span>
                      <span className="text-xs text-foreground-subtle">{row.interest}</span>
                      <span className="text-xs text-white/45">{row.balance}</span>
                    </div>
                  ))}

                  <div className="px-5 py-3">
                    <span className="text-[10px] text-foreground-subtle/50">
                      {localeKey === 'bn' ? '... আরও ২৩৭ মাস' : '... 237 more months'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[11px] leading-relaxed text-foreground-subtle">
                {t.preview.note}
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-52 rounded-b-xl lg:rounded-b-2xl"
            style={{
              background:
                'linear-gradient(to top, oklch(0.07 0 0) 0%, oklch(0.07 0 0 / 0.95) 25%, oklch(0.07 0 0 / 0.5) 55%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}