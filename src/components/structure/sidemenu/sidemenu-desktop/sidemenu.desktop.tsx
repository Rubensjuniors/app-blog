import { useTranslationClient } from '@/hooks/useTransletions/client'
import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import { Icon, NavLink } from '@/components/basic'

import { Keystitle, sidemenuProps } from '../types'

const SidemenuDesktop = ({ sidemenuItems }: sidemenuProps) => {
  const { width } = useWindowSize()
  const t = useTranslationClient()

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
            >
              <>
                <Icon id={itensMenu.id} />
                {widthSize && (
                  <span className="font-bold">
                    {t.blog.sidemenu[itensMenu.title as Keystitle]}
                  </span>
                )}
              </>
            </NavLink>
          ))}
      </div>
    </nav>
  )
}

export default SidemenuDesktop
