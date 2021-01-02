import { PublishStatus } from '@/models/store/Article'

export type ArticleDetailDocumentModel = {
  id?: string
  publishStatus?: PublishStatus
  eyecatchImage?: string
  title?: string
  content?: string
  tags?: string[]
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
