import NavButton from '@/components/atoms/NavButton'
import { useScroll } from '@/hooks/useScroll'
import Box from '@mui/material/Box'
import SocialLinks from './SocialLinks'

const Nav: React.FC = (): JSX.Element => {
  const scrolled = useScroll()
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
      <SocialLinks />
    </Box>
  )
}

export default Nav
