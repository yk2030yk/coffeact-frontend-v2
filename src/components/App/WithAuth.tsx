import React from 'react'

import { useOnAuthStateChanged } from '@/hooks/store/auth/useOnAuthStateChanged'

/**
 * authの監視を始める
 */
export const WithAuth: React.FC = () => {
  useOnAuthStateChanged()
  return null
}
