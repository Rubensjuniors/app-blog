import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: ''
      },
      {
        path: '/sobre-mim',
        element: ''
      },
      {
        path: '/artigos',
        element: ''
      },
      {
        path: '/pings',
        element: ''
      }
    ]
  }
])

export default router
