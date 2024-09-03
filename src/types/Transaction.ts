import { WithId } from './WithId'

export type Transaction = WithId & {
  date: Date
  folderId: string | null
  type: 'income' | 'outcome'
  value: number
} & (
    | {
        repeat: 'once'
      }
    | {
        repeat: 'many'
        repeatId: string
        index: number
        repeats: number
        frequency: 'daily' | 'weekly' | 'monthly'
      }
    | {
        repeat: 'infinite'
        frequency: 'daily' | 'weekly' | 'monthly'
      }
  )
