interface RipenessCardProps {
  dotColor: string
  label: string
  days: string
  description: string
}

export function RipenessCard({
  dotColor,
  label,
  days,
  description,
}: RipenessCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center">
      <div
        className="w-12 h-12 rounded-full mx-auto mb-4"
        style={{ backgroundColor: dotColor }}
      />
      <h3 className="font-bold text-sm mb-1 text-gray-900 dark:text-gray-100">
        {label}
      </h3>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
        {days}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
