interface HowCardProps {
  step: string
  title: string
  description: string
}

export function HowCard({ step, title, description }: HowCardProps) {
  return (
    <div>
      <div className="text-5xl font-bold text-gray-200 dark:text-gray-700 leading-none mb-3">
        {step}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
