import React from 'react'
import { useDropzone } from 'react-dropzone'

import { FileUploadIcon } from '../../icons'
import * as S from './styled'

type Props = {
  onDrop: <T extends File>(files: T[]) => void
}

export const FileDropZone: AtomicDesign.Nucleon<Props> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <S.DropZone {...getRootProps()}>
      <S.Overlay isDragActive={isDragActive} />
      <input {...getInputProps()} />
      <div>
        <FileUploadIcon size={25} />
      </div>
      <div>
        <p>Drag and Drop Files Here</p>
      </div>
    </S.DropZone>
  )
}
