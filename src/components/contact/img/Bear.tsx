import { styled } from '@mui/material/styles'
import Image from 'next/image'

const Container = styled('div')(() => {
  return {
    '& img': {
      position: 'relative !important'
    }
  }
})

export default function BearSection(): JSX.Element {
  return (
    <Container>
      <Image src='/bear.gif' alt='Bear Gif' fill />
    </Container>
  )
}
