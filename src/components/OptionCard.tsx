interface OptionCardProps {
  title: string
  description: string
  price: string
  priceLabel: string
  priceDetail: string
  features: string[]
  icon: React.ReactNode
  featured?: boolean
  badge?: string
}

export function OptionCard({
  title,
  description,
  price,
  priceLabel,
  priceDetail,
  features,
  icon,
  featured = false,
  badge,
}: OptionCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition ${
        featured
          ? 'bg-green-700 dark:bg-green-600 text-white border-0'
          : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}
    >
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {badge}
        </div>
      )}

      <div className="w-12 h-12 mb-4">{icon}</div>

      <h3
        className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}
      >
        {title}
      </h3>

      <p
        className={`text-sm mb-6 leading-relaxed ${featured ? 'text-white/75' : 'text-gray-600 dark:text-gray-400'}`}
      >
        {description}
      </p>

      <div className="mb-6">
        <div
          className={`text-xs uppercase tracking-wider font-semibold mb-1 ${featured ? 'text-white/60' : 'text-gray-600 dark:text-gray-400'}`}
        >
          {priceLabel}
        </div>
        <div
          className={`text-3xl font-bold mb-1 ${featured ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}
        >
          {price}
        </div>
        <div
          className={`text-xs ${featured ? 'text-white/60' : 'text-gray-600 dark:text-gray-400'}`}
        >
          {priceDetail}
        </div>
      </div>

      <ul className="space-y-3 mb-8 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span
              className={`font-bold mt-0.5 flex-shrink-0 ${featured ? 'text-white' : 'text-green-700 dark:text-green-400'}`}
            >
              ✓
            </span>
            <span
              className={
                featured ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* <button
        className={`w-full py-3 rounded-full font-semibold text-sm transition ${
          featured
            ? 'bg-white text-green-700 hover:bg-gray-100'
            : 'border-2 border-green-700 dark:border-green-400 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/20'
        }`}
      >
        Order
      </button> */}
    </div>
  )
}
