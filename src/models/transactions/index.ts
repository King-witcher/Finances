import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../getConverter'
import { Transaction } from '@/types/Transaction'

const converter = getConverter<Transaction>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/transactions`).withConverter(
    converter,
  )
}

export const transactions = { getCollection }
