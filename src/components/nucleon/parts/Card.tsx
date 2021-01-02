import { ComponentProps } from 'react'
import { styled, mixins } from '@/styles'

const _Card = styled.div<{ hover?: boolean }>`
  width: 100%;
  height: 100%;
  ${mixins.card}
`

export const Card: AtomicDesign.Nucleon<ComponentProps<typeof _Card>> = _Card
