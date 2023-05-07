import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    height: '100%',
    width: 468
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

export default function CheckAllCourses (): JSX.Element {
  return (
    <Container>
      <Image
        src='/yellow-bear.svg'
        width={48}
        height={40}
        alt='Yellow Bear Image'
      />
      <Text>Checkea todos los cursos</Text>
      <Image
        src='/yellow-arrows.svg'
        width={45}
        height={19}
        alt='Yellow Bear Image'
      />
    </Container>
  )
}
