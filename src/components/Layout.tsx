import { Outlet } from 'react-router-dom'
import { Menu, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { useState, useEffect } from 'react'

export default function Layout() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Planos', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Zap className="h-6 w-6 fill-primary" />
            <span>Nexus</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="animate-pulse shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="mt-4 w-full">Começar Agora</Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
              <Zap className="h-6 w-6 text-primary fill-primary" />
              <span>Nexus</span>
            </a>
            <p className="text-sm text-slate-400">
              Transformando a maneira como equipes modernas trabalham e colaboram.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Atualizações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Nexus Inc. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Feito com <span className="text-red-500 text-lg">❤️</span> no Brasil
          </p>
        </div>
      </footer>
    </div>
  )
}
