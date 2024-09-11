import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import useWindowSize from '@/hooks/use-window-size'

import { itemsMenu } from '@/utils/constantes'
import { getTitleWithPath } from '@/utils/header'

const useHeader = () => {
  const pathname = usePathname()
  const { width } = useWindowSize()
  const [isOpenSidemenu, setIsOpenSidemenu] = useState<boolean>(false)
  const [titleHeader, setTitleHeader] = useState<string>('Início')
  const isInPost = /^\/artigos\//.test(pathname)
  const isDesktopAndIsInPost = isInPost && width >= 960

  const handleToggleSideMenu = useCallback(() => {
    setIsOpenSidemenu(prevState => !prevState)
  }, [])

  useEffect(() => {
    setTitleHeader(getTitleWithPath(itemsMenu, pathname))
  }, [pathname])

  return {
    isOpenSidemenu,
    handleToggleSideMenu,
    setIsOpenSidemenu,
    titleHeader,
    isDesktopAndIsInPost
  }
}

export default useHeader
