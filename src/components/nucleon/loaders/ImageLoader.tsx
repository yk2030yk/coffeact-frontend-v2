import React from 'react'
import ContentLoader from 'react-content-loader'

export const ImageLoader: React.FC = () => (
  <ContentLoader viewBox="0 0 100 50" style={{ width: '100%' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)
