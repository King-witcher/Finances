import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../getConverter'
import { Category } from '@/types/Category'

const converter = getConverter<Category>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/categories`).withConverter(
    converter,
  )
}

export const categories = { getCollection }
