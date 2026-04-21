export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 md:py-20"
      style={{
        backgroundImage: 'url(/IMG_1741.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0  bg-white/60 dark:bg-black/40" />
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
          <span className="text-green-700 dark:text-green-400">Abacates</span>{' '}
          frescos, diretamente da árvore
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Abacates selecionados a dedo, disponíveis para recolha no local e
          entrega na região. Compre à unidade ou ao peso.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#buy"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm font-semibold no-underline hover:bg-white dark:hover:bg-gray-900 transition"
          >
            Ver opções de compra
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm font-semibold no-underline hover:bg-white dark:hover:bg-gray-900 transition"
          >
            Contactar para reservar
          </a>
        </div>
      </div>
    </section>
  )
}
