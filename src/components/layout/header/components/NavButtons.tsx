import NavButton from '@/components/atoms/NavButton'
import { useScroll } from '@/hooks/useScroll'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SocialLinks from './SocialLinks'

const Nav: React.FC = (): JSX.Element => {
  const scrolled = useScroll()
  const theme = useTheme()
  return (
    <Box aria-label='Navegacion principal' display='flex' alignItems='center'>
      <NavButton scrolled={scrolled.toString()} href='#'>
        Cursos
      </NavButton>
      <NavButton scrolled={scrolled.toString()} href='#'>
        Quiénes somos
      </NavButton>
      <NavButton scrolled={scrolled.toString()} href='#'>
        Noticias frescas
      </NavButton>
      <NavButton scrolled={scrolled.toString()} href='#'>
        #Wearedoers
      </NavButton>
      <NavButton scrolled={scrolled.toString()} href='#'>
        Contacto
      </NavButton>
      <SocialLinks
        px='6px'
        width='24px'
        height='20px'
        fill={scrolled ? '#FFFFFF' : theme.palette.text.primary}
        my={0}
      />
    </Box>
  )
}

export default Nav
