import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import CalculatorPreviewSection from '@/components/home/CalculatorPreviewSection'
import TrustSection from '@/components/home/TrustSection'

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <HeroSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <CalculatorPreviewSection locale={locale} />
      <TrustSection locale={locale} />
    </>
  )
}
