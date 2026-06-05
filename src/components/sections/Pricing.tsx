import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const { ref, isVisible } = useScrollReveal()

  const plans = [
    {
      name: 'Básico',
      description: 'Ideal para freelancers e pequenos projetos.',
      priceMonthly: 49,
      priceAnnual: 39,
      features: ['Até 3 projetos', 'Análises básicas', 'Suporte por e-mail', '1 Integração'],
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Para equipes em crescimento que precisam de mais poder.',
      priceMonthly: 99,
      priceAnnual: 79,
      features: [
        'Projetos ilimitados',
        'Análises avançadas',
        'Suporte prioritário 24/7',
        'Integrações ilimitadas',
        'Membros de equipe ilimitados',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Soluções personalizadas para grandes operações.',
      priceMonthly: 249,
      priceAnnual: 199,
      features: [
        'Tudo do plano Pro',
        'SLA garantido',
        'Gerente de conta dedicado',
        'Treinamento presencial',
        'Acesso à API exclusiva',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-background">
      <div
        ref={ref}
        className={cn('container mx-auto px-4 opacity-0', isVisible && 'animate-fade-in-up')}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Preços simples e transparentes
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Escolha o plano perfeito para as necessidades da sua equipe. Sem taxas ocultas.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              className={cn('text-sm font-medium', !isAnnual ? 'text-slate-900' : 'text-slate-500')}
            >
              Mensal
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span
              className={cn('text-sm font-medium', isAnnual ? 'text-slate-900' : 'text-slate-500')}
            >
              Anual{' '}
              <Badge
                variant="secondary"
                className="ml-1 bg-secondary text-white border-none text-xs"
              >
                Economize 20%
              </Badge>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={cn(
                'relative bg-white transition-all duration-300',
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 md:-translate-y-4'
                  : 'border-slate-200 shadow-sm hover:shadow-md',
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-white hover:bg-primary px-3 py-1 text-sm font-semibold uppercase tracking-wider">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pt-8 text-center pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="h-10">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-slate-900 transition-all duration-300">
                    R$ {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-slate-500 font-medium">/mês</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-secondary font-medium mt-2">
                    Faturado R$ {plan.priceAnnual * 12} anualmente
                  </p>
                )}
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-8 pt-4">
                <Button
                  className="w-full h-12 text-base font-semibold"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
