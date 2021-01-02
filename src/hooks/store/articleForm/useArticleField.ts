import { useCallback, useEffect } from 'react'
import {
  RecoilState,
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
  useRecoilValue,
} from 'recoil'

import { titleAtom, contentAtom, articleSelector } from '@/store/articleForm'
import { useArticleDetail } from '@/hooks/store/articleDetail/useArticleDetail'
import { Article } from '@/models/store/Article'

type TextFieldChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export const useArticle = () => {
  return useRecoilValue(articleSelector)
}

export const useSetDefaultValue = (id: Article['id']) => {
  const articleDetail = useArticleDetail(id)
  const setArticle = useSetRecoilState(articleSelector)
  const resetArticle = useResetRecoilState(articleSelector)

  useEffect(() => {
    if (articleDetail) setArticle(articleDetail)
    return () => resetArticle()
  }, [articleDetail, setArticle, resetArticle])
}

export const useTextField = (atom: RecoilState<string>) => {
  const [value, setValue] = useRecoilState(atom)

  const onChange = useCallback(
    (e: TextFieldChangeEvent) => setValue(e.target.value),
    [setValue]
  )

  return {
    value,
    onChange,
  }
}

export const useTitleField = () => useTextField(titleAtom)

export const useContentField = () => useTextField(contentAtom)
