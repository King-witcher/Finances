import { WithId } from './with-id'

export interface Category extends WithId {
  title: string
  icon: string
  color: string
}
