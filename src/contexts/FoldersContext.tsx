import { Folder } from '@/types/Folder'
import { Transaction, getDocs, query, where } from 'firebase/firestore'
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

// Folders Context

interface FoldersData {
  folders: Folder[]
  loading: boolean
  getTransactions(folder: Folder): Transaction[]
}

interface Props {
  children?: ReactNode
}

const FoldersContext = createContext<FoldersData>({} as FoldersData)

export function FoldersProvider({ children }: Props) {
  const [loading, setLoading] = useState(true)
  const [folders, setFolders] = useState<Folder[]>([])
  const { user } = useGuardedAuth()
  const { transactions } = useTransactions()

  useEffect(() => {
    let mounted = true
    async function loadFolders() {
      const collection = models.folders.getCollection(user.uid)
      const repeatOnce = query(collection, where('repeat', '==', 'once'))
      const querySnapshot = await getDocs(repeatOnce)
      const folders = querySnapshot.docs.map((doc) => {
        return doc.data()
      })
      setFolders(folders)
      setLoading(false)
    }

    loadFolders()

    return () => {
      mounted = false
    }
  }, [user.uid])

  const getTransactions = useCallback((folderId: Folder): Transaction[] => {
    return []
  }, [])

  return (
    <FoldersContext.Provider value={{ folders, loading, getTransactions }}>
      {children}
    </FoldersContext.Provider>
  )
}

export const useFolders = () => useContext(FoldersContext)
