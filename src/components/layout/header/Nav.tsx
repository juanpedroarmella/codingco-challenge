import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Logo from './Logo'

const NavContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Nav: React.FC = (): JSX.Element => {
  return (
    <NavContainer data-testid='header-container' component='nav'>
      <Logo />
      {/*
      <NavButtons />
      <NavSocialMedia />
      */}
    </NavContainer>
  )
}

export default Nav
