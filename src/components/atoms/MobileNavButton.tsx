import NavBorderedContainer from './NavBorderedContainer'
import NavButton from './NavButton'

interface Props {
  href: string
  children: React.ReactNode
}
const MobileNavButton: React.FC<Props> = ({ href, children }): JSX.Element => {
  return (
    <NavBorderedContainer component='li'>
      <NavButton href={href}>{children}</NavButton>
    </NavBorderedContainer>
  )
}

export default MobileNavButton
