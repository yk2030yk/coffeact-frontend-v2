import { db } from '@/lib/firebase'
import { atom, createKey } from '@/lib/recoil'
import { ArticleApiService } from '@/service/apiService/apiServices'
import { FirestoreArticleApiService } from '@/service/apiService/firestore/services'
import { StorageService } from '@/service/storage/storageServices'
import { FirebaseStorageService } from '@/service/storage/firebase'
import { AuthService } from '@/service/auth/authServices'
import { FirebaseAuthService } from '@/service/auth/firebase'

export const apiServiceAtom = atom<{
  ARTICLE: ArticleApiService
}>({
  key: createKey(),
  default: {
    ARTICLE: new FirestoreArticleApiService(db),
  },
})

export const storageServiceAtom = atom<StorageService>({
  key: createKey(),
  default: new FirebaseStorageService(),
})

export const authServiceAtom = atom<AuthService>({
  key: createKey(),
  default: new FirebaseAuthService(),
})
