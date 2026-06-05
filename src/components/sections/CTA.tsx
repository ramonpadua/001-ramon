import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function CTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Dark Theme feel for contrast */}
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
      <div className="absolute top-0 right-0 -m-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]"></div>

      <div
        ref={ref}
        className={cn(
          'relative container mx-auto px-4 text-center z-10 opacity-0',
          isVisible && 'animate-fade-in-up',
        )}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
          Pronto para levar seu negócio ao próximo nível?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
          Junte-se a milhares de empresas que já transformaram sua maneira de trabalhar. Comece seu
          teste gratuito hoje mesmo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-base bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto shadow-xl"
          >
            Assinar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base border-slate-600 text-white hover:bg-white/10 w-full sm:w-auto"
          >
            Falar com um Consultor
          </Button>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Não é necessário cartão de crédito • Cancelamento fácil • Suporte 24/7
        </p>
      </div>
    </section>
  )
}
