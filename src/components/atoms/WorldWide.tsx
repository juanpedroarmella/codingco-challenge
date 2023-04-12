import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Globe from '../layout/header/components/icons/Globe'

const BlackContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: '75px',
    padding: '19px 33px'
  }
})

const WolrdWide: React.FC = (): JSX.Element => {
  return (
    <BlackContainer component='li'>
      <Globe color='#E9E6E1' />
      <Typography
        variant='h6'
        color='#E9E6E1'
        fontSize='31.25px'
        fontFamily='Larken'
        fontWeight='light'
      >
        Worldwide
      </Typography>
      <Globe color='#E9E6E1' />
    </BlackContainer>
  )
}

export default WolrdWide
