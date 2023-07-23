import { useState } from 'react'
import Icon from '../../components/basic/Icons/Icons'

const useSidemenu = () => {
  const [active, setActive] = useState<boolean>(false)

  const renderIconActive = (iconId: string, active: boolean, element: React.MutableRefObject<null>) => {
    console.log(element.current)

    if (active) {
      return <Icon id={`${iconId}-active`} classIcon="mr-3" />
    }

    return <Icon id={iconId} classIcon="mr-3" />
  }

  const onClickItem = (title: string) => {
    document.title = title
    console.log(active)
    setActive(true)
  }

  return { active, setActive, renderIconActive, onClickItem }
}

export default useSidemenu
