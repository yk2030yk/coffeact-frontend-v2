import { firestore } from 'firebase'

import { FirestoreRepository } from './FirestoreRepository'
import { CoffeeActApplicationError } from '@/errors'
import { COLLECTION_NAMES } from './collections'
import {
  ArticleDocumentModel,
  ArticleConverter,
} from '@/models/firestore/article'

export class ArticleRepository extends FirestoreRepository {
  public async get(id: string) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(id)
      .get()
    return doc.data()
  }

  public async getFirstListQuerySnapshot(limit: number) {
    return await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .orderBy('createdAt', 'desc')
      .limit(limit)
  }

  public async getNextListQuerySnapshot(lastItemId: string, limit: number) {
    const lastItem = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(lastItemId)
      .get()

    return await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .orderBy('createdAt', 'desc')
      .startAfter(lastItem)
      .limit(limit)
  }

  public async getPagingList(pointItemId: string | undefined, limit = 9) {
    const query =
      pointItemId === undefined
        ? await this.getFirstListQuerySnapshot(limit)
        : await this.getNextListQuerySnapshot(pointItemId, limit)

    const querySnapshot = await query.get()

    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListAll() {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async create(article: ArticleDocumentModel) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    const data = await this.db.collection(COLLECTION_NAMES.ARTICLES).add({
      ...ArticleConverter.toFirestore(article),
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    return data.id
  }

  public async update(id: string, article: ArticleDocumentModel) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(id)
      .get()

    if (!doc) throw new CoffeeActApplicationError('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({
      ...ArticleConverter.toFirestore(article),
      updatedAt: timestamp,
    })
  }

  public async delete(id: string) {
    await this.db.collection(COLLECTION_NAMES.ARTICLES).doc(id).delete()
  }
}
