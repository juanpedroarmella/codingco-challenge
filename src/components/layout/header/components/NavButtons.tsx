import NavButton from '@/components/atoms/NavButton'
import Box from '@mui/material/Box'
import SocialLinks from './SocialLinks'

const Nav: React.FC = (): JSX.Element => {
  return (
    <Box aria-label='Navegacion principal'>
      <NavButton href='#'>Cursos</NavButton>
      <NavButton href='#'>Quiénes somos</NavButton>
      <NavButton href='#'>Noticias frescas</NavButton>
      <NavButton href='#'>#Wearedoers</NavButton>
      <NavButton href='#'>Contacto</NavButton>
      <SocialLinks />
    </Box>
  )
}

export default Nav
