import { OptionCard } from './OptionCard'

export function PurchaseOptions() {
  const AvocadoIcon = () => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <ellipse
        cx="24"
        cy="28"
        rx="14"
        ry="17"
        fill="currentColor"
        opacity="0.15"
      />
      <ellipse
        cx="24"
        cy="28"
        rx="14"
        ry="17"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <ellipse
        cx="24"
        cy="30"
        rx="7"
        ry="9"
        fill="currentColor"
        opacity="0.35"
      />
      <ellipse
        cx="24"
        cy="13"
        rx="5.5"
        ry="7"
        fill="currentColor"
        opacity="0.25"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

  const ScaleIcon = () => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="8"
        y="28"
        width="32"
        height="12"
        rx="4"
        fill="white"
        opacity="0.2"
      />
      <rect
        x="8"
        y="28"
        width="32"
        height="12"
        rx="4"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M16 28 Q24 10 32 28"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="24" cy="28" r="3" fill="white" opacity="0.8" />
      <line
        x1="18"
        y1="40"
        x2="18"
        y2="44"
        stroke="white"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="24"
        y1="40"
        x2="24"
        y2="44"
        stroke="white"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="40"
        x2="30"
        y2="44"
        stroke="white"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  )

  const CrateIcon = () => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="6"
        y="18"
        width="36"
        height="22"
        rx="4"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="6"
        y="18"
        width="36"
        height="22"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M6 24h36M18 18v22M30 18v22"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <rect
        x="14"
        y="10"
        width="20"
        height="8"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="24"
        y1="10"
        x2="24"
        y2="6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <section id="buy" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase letter-spacing-widest text-green-700 dark:text-green-400 mb-3">
            Opções de compra
          </p>
          <p className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Como pode reservar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OptionCard
            icon={<ScaleIcon />}
            title="Por peso"
            description="A opção mais flexível. Indique quantos quilos precisa e eu organizo o resto. Excelente para famílias."
            priceLabel="Desde"
            price="€2.50"
            priceDetail="por kg · mínimo 1 kg"
            features={[
              'Mínimo 1 kg',
              'Desconto para 5 kg+',
              'Ideal para famílias',
            ]}
            featured
            badge="Mais popular"
          />
          <OptionCard
            icon={<AvocadoIcon />}
            title="Por unidade"
            description="Perfeito se precisar de alguns apenas. Escolha a quantidade e eu preparo a sua encomenda"
            priceLabel="Desde"
            price="€0.80"
            priceDetail="por abacate · mínimo 3 unidades"
            features={['Mínimo 3 unidades', 'Vários tamanhos disponíveis']}
          />

          {/* <OptionCard
            icon={<CrateIcon />}
            title="Full Crate"
            description="A full wooden crate, bundled and ready. The best value per avocado. Perfect for bulk buyers, events, or sharing with neighbours."
            priceLabel="Fixed price"
            price="€28"
            priceDetail="approx. 12–15 kg per crate"
            features={[
              'Roughly 12–15 kg per crate',
              'Best price per kilo',
              'Uniform ripeness per batch',
              'Great for events or resale',
            ]}
          /> */}
        </div>
      </div>
    </section>
  )
}
