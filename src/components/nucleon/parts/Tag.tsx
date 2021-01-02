import { ComponentProps } from 'react'
import { styled } from '@/styles'

const _Tag = styled.div`
  text-align: center;
  background-color: #4caf50;
  color: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 11px;
`

export const Tag: AtomicDesign.Nucleon<ComponentProps<typeof _Tag>> = _Tag
