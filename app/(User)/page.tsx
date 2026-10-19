import HeroSection from '@/components/Pages/Home/HeroSection'
import FeaturesSection from '@/components/Pages/Home/FeaturesSection'
import HowItWorksSection from '@/components/Pages/Home/HowItWorksSection'
import ComponentsSection from '@/components/Pages/Home/ComponentsSection'
import CtaSection from '@/components/Pages/Home/CtaSection'
import React from 'react'

export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComponentsSection />
      <CtaSection />
    </div>
  )
}
