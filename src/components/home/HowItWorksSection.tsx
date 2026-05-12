import { homeContent } from '@/lib/constants/home-content'

interface HowItWorksSectionProps {
  locale: string
}

export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const localeKey = locale === 'bn' ? 'bn' : 'en'
  const t = (homeContent[localeKey] ?? homeContent.en).steps

  return (
    <section className="flex w-full justify-center">
      <div className="container flex w-full flex-col items-center py-20 sm:py-24 lg:py-28">
        <div className="w-full max-w-[860px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.19 145 / 0.65)' }}
          >
            {t.title}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {t.items.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border p-6 sm:p-7"
                style={{
                  borderColor: 'oklch(1 0 0 / 0.07)',
                  backgroundColor: 'oklch(0.10 0 0)',
                }}
              >
                <p
                  className="text-[11px] font-bold tracking-[0.15em]"
                  style={{ color: 'oklch(0.72 0.19 145)' }}
                >
                  {step.step}
                </p>
                <p className="mt-3.5 text-sm font-semibold text-white/90">
                  {step.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/40">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
