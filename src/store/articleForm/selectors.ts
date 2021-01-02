import { selector, createKey } from '@/lib/recoil'

import {
  articleIdAtom,
  eyecatchImageAtom,
  titleAtom,
  contentAtom,
} from './atoms'
import { ArticleForm } from '@/models/store/ArticleForm'
import { Article } from '@/models/store/Article'

export const articleFormSelector = selector<ArticleForm>({
  key: createKey(),
  get: ({ get }) => {
    const eyecatchImage = get(eyecatchImageAtom)
    const title = get(titleAtom)
    const content = get(contentAtom)
    return {
      eyecatchImage,
      title,
      content,
    }
  },
})

export const articleSelector = selector<Article>({
  key: createKey(),
  get: ({ get }) => {
    const id = get(articleIdAtom)
    const eyecatchImage = get(eyecatchImageAtom)
    const title = get(titleAtom)
    const content = get(contentAtom)
    return new Article({ id, eyecatchImage, title, content })
  },
  set: ({ set }, article) => {
    set(articleIdAtom, article instanceof Article ? article.id : '')
    set(
      eyecatchImageAtom,
      article instanceof Article ? article.eyecatchImage : ''
    )
    set(titleAtom, article instanceof Article ? article.title : '')
    set(contentAtom, article instanceof Article ? article.content : '')
  },
})
