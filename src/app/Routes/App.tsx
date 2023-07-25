import { Outlet } from 'react-router-dom'
import Header from '../../components/structure/Header/Index'
import Sidemenu from '../../components/structure/Sidemenu'
import itemsMneu from '../../json/itemsMenu.json'
import useWindowSize from '../../hooks/useWindowSize/use-window-size'
import MenuBottom from '../../components/structure/Sidemenu/MenuBottom-Mobile'

const App = () => {
  const { width, height } = useWindowSize()

  const widthSize = width > 576
  const menuBottomClass = widthSize ? '' : 'flex-col-reverse'

  return (
    <>
      <div className={`${menuBottomClass} max-w-screen-xl min-h-screen flex justify-center m-0-auto`}>
        {
          widthSize ? <Sidemenu sidemenuItems={itemsMneu} />
            : <MenuBottom sidemenuItems={itemsMneu} />
        }
        <main className="w-content min-h-screen z-1 border-x border-ultils">
          <Header title="Home" />
          {
            !widthSize &&
            <iframe src="https://martinfowler.com/articles/micro-frontends.html" width={width} height={height}></iframe>
          }
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
