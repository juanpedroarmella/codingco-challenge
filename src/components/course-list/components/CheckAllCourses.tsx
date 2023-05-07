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
    '@keyframes horizontal-scroll': {
      '0%': {
        transform: 'translateX(0%)'
      },
      '100%': {
        transform: 'translateX(-430%)'
      }
    },
    animation: 'horizontal-scroll 16s linear infinite',
    animationDelay: `${delay}s`,
    position: 'absolute',
    left: '100%'
  }
})

const Text = styled(Typography)(() => {
  return {
    color: '#E1DF3C',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '25px'
  }
})

interface Props {
  delay: number
}

export default function CheckAllCourses({ delay }: Props): JSX.Element {
  return (
    <Container delay={delay}>
      <Image
        src='/yellow-bear.svg'
        width={48}
        height={40}
        alt='Yellow Bear Image'
        loading='eager'
      />
      <Text>Chequea todos los cursos</Text>
      <Image
        src='/yellow-arrows.svg'
        width={45}
        height={19}
        alt='Yellow Bear Image'
        loading='eager'
      />
    </Container>
  )
}
