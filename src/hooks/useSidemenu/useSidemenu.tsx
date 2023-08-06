import { useState } from 'react'

// import Icon from '../../components/basic/Icons/Icons'

const useSidemenu = () => {
  const [active, setActive] = useState<boolean>(false)

  const onClickItem = (title: string) => {
    document.title = title
    // eslint-disable-next-line no-console
    console.log(active)
    setActive(true)
  }

  return { active, setActive, onClickItem }
}

export default useSidemenu
