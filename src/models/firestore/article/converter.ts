import { firestore } from 'firebase'

import { formatTimestamp } from '@/lib/firebase/helpers'
import { ArticleDocumentData } from './documentData'
import { ArticleDocumentModel } from './documentModel'

export const ArticleConverter: firestore.FirestoreDataConverter<ArticleDocumentModel> = {
  toFirestore: (article: ArticleDocumentModel): firestore.DocumentData => {
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
  ): ArticleDocumentModel => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticleDocumentData
    return {
      ...data,
      id: snapshot.id,
      createdAt: formatTimestamp(data.createdAt),
      updatedAt: formatTimestamp(data.updatedAt),
    }
  },
}
