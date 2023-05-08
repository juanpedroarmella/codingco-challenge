import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => {
  return {
    position: 'absolute',
    bottom: 230,
    left: 100,
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      left: -20
    }
  }
})

export default function MagentaCircle (): JSX.Element {
  return (
    <StyledImage
      src='/magenta-circle2.svg'
      width={40}
      height={40}
      alt='Magenta Circle Image'
    />
  )
}
