import { Transaction } from '@/types/Transactoin'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useGuardedAuth } from './GuardedAuthContext'
import { models } from '@/models'
import { getDocs, orderBy, query, where } from 'firebase/firestore'

// Transactions Context

interface TransactionsData {
  transactions: Transaction[]
  loading: boolean
  create(transaction: Transaction): Promise<void>
  save(transactionId: string, transaction: Transaction): Promise<void>
}

interface Props {
  children?: ReactNode
}

const TransactionsContext = createContext<TransactionsData>(
  {} as TransactionsData,
)

export function TransactionsProvider({ children }: Props) {
  const { user } = useGuardedAuth()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function loadTransactions() {
      const collection = models.transactions.getCollection(user.uid)
      const repeatOnce = query(collection)
      const querySnapshot = await getDocs(repeatOnce)
      const transactions = querySnapshot.docs.map((doc) => {
        return doc.data()
      })
      setTransactions(transactions)
      setLoading(false)
    }

    loadTransactions()

    return () => {
      mounted = false
    }
  }, [user.uid])

  const save = useCallback(async () => {}, [])
  const create = useCallback(async () => {}, [])
  return (
    <TransactionsContext.Provider
      value={{ transactions, loading, save, create }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
