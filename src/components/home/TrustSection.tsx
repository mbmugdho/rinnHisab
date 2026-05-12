import { homeContent } from '@/lib/constants/home-content'

interface TrustSectionProps {
  locale: string
}

export default function TrustSection({ locale }: TrustSectionProps) {
  const t = (homeContent[locale] ?? homeContent.en).trust

  return (
    <section
      className="border-t"
      style={{ borderColor: 'oklch(1 0 0 / 0.06)' }}
    >
      <div className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-white">{t.title}</h2>

          <ul className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {t.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs"
                  style={{
                    backgroundColor: 'oklch(0.72 0.19 145 / 0.12)',
                    color: 'oklch(0.72 0.19 145)',
                  }}
                >
                  ✓
                </span>
                <span className="text-sm text-white/65">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
