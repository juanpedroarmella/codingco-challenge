import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => {
  return {
    position: 'absolute',
    top: 100,
    right: -100,
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      top: 50,
      right: -107
    }
  }
})

export default function BlackAsterisk (): JSX.Element {
  return (
    <StyledImage
      src='/black-asterisk.svg'
      width={210}
      height={210}
      alt='Black Asterisk Image'
    />
  )
}
