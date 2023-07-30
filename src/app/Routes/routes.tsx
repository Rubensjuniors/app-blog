import { Routes, Route } from 'react-router-dom'
import Structor from '../../components/structure/Structor.component'
import { APP_ROUTES } from './routes.consts'


const Router = () => {

  return (
      <Structor>
        <Routes>
          <Route path={APP_ROUTES.default} element={<></>} />
          <Route path={APP_ROUTES.sidemenu.sobre} element={<>sobre</>} />
          <Route path={APP_ROUTES.sidemenu.artigos} element={<>artigos</>} />
          <Route path={APP_ROUTES.sidemenu.pings} element={<>pings</>} />
        </Routes>
      </Structor>
  )
}

export default Router
