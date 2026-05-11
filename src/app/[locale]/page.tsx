export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isBn = locale === 'bn'

  return (
    <main className="hero-glow flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Hero Headline */}
      <h1 className="font-bold tracking-tight">
        {isBn ? (
          <>
            <span className="text-white">আপনার </span>
            <span className="text-glow-green">ঋণের হিসাব </span>
            <span className="text-white">করুন</span>
          </>
        ) : (
          <>
            <span className="text-white">Calculate Your </span>
            <span className="text-glow-green">Loan Payments</span>
          </>
        )}
      </h1>

      {/* Subheadline */}
      <p className="mt-4 max-w-md text-base text-white/60">
        {isBn
          ? 'বাংলাদেশের জন্য বিনামূল্যে আর্থিক ক্যালকুলেটর। সহজ। দ্রুত। আপনার ভাষায়।'
          : 'Free financial calculators built for Bangladesh. Simple. Fast. In your language.'}
      </p>

      {/* CTA Button */}
      <button
        className="bg-primary mt-8 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide text-black transition-opacity hover:opacity-90"
        style={{ backgroundColor: 'oklch(0.72 0.19 145)' }}
      >
        {isBn ? 'হিসাব শুরু করুন →' : 'Start Calculating →'}
      </button>

      {/* How it works — 3 steps */}
      <div className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="card-surface p-5 text-left">
          <p
            className="text-xs font-semibold tracking-widest"
            style={{ color: 'oklch(0.72 0.19 145)' }}
          >
            {isBn ? 'ধাপ ০১' : 'STEP 01'}
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            {isBn ? 'ক্যালকুলেটর বেছে নিন' : 'Choose a calculator'}
          </p>
          <p className="mt-1 text-xs text-white/50">
            {isBn
              ? 'EMI, গৃহঋণ, গাড়ি, শিক্ষা বা কর'
              : 'EMI, mortgage, car, education or tax'}
          </p>
        </div>

        <div className="card-surface p-5 text-left">
          <p
            className="text-xs font-semibold tracking-widest"
            style={{ color: 'oklch(0.72 0.19 145)' }}
          >
            {isBn ? 'ধাপ ০২' : 'STEP 02'}
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            {isBn ? 'তথ্য দিন' : 'Enter your details'}
          </p>
          <p className="mt-1 text-xs text-white/50">
            {isBn
              ? 'ঋণের পরিমাণ, সুদের হার, মেয়াদ'
              : 'Loan amount, interest rate, tenure'}
          </p>
        </div>

        <div className="card-surface p-5 text-left">
          <p
            className="text-xs font-semibold tracking-widest"
            style={{ color: 'oklch(0.72 0.19 145)' }}
          >
            {isBn ? 'ধাপ ০৩' : 'STEP 03'}
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            {isBn ? 'ফলাফল পান' : 'Get instant results'}
          </p>
          <p className="mt-1 text-xs text-white/50">
            {isBn
              ? 'তাৎক্ষণিক ফলাফল। কোনো সাইনআপ নেই।'
              : 'Instant results. No signup needed.'}
          </p>
        </div>
      </div>
    </main>
  )
}
