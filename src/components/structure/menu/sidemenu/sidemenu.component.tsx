import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import Icon from '@/components/basic/Icons'
import NavLink from '@/components/basic/NavLink'

import { sidemenuProps } from './types'

const Sidemenu = ({ sidemenuItems }: sidemenuProps) => {
  const { width } = useWindowSize()

  const widthSize = width > 768
  const widthClassRender = widthSize ? 'min-w-[230px] p-4' : 'min-w-[60px] p-2'

  return (
    <nav
      data-testid="sidemenu"
      className={`${widthClassRender} sticky left-0 top-0 flex max-h-screen flex-col items-center justify-center gap-4 md:justify-start`}
    >
      {widthSize && (
        <NavLink path="/">
          <Icon id="icon_logo" iconSize={94} />
        </NavLink>
      )}

      <div className="flex flex-col items-start">
        {sidemenuItems &&
          sidemenuItems.map((itensMenu) => (
            <NavLink
              path={itensMenu.path}
              key={itensMenu.id}
              classNames="flex w-full items-center gap-3 p-4"
              activeDefault={itensMenu.path === '/sobre-mim' ? true : false}
            >
              <>
                <Icon id={itensMenu.id} />
                {widthSize && (
                  <span className="font-bold">{itensMenu.title}</span>
                )}
              </>
            </NavLink>
          ))}
      </div>
    </nav>
  )
}

export default Sidemenu
