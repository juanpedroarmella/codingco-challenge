import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'

const FooterLink = styled(Link)(() => {
  return {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#707070',
    fontSize: '20px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    '&:hover': {
      color: '#E1DF3C',
      transition: 'color 0.3s'
    }
  }
})

const FooterNav: React.FC = (): JSX.Element => {
  return (
    <Box display='grid' gap={1}>
      <FooterLink href='#'>Cursos</FooterLink>
      <FooterLink href='#'>Quiénes Somos</FooterLink>
      <FooterLink href='#'>Noticias Frescas</FooterLink>
      <FooterLink href='#'>#Wearedoers</FooterLink>
      <FooterLink href='#'>Contacto</FooterLink>
    </Box>
  )
}

export default FooterNav
