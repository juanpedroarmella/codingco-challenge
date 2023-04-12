import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'

interface NavButtonProps {
  scrolled?: string
}

const NavButton = styled(Link)<NavButtonProps>(({ theme, scrolled }) => {
  return {
    color: scrolled === 'true' ? '#FFFFFF' : theme?.palette.text.primary,
    fontSize: '16px',
    textAlign: 'center',
    padding: '20px',
    textDecoration: 'none',
    fontFamily: 'Work Sans',
    position: 'relative',
    '&:before': {
      width: '44px',
      height: '44px',
      position: 'absolute',
      backgroundSize: 'cover',
      top: '50%',
      left: '50%',
      content: '""',
      backgroundImage: 'url(/hex-blue.svg)',
      transform: 'translate(-50%,-50%)',
      zIndex: -1,
      opacity: 0,
      transition: '0.3s'
    },
    '&:hover': {
      fontWeight: '700',
      textDecoration: 'underline'
    },
    '&:hover:before': {
      opacity: 1
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
      fontFamily: 'Larken',
      fontWeight: 700,
      color: '#000000',
      padding: '0.5rem 0',
      width: '100%'
    }
  }
})

export default NavButton
