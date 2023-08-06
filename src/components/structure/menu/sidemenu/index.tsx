import Link from 'next/link'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import Icon from '@/components/basic/Icons'

import { sidemenuProps } from './types'

const Sidemenu = ({ sidemenuItems }: sidemenuProps) => {
  const { width } = useWindowSize()

  const widthSize = width > 768
  const widthClassRender = widthSize ? 'min-w-[230px] p-4' : 'min-w-[60px] p-2'

  return (
    <>
      <nav
        className={`${widthClassRender} sticky  left-0 top-0 flex max-h-screen flex-col items-center gap-4`}
      >
        {widthSize && (
          <Link href="/">
            <Icon id="logo_desktop" iconSize={94} />
          </Link>
        )}

        <div className="flex flex-col items-start">
          {sidemenuItems &&
            sidemenuItems.map((itensMenu) => (
              <Link
                href={itensMenu.path}
                key={itensMenu.id}
                className="flex w-full items-center gap-3 p-4"
              >
                <Icon id={itensMenu.id} />
                {widthSize && <span>{itensMenu.title}</span>}
              </Link>
            ))}
        </div>
      </nav>
    </>
  )
}

export default Sidemenu
