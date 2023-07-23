import { sidemenuProps } from './type'

import { Link, NavLink } from 'react-router-dom'
import Icon from '../../basic/Icons/Icons'

const Sidemenu = ({ sidemenuItems }: sidemenuProps) => {
  return (
    <>
      <nav className="min-w-[230px] max-h-screen p-4 sticky top-0 left-0 flex flex-col items-center gap-4">
        <Link to="/">
          <Icon id="logo_desktop" iconSize={94} />
        </Link>
        <div className="flex flex-col items-start">
          {sidemenuItems &&
            sidemenuItems.map(itensMenu => (
              <NavLink to={itensMenu.path} key={itensMenu.id} className="flex items-center p-4 w-full">
                <Icon id={itensMenu.id} classIcon="mr-3" />
                <span>{itensMenu.title}</span>
              </NavLink>
            ))}
        </div>
      </nav>
    </>
  )
}

export default Sidemenu
