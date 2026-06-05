import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function Hero() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-40 blur-[100px]"></div>

      <div
        ref={ref}
        className={cn(
          'container mx-auto px-4 text-center opacity-0',
          isVisible && 'animate-fade-in-up',
        )}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Nova versão 2.0 disponível
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          Transforme sua produtividade com a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            ferramenta definitiva
          </span>
        </h1>

        <h2 className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Automatize processos, integre sua equipe e alcance resultados extraordinários em tempo
          recorde com nossa plataforma all-in-one.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base h-14 px-8 shadow-xl shadow-primary/25 hover:scale-105 transition-transform"
          >
            Experimente Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base h-14 px-8 hover:bg-slate-50 border-slate-200"
          >
            <Play className="mr-2 h-5 w-5 text-primary" />
            Ver Demonstração
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
          <img
            src="https://img.usecurling.com/p/1200/700?q=dashboard&color=blue"
            alt="Plataforma Dashboard Mockup"
            className="rounded-2xl shadow-2xl border border-slate-200 animate-float"
          />
        </div>
      </div>
    </section>
  )
}
