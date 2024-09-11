import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (date: string) =>
  format(new Date(date ?? ''), 'dd MMM yyyy', {
    locale: ptBR
  })
