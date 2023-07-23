import { Outlet } from 'react-router-dom'
import Header from '../../components/structure/Header/Index'
import Sidemenu from '../../components/structure/Sidemenu'
import itemsMneu from '../../json/itemsMenu.json'
import useWindowSize from '../../hooks/useWindowSize/use-window-size'

const App = () => {
  const { width } = useWindowSize()

  const widthSize = width <= 620

  return (
    <>
      <div className="max-w-screen-xl min-h-screen flex justify-center m-0-auto">
        {widthSize ? '' : <Sidemenu sidemenuItems={itemsMneu} />}
        <main className="w-content min-h-screen z-1 border-x border-ultils ">
          <Header title="Home" />
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
