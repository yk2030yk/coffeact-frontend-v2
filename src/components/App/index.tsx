import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { WithScrollToTop } from './WithScrollToTop'
import { WithErrorBoundary } from './WithErrorBoundary'
import { WithGlobalStyle } from './WithGlobalStyle'
import { WithEmotionTheme } from './WithEmotionTheme'
import { WithIntl } from './WithIntl'
//import { WithSentry } from './WithSentry'
import { WithRecoil } from './WithRecoil'
import { WithAuth } from './WithAuth'
import { Routes } from '../routes'

export const App: React.FC = () => (
  <WithRecoil>
    <WithIntl>
      <WithEmotionTheme>
        <WithGlobalStyle>
          <BrowserRouter>
            <WithErrorBoundary>
              <WithAuth />
              <WithScrollToTop />
              <Routes />
            </WithErrorBoundary>
          </BrowserRouter>
        </WithGlobalStyle>
      </WithEmotionTheme>
    </WithIntl>
  </WithRecoil>
)
