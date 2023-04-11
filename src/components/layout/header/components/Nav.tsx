import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Logo from './icons/Logo'
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
    height: '64px',
    zIndex: 1,
    margin: '0 2vw',
    padding: '0 0.75rem',
    [theme.breakpoints.up('xs')]: {
      maxWidth: theme.breakpoints.values.xs
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.xl
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
