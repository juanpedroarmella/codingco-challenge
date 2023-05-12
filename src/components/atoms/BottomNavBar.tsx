import { useThemeContext } from '@/styles/ThemeProvider'
import { styled } from '@mui/material/styles'

const colors = {
  dark: '#FF1F57',
  light: '#37A87E',
  yellow: '#FF1F57',
  orange: '#E6511B'
}

const Container = styled('nav')(() => {
  const { name: themeName } = useThemeContext()
  const background = colors[themeName]
  return {
    backgroundColor: background,
    width: '100%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ExternalBorders = styled('ul')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    height: '60%',
    padding: 0,
    borderLeft: '1px solid #000000',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

const NavButton = styled('li')(() => {
  return {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Work Sans',
    fontSize: '1rem',
    padding: '0 16px',
    borderRight: '1px solid #000000'
  }
})

export default function BottomNavBar (): JSX.Element {
  return (
    <Container>
      <ExternalBorders>
        <NavButton>
          <a href='#'>Cursos</a>
        </NavButton>
        <NavButton>
          <a href='#'>Quiénes somos</a>
        </NavButton>
        <NavButton>
          <a href='#'>Noticias Frescas</a>
        </NavButton>
        <NavButton>
          <a href='#'>#Wearedoers</a>
        </NavButton>
        <NavButton>
          <a href='#'>Contacto</a>
        </NavButton>
      </ExternalBorders>
    </Container>
  )
}
