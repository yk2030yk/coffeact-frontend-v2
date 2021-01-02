import { useCallback } from 'react'
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'

import { convertCropToBlob } from '@/lib/reactEasyCrop/helpers'
import { srcAtom, cropAtom, zoomAtom, croppedResultAtom } from '@/store/cropper'

export const useCropperSrc = () => {
  const [src, setSrc] = useRecoilState(srcAtom)
  return { src, setSrc }
}

export const useCropperCrop = () => {
  const [crop, setCrop] = useRecoilState(cropAtom)
  return { crop, setCrop }
}

export const useCropperZoom = () => {
  const [zoom, setZoom] = useRecoilState(zoomAtom)
  return { zoom, setZoom }
}

export const useResetCropper = () => {
  const resetSrc = useResetRecoilState(srcAtom)
  const resetCrop = useResetRecoilState(cropAtom)
  const resetZoom = useResetRecoilState(zoomAtom)

  return useCallback(() => {
    resetSrc()
    resetCrop()
    resetZoom()
  }, [resetSrc, resetCrop, resetZoom])
}

export const useCropper = () => {
  const srcState = useCropperSrc()
  const cropState = useCropperCrop()
  const zoomState = useCropperZoom()

  return {
    ...srcState,
    ...cropState,
    ...zoomState,
  }
}

export const useOnComplete = () => {
  const setCroppedResultAtom = useSetRecoilState(croppedResultAtom)

  return useCallback(
    (area, areaPixels) => {
      setCroppedResultAtom({ area, areaPixels })
    },
    [setCroppedResultAtom]
  )
}

export const useGetCroppedImageBlob = () => {
  const { src } = useCropperSrc()
  const { areaPixels } = useRecoilValue(croppedResultAtom)
  return useCallback(async () => {
    if (areaPixels) return await convertCropToBlob(src, areaPixels)
  }, [src, areaPixels])
}
