import { atom, createKey, atomFamily } from '@/lib/recoil'
import { PUBLISH_STATUS, PublishStatus } from '@/models/store/Article'

export const articleEditorStatusAtom = atom<{ showPreview: boolean }>({
  key: createKey(),
  default: {
    showPreview: false,
  },
})

export const articleIdAtom = atom<string>({
  key: createKey(),
  default: '',
})

export const eyecatchImageAtom = atom<string>({
  key: createKey(),
  default: '',
})

export const eyecatchImageTempBlobAtom = atom<Blob | undefined>({
  key: createKey(),
  default: undefined,
})

export const titleAtom = atom<string>({
  key: createKey(),
  default: '',
})

export const contentAtom = atom<string>({
  key: createKey(),
  default: '',
})

export const tagsAtom = atom<string[]>({
  key: createKey(),
  default: [],
})

export const publishStatusAtom = atom<PublishStatus>({
  key: createKey(),
  default: PUBLISH_STATUS.UN_PUBLISH,
})

export const contentAtomFamily = atomFamily<
  { tag: 'p' | 'h1' | 'h2' | 'h3'; text: string },
  number
>({
  key: createKey(),
  default: {
    tag: 'p',
    text: '',
  },
})
