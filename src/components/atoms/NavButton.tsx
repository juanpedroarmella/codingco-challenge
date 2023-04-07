import Link from '@mui/material/Link'
import { styled, Theme } from '@mui/material/styles'

const NavButton = styled(Link)(({ theme }: { theme?: Theme }) => {
  return {
    color: theme?.palette.text.primary,
    fontSize: '16px',
    textAlign: 'center',
    padding: '20px',
    textDecoration: 'none',
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
    }
  }
})

export default NavButton
