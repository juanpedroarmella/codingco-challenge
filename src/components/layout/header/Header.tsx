import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Nav from './Nav'

const HeaderMainContainer = styled(Box)(({ theme }: { theme?: Theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme?.palette.background.default,
    height: '64px'
  }
})

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderMainContainer data-testid='header-container' component='header'>
      <Nav />
    </HeaderMainContainer>
  )
}

export default Header
