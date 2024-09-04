import { firestore } from '@/services/firestore'
import { collection } from 'firebase/firestore'
import { getConverter } from '../get-converter'
import { Transaction } from '@/types/transaction'

const converter = getConverter<Transaction>()

function getCollection(userId: string) {
  return collection(firestore, `users/${userId}/transactions`).withConverter(
    converter,
  )
}

export const transactions = { getCollection }
