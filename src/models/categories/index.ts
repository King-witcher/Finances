import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../get-converter'
import { Category } from '@/types/category'

const converter = getConverter<Category>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/categories`).withConverter(
    converter,
  )
}

async function createCategory() {}

export const categories = { getCollection }
