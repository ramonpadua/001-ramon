import { Zap, Shield, BarChart3, Smartphone, Globe, Clock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Automação Inteligente',
    description:
      'Deixe o trabalho repetitivo para nosso motor de IA e foque no que realmente importa.',
    icon: Zap,
  },
  {
    title: 'Segurança de Nível Bancário',
    description:
      'Seus dados protegidos com criptografia de ponta a ponta e conformidade total com a LGPD.',
    icon: Shield,
  },
  {
    title: 'Análises em Tempo Real',
    description:
      'Tome decisões baseadas em dados com nossos painéis interativos e relatórios personalizados.',
    icon: BarChart3,
  },
  {
    title: 'Acesso em Qualquer Lugar',
    description:
      'Experiência perfeita em todos os seus dispositivos. Trabalhe de onde estiver, quando quiser.',
    icon: Smartphone,
  },
  {
    title: 'Integração Global',
    description:
      'Conecte-se com mais de 500 ferramentas que você já usa através da nossa API robusta.',
    icon: Globe,
  },
  {
    title: 'Suporte 24/7',
    description:
      'Nossa equipe de especialistas está sempre pronta para ajudar você, a qualquer hora do dia.',
    icon: Clock,
  },
]

export function Features() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="features" className="py-24 bg-background">
      <div
        ref={ref}
        className={cn('container mx-auto px-4 opacity-0', isVisible && 'animate-fade-in-up')}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo o que você precisa para decolar
          </h2>
          <p className="text-lg text-slate-600">
            Nossa plataforma foi construída pensando em performance, segurança e usabilidade para
            que sua equipe atinja o máximo potencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-primary/20 bg-white"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
