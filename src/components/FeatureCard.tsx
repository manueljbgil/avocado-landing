interface FeatureCardProps {
  title: string
  description: string
  index: number
}

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <article
      className="island-shell feature-card rise-in rounded-2xl p-5"
      style={{ animationDelay: `${index * 90 + 80}ms` }}
    >
      <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
        {title}
      </h2>
      <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{description}</p>
    </article>
  )
}
