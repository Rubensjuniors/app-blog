import { NavLink } from 'react-router-dom'
import { sidemenuProps } from '../type'
import Icon from '../../../basic/Icons/Icons'


const MenuBottom = ({ sidemenuItems }: sidemenuProps) => {
  return (
    <>
      <nav className='sticky bottom-0 left-0 flex items-center bg-segundary w-full'>
        {sidemenuItems &&
          sidemenuItems.map(itensMenu => (
            <NavLink to={itensMenu.path} key={itensMenu.id} className="flex items-center justify-center p-4 flex-1">
              <Icon id={itensMenu.id}/>
            </NavLink>
          ))}
      </nav>
    </>
  )
}

export default MenuBottom