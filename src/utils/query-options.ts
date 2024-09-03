import { models } from '@/models'
import { getDocs, query } from 'firebase/firestore'
import { queryOptions } from '@tanstack/react-query'

export function categoriesQueryOptions(uid: string) {
  return queryOptions({
    queryKey: ['categories', uid],
    // staleTime: Number.POSITIVE_INFINITY,
    queryFn: async () => {
      const collection = models.categories.getCollection(uid)
      const q = query(collection)
      const snap = await getDocs(q)
      return snap.docs.map((doc) => doc.data())
    },
  })
}
