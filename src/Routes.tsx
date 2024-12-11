import { Routes, Route } from 'react-router'

import { Structor } from './components/Structor'
import { Home, About, Articles } from './pages'

const AppRoutes = () => (
  <Structor>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/articles" index element={<Articles />} />
    </Routes>
  </Structor>
)

export default AppRoutes