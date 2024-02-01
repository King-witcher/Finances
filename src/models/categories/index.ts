import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../getConverter'
import { Folder } from '@/types/Folder'

const converter = getConverter<Folder>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/categories`).withConverter(
    converter,
  )
}

export const categories = { getCollection }
