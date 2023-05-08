import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => {
  return {
    position: 'absolute',
    bottom: -3,
    right: -60,
    zIndex: -1
  }
})

export default function GrayCloud (): JSX.Element {
  return (
    <StyledImage src='/cloud.svg' width={322} height={280} alt='Cloud Image' />
  )
}
