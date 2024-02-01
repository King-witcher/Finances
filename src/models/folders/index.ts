import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../getConverter'
import { Folder } from '@/types/Folder'

const converter = getConverter<Folder>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/folders`).withConverter(
    converter,
  )
}

export const folders = { getCollection }
