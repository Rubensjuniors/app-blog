import { sidemenuProps } from './type'

import { Link, NavLink } from 'react-router-dom'
import Icon from '../../basic/Icons/Icons'
import useWindowSize from '../../../hooks/useWindowSize/use-window-size'

const Sidemenu = ({ sidemenuItems }: sidemenuProps) => {

  const { width } = useWindowSize()

  const widthSize = width > 768
  const widthClassRender = widthSize ? 'min-w-[230px] p-4' : 'min-w-[60px] p-2'

  return (
    <>
      <nav className={`${widthClassRender} max-h-screen  sticky top-0 left-0 flex flex-col items-center gap-4`}>
        {
          widthSize && (
            <Link to="/">
             <Icon id="logo_desktop" iconSize={94} />
            </Link>
          )
        }

        <div className="flex flex-col items-start">
          {sidemenuItems &&
            sidemenuItems.map(itensMenu => (
              <NavLink to={itensMenu.path} key={itensMenu.id} className="flex items-center p-4 w-full gap-3">
                <Icon id={itensMenu.id} />
                {
                  widthSize &&
                  <span>{itensMenu.title}</span>
                }
              </NavLink>
            ))}
        </div>
      </nav>
    </>
  )
}

export default Sidemenu
