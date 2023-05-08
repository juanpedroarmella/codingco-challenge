import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => {
  return {
    position: 'absolute',
    top: 200,
    left: -30,
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      top: 250,
      left: -130
    }
  }
})

export default function MagentaCloud (): JSX.Element {
  return (
    <StyledImage
      src='/magenta-cloud.svg'
      width={280}
      height={195}
      alt='Magenta Cloud Image'
    />
  )
}
