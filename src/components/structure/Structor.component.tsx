import { ReactNode } from 'react'
import useWindowSize from '../../hooks/useWindowSize/use-window-size'
import Header from './Header/Index'
import Sidemenu from './Sidemenu'
import MenuBottom from './Sidemenu/MenuBottom-Mobile'
import itemsMneu from '../../json/itemsMenu.json'

interface StructorProps {
  children: ReactNode 
}

const Structor = ({ children }: StructorProps) => {
  const { width } = useWindowSize()

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
          {children}
        </main>
      </div>
    </>
  )
}

export default Structor