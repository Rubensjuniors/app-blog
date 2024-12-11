import { Theme } from '@radix-ui/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import AppRoutes from './Routes'

import './assets/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="ruby"  className="bg-gray-700 text-gray-100">
        <AppRoutes />
      </Theme>
    </BrowserRouter>
  </StrictMode>
)
