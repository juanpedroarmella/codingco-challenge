import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Logo from './Logo'
import NavButtons from './NavButtons'

interface NavContainerProps {
  theme?: Theme
}

const NavContainer = styled(Box)<NavContainerProps>(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 540
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 720
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 960
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1140
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1320
    }
  }
})

const Nav: React.FC = (): JSX.Element => {
  return (
    <NavContainer data-testid='header-container' component='nav'>
      <Logo />
      <NavButtons />
    </NavContainer>
  )
}

export default Nav
