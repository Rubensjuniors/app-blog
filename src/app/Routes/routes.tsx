import { Routes, Route } from 'react-router-dom'
import Structor from '../../components/structure/Structor.component'


const Router = () => {

  return (
      <Structor>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/sobre-mim' element={<></>} />
          <Route path='/artigos' element={<></>} />
          <Route path='/pings' element={<></>} />
        </Routes>
      </Structor>
  )
}

export default Router
