import { firestore } from 'firebase'

import { formatTimestamp } from '@/lib/firebase/helpers'
import { Article } from '@/models/store/Article'
import { ArticleDocumentData } from '@/models/firestore/article'

export const ArticleConverter: firestore.FirestoreDataConverter<Article> = {
  toFirestore: (article: Article): firestore.DocumentData => {
    return {
      publishStatus: article.publishStatus,
      eyecatchImage: article.eyecatchImage,
      title: article.title,
      content: article.content,
      tags: article.tags,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): Article => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticleDocumentData
    return new Article({
      ...data,
      id: snapshot.id,
      createdAt: formatTimestamp(data.createdAt),
      updatedAt: formatTimestamp(data.updatedAt),
    })
  },
}
