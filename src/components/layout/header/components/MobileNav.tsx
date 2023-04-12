import MobileAddress from '@/components/atoms/MobileAddress'
import MobileNavButton from '@/components/atoms/MobileNavButton'
import WorldWide from '@/components/atoms/WorldWide'
import Box from '@mui/material/Box'

const MobileNav: React.FC = (): JSX.Element => {
  return (
    <Box component='ul' p={0} m={0}>
      <MobileNavButton href='#'>Cursos</MobileNavButton>
      <MobileNavButton href='#'>Quiénes somos</MobileNavButton>
      <MobileNavButton href='#'>Noticias frescas</MobileNavButton>
      <MobileNavButton href='#'>#Wearedoers</MobileNavButton>
      <MobileNavButton href='#'>Contacto</MobileNavButton>
      <MobileAddress />
      <WorldWide />
    </Box>
  )
}

export default MobileNav
