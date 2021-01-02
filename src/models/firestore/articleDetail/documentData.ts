import { firestore } from 'firebase'

import { PublishStatus } from '@/models/store/Article'

export type ArticleDetailDocumentData = {
  id?: string
  publishStatus?: PublishStatus
  eyecatchImage?: string
  title?: string
  content?: string
  tags?: string[]
  createdAt?: firestore.Timestamp | undefined
  updatedAt?: firestore.Timestamp | undefined
}
