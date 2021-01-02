import { atom, createKey } from '@/lib/recoil'
import { Area } from 'react-easy-crop/types'

export const srcAtom = atom<string>({
  key: createKey(),
  default: '',
})

export const cropAtom = atom<{ x: number; y: number }>({
  key: createKey(),
  default: {
    x: 0,
    y: 0,
  },
})

export const zoomAtom = atom<number>({
  key: createKey(),
  default: 1,
})

export const croppedResultAtom = atom<{
  area: Area | undefined
  areaPixels: Area | undefined
}>({
  key: createKey(),
  default: {
    area: undefined,
    areaPixels: undefined,
  },
})
