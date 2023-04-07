import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Nav from './Nav'

const HeaderMainContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000000'
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
