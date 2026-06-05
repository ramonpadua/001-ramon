import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { createLead, type LeadData } from '@/services/leads'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { Loader2 } from 'lucide-react'

export function LeadModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    gender: '',
    birth_date: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setErrors({})
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setLoading(true)

    const data: Partial<LeadData> = {
      name: formData.name,
      cpf: formData.cpf,
      phone: formData.phone,
    }

    if (formData.gender) data.gender = formData.gender
    if (formData.birth_date) data.birth_date = formData.birth_date + ' 12:00:00.000Z'

    try {
      await createLead(data as LeadData)
      toast({
        title: 'Sucesso!',
        description: 'Seus dados foram enviados com sucesso.',
      })
      setOpen(false)
      setFormData({ name: '', cpf: '', phone: '', gender: '', birth_date: '' })
    } catch (err) {
      const fieldErrors = extractFieldErrors(err)
      setErrors(fieldErrors)
      if (Object.keys(fieldErrors).length === 0) {
        toast({
          title: 'Erro',
          description: 'Ocorreu um erro inesperado ao enviar o formulário.',
          variant: 'destructive',
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Entre em contato</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
              placeholder="000.000.000-00"
            />
            {errors.cpf && <p className="text-sm text-red-500">{errors.cpf}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Número do Celular</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="(00) 00000-0000"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Sexo</Label>
            <Select value={formData.gender} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Masculino">Masculino</SelectItem>
                <SelectItem value="Feminino">Feminino</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="birth_date">Data de Aniversário</Label>
            <Input
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              type="date"
            />
            {errors.birth_date && <p className="text-sm text-red-500">{errors.birth_date}</p>}
          </div>
          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Enviar formulário
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
