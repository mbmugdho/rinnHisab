export interface HeroPreviewField {
  label: string
  value: string
}

export interface HeroPreviewStat {
  label: string
  value: string
}

export interface HeroPreviewContent {
  badge: string
  title: string
  subtitle: string
  fields: HeroPreviewField[]
  resultLabel: string
  resultValue: string
  stats: HeroPreviewStat[]
  note: string
}

export interface HeroContent {
  badge: string
  line1: string
  highlight: string
  sub: string
  cta: string
  trustPoints: string[]
  preview: HeroPreviewContent
}

export interface StepItem {
  step: string
  title: string
  desc: string
}

export interface StepsContent {
  title: string
  items: StepItem[]
}

export interface CalculatorItem {
  title: string
  desc: string
  href: string
  cta: string
  iconKey: 'calculator' | 'home' | 'car' | 'receipt'
}

export interface CalculatorsContent {
  title: string
  sub: string
  items: CalculatorItem[]
}

export interface TrustContent {
  title: string
  items: string[]
}

export interface HomeLocaleContent {
  hero: HeroContent
  steps: StepsContent
  calculators: CalculatorsContent
  trust: TrustContent
}

export const homeContent: Record<string, HomeLocaleContent> = {
  en: {
    hero: {
      badge: 'Free • No Signup • Bangladesh',
      line1: 'Calculate Your',
      highlight: 'Loan Payments',
      sub: 'Free financial calculators built for Bangladesh. Simple, fast, and easy to use on any device.',
      cta: 'Start with EMI Calculator',
      trustPoints: ['BDT based', 'No signup', 'English + বাংলা'],
      preview: {
        badge: 'Preview',
        title: 'EMI Calculator',
        subtitle: 'Simple monthly payment estimate',
        fields: [
          { label: 'Loan Amount', value: '৳10,00,000' },
          { label: 'Interest Rate', value: '9.0%' },
          { label: 'Tenure', value: '20 years' },
        ],
        resultLabel: 'Estimated Monthly EMI',
        resultValue: '৳8,997',
        stats: [
          { label: 'Total Interest', value: '৳11,59,280' },
          { label: 'Total Payment', value: '৳21,59,280' },
        ],
        note: 'Illustrative example only. Final figures depend on your bank.',
      },
    },
    steps: {
      title: 'How it works',
      items: [
        {
          step: 'STEP 01',
          title: 'Choose a calculator',
          desc: 'EMI, mortgage, car, education or tax',
        },
        {
          step: 'STEP 02',
          title: 'Enter your details',
          desc: 'Loan amount, interest rate, tenure',
        },
        {
          step: 'STEP 03',
          title: 'Get instant results',
          desc: 'Instant results. No signup needed.',
        },
      ],
    },
    calculators: {
      title: 'Our Calculators',
      sub: 'Choose the calculator you need. All free, all instant.',
      items: [
        {
          title: 'EMI Calculator',
          desc: 'Calculate your monthly loan installments. Know exactly how much you pay each month.',
          href: '/en/emi-calculator',
          cta: 'Calculate EMI',
          iconKey: 'calculator',
        },
        {
          title: 'Mortgage Calculator',
          desc: 'Plan your home loan. See monthly payments, total interest and full amortization schedule.',
          href: '/en/mortgage-calculator',
          cta: 'Calculate Mortgage',
          iconKey: 'home',
        },
        {
          title: 'Loan Calculator',
          desc: 'Car loans, education loans, business loans — calculate any loan instantly.',
          href: '/en/loan-calculator',
          cta: 'Calculate Loan',
          iconKey: 'car',
        },
        {
          title: 'Tax Calculator',
          desc: 'Calculate your Bangladesh income tax. Updated for the latest tax year.',
          href: '/en/tax-calculator',
          cta: 'Calculate Tax',
          iconKey: 'receipt',
        },
      ],
    },
    trust: {
      title: 'Built for Bangladesh',
      items: [
        'All calculations in BDT (৳)',
        'Bangladeshi bank rates referenced',
        'Bengali and English supported',
        'Completely free — no signup, no ads',
        'Works on any phone or computer',
        'Your data stays on your device',
      ],
    },
  },
  bn: {
    hero: {
      badge: 'বিনামূল্যে • সাইনআপ নেই • বাংলাদেশ',
      line1: 'আপনার',
      highlight: 'ঋণের হিসাব করুন',
      sub: 'বাংলাদেশের জন্য বিনামূল্যে আর্থিক ক্যালকুলেটর। সহজ, দ্রুত এবং যেকোনো ডিভাইসে ব্যবহারযোগ্য।',
      cta: 'কিস্তি ক্যালকুলেটর দিয়ে শুরু করুন',
      trustPoints: ['টাকায় হিসাব', 'সাইনআপ নেই', 'বাংলা + ইংরেজি'],
      preview: {
        badge: 'নমুনা',
        title: 'কিস্তি ক্যালকুলেটর',
        subtitle: 'সহজ মাসিক কিস্তির উদাহরণ',
        fields: [
          { label: 'ঋণের পরিমাণ', value: '৳১০,০০,০০০' },
          { label: 'সুদের হার', value: '৯.০%' },
          { label: 'মেয়াদ', value: '২০ বছর' },
        ],
        resultLabel: 'সম্ভাব্য মাসিক কিস্তি',
        resultValue: '৳৮,৯৯৭',
        stats: [
          { label: 'মোট সুদ', value: '৳১১,৫৯,২৮০' },
          { label: 'মোট পরিশোধ', value: '৳২১,৫৯,২৮০' },
        ],
        note: 'এটি শুধু একটি উদাহরণ। ব্যাংকভেদে চূড়ান্ত হিসাব ভিন্ন হতে পারে।',
      },
    },
    steps: {
      title: 'কিভাবে কাজ করে',
      items: [
        {
          step: 'ধাপ ০১',
          title: 'ক্যালকুলেটর বেছে নিন',
          desc: 'EMI, গৃহঋণ, গাড়ি, শিক্ষা বা কর',
        },
        {
          step: 'ধাপ ০২',
          title: 'তথ্য দিন',
          desc: 'ঋণের পরিমাণ, সুদের হার, মেয়াদ',
        },
        {
          step: 'ধাপ ০৩',
          title: 'ফলাফল পান',
          desc: 'তাৎক্ষণিক ফলাফল। কোনো সাইনআপ নেই।',
        },
      ],
    },
    calculators: {
      title: 'আমাদের ক্যালকুলেটর',
      sub: 'আপনার প্রয়োজনীয় ক্যালকুলেটর বেছে নিন। সব বিনামূল্যে।',
      items: [
        {
          title: 'কিস্তি ক্যালকুলেটর',
          desc: 'আপনার মাসিক ঋণের কিস্তি হিসাব করুন। প্রতিমাসে ঠিক কত টাকা দিতে হবে জানুন।',
          href: '/bn/emi-calculator',
          cta: 'কিস্তি হিসাব করুন',
          iconKey: 'calculator',
        },
        {
          title: 'গৃহঋণ ক্যালকুলেটর',
          desc: 'আপনার গৃহঋণ পরিকল্পনা করুন। মাসিক পেমেন্ট, মোট সুদ এবং সম্পূর্ণ সময়সূচি দেখুন।',
          href: '/bn/mortgage-calculator',
          cta: 'গৃহঋণ হিসাব করুন',
          iconKey: 'home',
        },
        {
          title: 'ঋণ ক্যালকুলেটর',
          desc: 'গাড়ি ঋণ, শিক্ষা ঋণ, ব্যবসায়িক ঋণ — যেকোনো ঋণ তাৎক্ষণিকভাবে হিসাব করুন।',
          href: '/bn/loan-calculator',
          cta: 'ঋণ হিসাব করুন',
          iconKey: 'car',
        },
        {
          title: 'কর ক্যালকুলেটর',
          desc: 'বাংলাদেশের আয়কর হিসাব করুন। সর্বশেষ করবর্ষ অনুযায়ী আপডেট করা।',
          href: '/bn/tax-calculator',
          cta: 'কর হিসাব করুন',
          iconKey: 'receipt',
        },
      ],
    },
    trust: {
      title: 'বাংলাদেশের জন্য তৈরি',
      items: [
        'সমস্ত হিসাব টাকায় (৳)',
        'বাংলাদেশী ব্যাংকের সুদের হার ব্যবহৃত',
        'বাংলা এবং ইংরেজি সমর্থিত',
        'সম্পূর্ণ বিনামূল্যে — কোনো সাইনআপ নেই',
        'যেকোনো ফোন বা কম্পিউটারে কাজ করে',
        'আপনার তথ্য আপনার ডিভাইসে থাকে',
      ],
    },
  },
}
