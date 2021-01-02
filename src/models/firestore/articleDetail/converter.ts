import { firestore } from 'firebase'

import { formatTimestamp } from '@/lib/firebase/helpers'
import { ArticleDetailDocumentData } from './documentData'
import { ArticleDetailDocumentModel } from './documentModel'

export const ArticleDetailConverter: firestore.FirestoreDataConverter<ArticleDetailDocumentModel> = {
  toFirestore: (
    article: ArticleDetailDocumentModel
  ): firestore.DocumentData => {
    return {
      publishStatus: article.publishStatus || '',
      eyecatchImage: article.eyecatchImage || '',
      title: article.title || '',
      content: article.content || '',
      tags: article.tags || [],
      createdAt: article.createdAt || '',
      updatedAt: article.updatedAt || '',
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): ArticleDetailDocumentModel => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticleDetailDocumentData
    return {
      ...data,
      id: snapshot.id,
      createdAt: formatTimestamp(data.createdAt),
      updatedAt: formatTimestamp(data.updatedAt),
    }
  },
}
