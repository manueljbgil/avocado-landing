import { HowCard } from './HowCard'

export function HowItWorks() {
  return (
    <section id="how" className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase letter-spacing-widest text-green-700 dark:text-green-400 mb-3">
            The process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            From tree to your table
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            No middlemen, no cold chains. You order, I pick, you collect. Simple
            as that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HowCard
            step="01"
            title="Choose your option"
            description="Pick how you want your avocados — by unit, by weight, or in a bundled crate. Every option comes with freshness guaranteed."
          />
          <HowCard
            step="02"
            title="Contact me to order"
            description="Reach out via phone or message. I'll confirm availability, your preferred ripeness stage, and arrange pickup or local delivery in Sever do Vouga."
          />
          <HowCard
            step="03"
            title="Collect & enjoy"
            description="Pick up your avocados in person or receive them locally. Payment on collection — cash or transfer, whatever works for you."
          />
        </div>
      </div>
    </section>
  )
}
