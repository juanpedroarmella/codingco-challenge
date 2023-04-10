import useIsMobile from '@/hooks/useIsMobile'
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import MobileHeader from './MobileHeader'
import Nav from './components/Nav'

const HeaderMainContainer = styled(Box)(({ theme }: { theme?: Theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    background: theme?.palette.background.default,
    minHeight: '100vh'
  }
})

const Header: React.FC = (): JSX.Element => {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileHeader />
  return (
    <HeaderMainContainer data-testid='header-container' component='header'>
      <Nav />
    </HeaderMainContainer>
  )
}

export default Header
