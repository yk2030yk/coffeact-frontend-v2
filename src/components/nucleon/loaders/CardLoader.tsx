import React from 'react'
import ContentLoader from 'react-content-loader'

type Props = {}

export const CardLoader: AtomicDesign.Atom<Props> = () => {
  return (
    <ContentLoader
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect
        x="0"
        y="0"
        rx="3"
        width="100%"
        height="100%"
        style={{ borderRadius: '3px' }}
      />
    </ContentLoader>
  )
}
