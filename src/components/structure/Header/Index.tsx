import useWindowSize from '../../../hooks/useWindowSize/use-window-size'
import Icon from '../../basic/Icons/Icons'

interface HeaderProps {
  title: string
}

const headerClass = 'p-3 border-b border-ultils flex justify-between items-center sticky top-0 left-0 backdrop-blur-sm'

const Header = ({ title }: HeaderProps) => {
  const { width } = useWindowSize()

  const widthSize = width > 768

  return (
    <header className={headerClass}>
      <span className="text-default_text">{title}</span>
      {widthSize ? <Icon id="gym" iconSize={28} /> : <Icon id="logo_desktop" iconSize={42} />}
    </header>
  )
}

export default Header
