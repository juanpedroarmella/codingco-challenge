import MobileNavButton from '@/components/atoms/MobileNavButton'
import Box from '@mui/material/Box'

const MobileNav: React.FC = (): JSX.Element => {
  return (
    <nav>
      <Box component='ul' p={0}>
        <MobileNavButton href='#'>Cursos</MobileNavButton>
        <MobileNavButton href='#'>Quiénes somos</MobileNavButton>
        <MobileNavButton href='#'>Noticias frescas</MobileNavButton>
        <MobileNavButton href='#'>#Wearedoers</MobileNavButton>
        <MobileNavButton href='#'>Contacto</MobileNavButton>
        <MobileNavButton href='#'>Ven a conocernos</MobileNavButton>
      </Box>
    </nav>
  )
}

export default MobileNav
