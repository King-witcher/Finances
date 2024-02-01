import { CategoriesProvider } from '@/contexts/CategoriesContext'
import { TransactionsProvider } from '@/contexts/TransactionsContext'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GuardedProviders({ children }: Props) {
  return (
    <TransactionsProvider>
      <CategoriesProvider>{children}</CategoriesProvider>
    </TransactionsProvider>
  )
}
