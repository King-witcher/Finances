import { Category } from '@/types/category'
import { ReactNode, createContext, useContext, useState } from 'react'

// ChoosenCategory Context

interface ChoosenCategoryData {
  choosenCategory: Category | null
  setChoosenCategory(category: Category | null): void
}

interface Props {
  children?: ReactNode
}

const ChoosenCategoryContext = createContext<ChoosenCategoryData>(
  {} as ChoosenCategoryData,
)

export function ChoosenCategoryProvider({ children }: Props) {
  const [choosenCategory, setChoosenCategory] = useState<Category | null>(null)

  return (
    <ChoosenCategoryContext.Provider
      value={{ choosenCategory, setChoosenCategory }}
    >
      {children}
    </ChoosenCategoryContext.Provider>
  )
}

export const useChoosenCategory = () => useContext(ChoosenCategoryContext)
