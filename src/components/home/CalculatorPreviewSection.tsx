import { homeContent } from '@/lib/constants/home-content'

interface TrustSectionProps {
  locale: string
}

export default function TrustSection({ locale }: TrustSectionProps) {
  const localeKey = locale === 'bn' ? 'bn' : 'en'
  const t = (homeContent[localeKey] ?? homeContent.en).trust

  return (
    <section
      className="flex w-full justify-center border-t"
      style={{ borderColor: 'oklch(1 0 0 / 0.06)' }}
    >
      <div className="container flex w-full flex-col items-center py-20 sm:py-24 lg:py-28">
        <div className="w-full max-w-[700px] text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t.title}
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-4 text-left sm:mt-12 sm:grid-cols-2 sm:gap-5">
            {t.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    backgroundColor: 'oklch(0.72 0.19 145 / 0.12)',
                    color: 'oklch(0.72 0.19 145)',
                  }}
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-white/55">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
