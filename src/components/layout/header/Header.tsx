import useIsMobile from '@/hooks/useIsMobile'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MobileHeader from './MobileHeader'
import Nav from './components/Nav'
import { useScroll } from '@/hooks/useScroll'

interface Props {
  scrolled: string
}

const HeaderMainContainer = styled(Box)<Props>(({ scrolled }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: scrolled === 'true' ? '#ff1f57' : 'transparent',
    minHeight: '56px',
    position: 'fixed',
    transition: 'background 0.3s',
    width: '100%',
    zIndex: 16
  }
})

const Header: React.FC = (): JSX.Element => {
  const isMobile = useIsMobile()
  const scrolled = useScroll()
  if (isMobile) return <MobileHeader />
  return (
    <HeaderMainContainer
      scrolled={scrolled.toString()}
      data-testid='header-container'
      component='header'
    >
      <Nav />
    </HeaderMainContainer>
  )
}

export default Header
