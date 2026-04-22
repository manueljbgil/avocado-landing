export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-green-700 dark:bg-green-600 text-white"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase letter-spacing-widest text-white/65 mb-3">
            Entre em contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para reservar os seus abacates?
          </h2>
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed mx-auto">
            Entre em contacto por telefone ou mensagem. Confirmarei o stock e
            marcaremos um horário de recolha que lhe seja conveniente.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center mb-8">
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 min-w-56">
            <div className="text-xs uppercase letter-spacing-widest text-white/60 mb-1">
              Telefone / WhatsApp
            </div>
            <div className="text-base font-semibold text-white">
              <div>+351 914 091 667</div>
              <div>+351 919 703 914</div>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 min-w-56 ">
            <div className="text-xs uppercase letter-spacing-widest text-white/60 mb-1 justify-center">
              Localização
            </div>
            <div className="text-base font-semibold text-white">
              Trofa do Vouga, Águeda
            </div>
            <div className="text-xs letter-spacing-widest text-white/60 mb-1 justify-center">
              (mais detalhes após contacto)
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 min-w-56">
            <div className="text-xs uppercase letter-spacing-widest text-white/60 mb-1">
              Pagamento
            </div>
            <div className="text-base font-semibold text-white">MBWay</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/351914091667?text=Olá%20Manuel%2C%20estou%20interessado%20em%20reservar%20abacates.%20Podes%20dar-me%20mais%20informações%3F"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm font-semibold no-underline hover:bg-white dark:hover:bg-gray-900 transition"
          >
            Mensagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
