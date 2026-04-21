export function Gallery() {
  const images = [
    {
      src: '/IMG_4914.png',
      alt: 'Bowl of fresh avocados',
    },
    {
      src: '/IMG_1741.JPG',
      alt: 'Avocado cut open showing creamy interior',
    },
    {
      src: '/IMG_4922.png',
      alt: 'Avocado tree with fruit',
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase letter-spacing-widest text-green-700 dark:text-green-400 mb-3">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            A colheita
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 h-48 md:h-56`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
