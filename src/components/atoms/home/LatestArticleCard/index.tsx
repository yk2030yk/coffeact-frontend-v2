import React from 'react'

import { Card } from '@/components/nucleon/parts'

type Props = {}

export const LatestArticleCard: AtomicDesign.Atom<Props> = ({ children }) => {
  return <Card hover>{children}</Card>
}
