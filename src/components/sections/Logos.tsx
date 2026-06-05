export function Logos() {
  const logos = [
    { name: 'Google', query: 'google' },
    { name: 'Meta', query: 'meta' },
    { name: 'Amazon', query: 'amazon' },
    { name: 'Microsoft', query: 'microsoft' },
    { name: 'Apple', query: 'apple' },
    { name: 'Netflix', query: 'netflix' },
    { name: 'Spotify', query: 'spotify' },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Empresas inovadoras que confiam em nós
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden bg-white">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {/* Double the list for seamless looping */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="mx-8 flex-none opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={`https://img.usecurling.com/i?q=${logo.query}&color=solid-black&shape=fill`}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  )
}
