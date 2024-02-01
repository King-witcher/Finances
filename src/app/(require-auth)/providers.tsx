import { FoldersProvider } from '@/contexts/FoldersContext'
import { TransactionsProvider } from '@/contexts/TransactionsContext'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GuardedProviders({ children }: Props) {
  return (
    <TransactionsProvider>
      <FoldersProvider>{children}</FoldersProvider>
    </TransactionsProvider>
  )
}
