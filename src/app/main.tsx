import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'
import ReactDOM from 'react-dom/client'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
