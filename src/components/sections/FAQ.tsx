import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Como funciona o período de teste gratuito?',
    answer:
      'Oferecemos 14 dias de acesso total à plataforma no plano Pro. Você não precisa cadastrar um cartão de crédito para iniciar. Ao final do período, você pode escolher o plano que melhor atende suas necessidades.',
  },
  {
    question: 'Posso cancelar ou alterar meu plano a qualquer momento?',
    answer:
      'Sim, nossos planos não possuem fidelidade (exceto contratos específicos do plano Enterprise). Você pode fazer upgrade, downgrade ou cancelar sua assinatura a qualquer momento através do painel de configurações.',
  },
  {
    question: 'Meus dados estão seguros com vocês?',
    answer:
      'Absolutamente. Utilizamos criptografia AES-256 de nível militar para todos os dados em trânsito e em repouso. Além disso, somos 100% aderentes à LGPD e realizamos auditorias de segurança regulares.',
  },
  {
    question: 'A plataforma se integra com os sistemas que já uso?',
    answer:
      'Sim! Possuímos integrações nativas com mais de 500 ferramentas populares como Slack, Google Workspace, Microsoft 365, Salesforce, Trello, e muito mais. Também oferecemos uma API REST robusta para integrações personalizadas.',
  },
  {
    question: 'Existe suporte técnico disponível em português?',
    answer:
      'Com certeza. Nossa equipe de suporte fala português nativo e está disponível 24/7 através de chat, e-mail e ticket. Clientes do plano Pro e Enterprise também têm acesso a suporte prioritário e chamadas de vídeo.',
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="py-24 bg-white">
      <div
        ref={ref}
        className={cn(
          'container mx-auto px-4 max-w-3xl opacity-0',
          isVisible && 'animate-fade-in-up',
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tem dúvidas? Nós temos as respostas. Se não encontrar o que procura, nossa equipe de
            suporte está pronta para ajudar.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-6 bg-slate-50 hover:bg-slate-100/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
