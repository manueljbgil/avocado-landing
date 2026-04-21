import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '../components/HeroSection'
import { PurchaseOptions } from '../components/PurchaseOptions'
import { ContactCTA } from '../components/ContactCTA'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <ContactCTA />
        <PurchaseOptions />
        {/* <Gallery /> */}
        {/* <HowItWorks /> */}
        {/* <RipenessGuide /> */}
      </main>
    </>
  )
}
