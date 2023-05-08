import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const Container = styled(Box)(({ delay }: Props) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    height: '100%',
    width: 468,
    '@keyframes horizontal-scroll-notices': {
      '0%': {
        transform: 'translateX(0%)'
      },
      '100%': {
        transform: 'translateX(-510%)'
      }
    },
    animation: 'horizontal-scroll-notices 16s linear infinite',
    animationDelay: `${delay}s`,
    position: 'absolute',
    left: '100%'
  }
})

const Text = styled(Typography)(() => {
  return {
    color: '#E9E6E1',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '25px'
  }
})

interface Props {
  delay: number
}

export default function CheckAllCourses ({ delay }: Props): JSX.Element {
  return (
    <Container delay={delay}>
      <Image
        src='/white-smile.svg'
        width={48}
        height={40}
        alt='White Smile Image'
        loading='eager'
      />
      <Text>Revisá todas las noticias</Text>
      <Image
        src='/white-arrows.svg'
        width={45}
        height={19}
        alt='White Arrow Image'
        loading='eager'
      />
    </Container>
  )
}
