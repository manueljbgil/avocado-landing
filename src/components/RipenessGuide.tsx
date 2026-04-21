import { RipenessCard } from './RipenessCard'

export function RipenessGuide() {
  return (
    <section id="ripeness" className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase letter-spacing-widest text-green-700 dark:text-green-400 mb-3">
            Ripeness guide
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Pick your perfect stage
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            When you order, just tell me how you want your avocados. I'll make
            sure you get them at exactly the right stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <RipenessCard
            dotColor="#5a7a3a"
            label="Firm & Unripe"
            days="Ready in 4–6 days"
            description="Hard to the touch, bright green. Great if you want to plan ahead and have them ripen at home on your schedule."
          />
          <RipenessCard
            dotColor="#3d5c28"
            label="Nearly There"
            days="Ready in 1–2 days"
            description="Slight give when pressed gently. Ideal for mid-week orders — store on the counter and they'll be perfect in a day or two."
          />
          <RipenessCard
            dotColor="#2c3d1e"
            label="Ready to Eat"
            days="Perfect today"
            description="Yields to gentle pressure, deep colour. Creamy texture inside. Use today or tomorrow. Perfect for guacamole or toast."
          />
          <RipenessCard
            dotColor="#c47c1a"
            label="Mixed Batch"
            days="Various stages"
            description="Want a mix? I'll put together a selection at different stages so you get a fresh one to eat every day over the week."
          />
        </div>
      </div>
    </section>
  )
}
