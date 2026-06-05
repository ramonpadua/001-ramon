import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Diretora de Marketing, TechCorp',
    content:
      'Desde que implementamos o Nexus, nossa produtividade aumentou em 40%. A interface é intuitiva e a automação nos poupa horas de trabalho semanal.',
    seed: 1,
    gender: 'female',
  },
  {
    name: 'Carlos Mendes',
    role: 'CEO, StartupBr',
    content:
      'O melhor investimento que fizemos este ano. A capacidade de integrar todas as nossas ferramentas em um só lugar revolucionou nossos processos.',
    seed: 2,
    gender: 'male',
  },
  {
    name: 'Mariana Costa',
    role: 'Gerente de Projetos, Agência X',
    content:
      'O suporte é excepcional e a plataforma evolui constantemente. Sentimos que a ferramenta foi feita sob medida para nossas necessidades.',
    seed: 3,
    gender: 'female',
  },
  {
    name: 'Rafael Oliveira',
    role: 'Líder de Vendas, GlobalTech',
    content:
      'Os relatórios em tempo real nos permitem tomar decisões muito mais rápidas e precisas. Indispensável para qualquer equipe de alta performance.',
    seed: 4,
    gender: 'male',
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div
        ref={ref}
        className={cn('container mx-auto px-4 opacity-0', isVisible && 'animate-fade-in-up')}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Amado por equipes inovadoras
          </h2>
          <p className="text-lg text-slate-600">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes têm a dizer sobre a
            experiência com nossa plataforma.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                        <AvatarImage
                          src={`https://img.usecurling.com/ppl/thumbnail?gender=${testimonial.gender}&seed=${testimonial.seed}`}
                        />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 bg-white border-slate-200" />
            <CarouselNext className="-right-12 bg-white border-slate-200" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
