import { firestore } from 'firebase'

import { FirestoreRepository } from './FirestoreRepository'
import { CoffeeActApplicationError } from '@/errors'
import {
  ArticleDetailConverter,
  ArticleDetailDocumentModel,
} from '@/models/firestore/articleDetail'
import { COLLECTION_NAMES } from './collections'

export class ArticleDetailRepository extends FirestoreRepository {
  public async get(id: string) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLE_DETAIL)
      .withConverter(ArticleDetailConverter)
      .doc(id)
      .get()
    return doc.data()
  }

  public async create(articleDetail: ArticleDetailDocumentModel) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    const data = await this.db.collection(COLLECTION_NAMES.ARTICLE_DETAIL).add({
      ...ArticleDetailConverter.toFirestore(articleDetail),
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    return data.id
  }

  public async update(id: string, articleDetail: ArticleDetailDocumentModel) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLE_DETAIL)
      .withConverter(ArticleDetailConverter)
      .doc(id)
      .get()

    if (!doc) throw new CoffeeActApplicationError('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({
      ...ArticleDetailConverter.toFirestore(articleDetail),
      updatedAt: timestamp,
    })
  }

  public async delete(id: string) {
    await this.db.collection(COLLECTION_NAMES.ARTICLE_DETAIL).doc(id).delete()
  }
}
