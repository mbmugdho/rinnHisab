import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div lang={locale} className="flex min-h-dvh flex-col">
      <Header locale={locale} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
