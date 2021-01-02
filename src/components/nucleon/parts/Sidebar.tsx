import { ComponentProps } from 'react'
import { styled } from '@/styles'

const _Sidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #181e25;
  box-shadow: 1px 0px 8px 1px #181e25;
`

export const Sidebar: AtomicDesign.Nucleon<
  ComponentProps<typeof _Sidebar>
> = _Sidebar
