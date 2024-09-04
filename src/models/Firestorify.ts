import { ModifyProp } from '@/types/modify-prop'
import { DocumentData, Timestamp } from 'firebase/firestore'

export type Firestorify<T extends DocumentData> = ModifyProp<T, Date, Timestamp>
