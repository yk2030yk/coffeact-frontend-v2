import React from 'react'

import { BasicButton } from '@/components/nucleon/buttons'
type Props = {
  isLoading: boolean
}

export const BasicModal: React.FC<Props> = ({ isLoading, children }) => {
  return <BasicButton>{isLoading ? <p>...</p> : children}</BasicButton>
}
