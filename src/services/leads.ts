import pb from '@/lib/pocketbase/client'

export interface LeadData {
  name: string
  cpf: string
  phone: string
  gender?: string
  birth_date?: string
}

export const createLead = (data: LeadData) => pb.collection('leads').create(data)
