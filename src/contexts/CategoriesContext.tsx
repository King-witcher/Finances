import { Category as Category } from '@/types/Category'
import {
  Transaction,
  addDoc,
  doc,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useTransactions } from './TransactionsContext'
import { models } from '@/models'
import { useGuardedAuth } from './GuardedAuthContext'
import { getDocs } from '@/services/firestore'

// Categories Context

interface CategoriesData {
  categories: Category[]
  loading: boolean
  getTransactions(category: Category): Transaction[]
  createCategory(category: Category): Promise<void>
}

interface Props {
  children?: ReactNode
}

const Categories = createContext<CategoriesData>({} as CategoriesData)

export function CategoriesProvider({ children }: Props) {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<Category[]>([])
  const { user } = useGuardedAuth()
  const { transactions } = useTransactions()

  useEffect(() => {
    let mounted = true
    async function loadFolders() {
      const collection = models.categories.getCollection(user.uid)
      const repeatOnce = query(collection)
      const querySnapshot = await getDocs(repeatOnce)
      const folders = querySnapshot.docs.map((doc) => {
        return doc.data()
      })
      setCategories(folders)
      setLoading(false)
    }
    loadFolders()

    return () => {
      mounted = false
    }
  }, [user.uid])

  const getTransactions = useCallback((category: Category): Transaction[] => {
    return []
  }, [])

  const createCategory = useCallback(async (category: Category) => {
    const collection = models.categories.getCollection(user.uid)
    const ref = await addDoc(collection, category)
    setCategories((current) => [
      ...current,
      {
        ...category,
        id: ref.id,
      },
    ])
  }, [])

  return (
    <Categories.Provider
      value={{ categories, loading, getTransactions, createCategory }}
    >
      {children}
    </Categories.Provider>
  )
}

export const useCategories = () => useContext(Categories)
