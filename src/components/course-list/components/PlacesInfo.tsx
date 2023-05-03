import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'

const Container = styled(Box)<PlacesInfoProps>(({ places, opacity }) => {
  const colors = useMemo(() => {
    if (places === 'few') {
      return {
        background: 'rgba(225,223,60,0.9)',
        color: 'black'
      }
    }
    if (places === 'none') {
      return {
        background: 'rgba(255,31,87,0.9)',
        color: 'black'
      }
    }
    if (places === 'avaliable') {
      return {
        background: 'rgba(0,0,0,0.9)',
        color: '#E1DF3C'
      }
    }
  }, [places])

  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
    width: 144,
    height: 144,
    opacity,
    background: colors?.background,
    color: colors?.color,
    transition: 'opacity 0.3s ease',
    '& svg path': {
      fill: colors?.color
    }
  }
})

const Text = styled(Typography)(() => {
  return {
    fontSize: '15px'
  }
})

interface PlacesInfoProps {
  places: 'none' | 'few' | 'avaliable'
  opacity: 0 | 1
}

export default function PlacesInfo ({
  places,
  opacity
}: PlacesInfoProps): JSX.Element {
  const placesTextInfo = useMemo(() => {
    if (places === 'none') { return ['Sold out!', ' Reserva para la proxima edición'] }
    if (places === 'few') { return ['Quedan pocas plazas.', ' ¡No te quedes fuera!'] }
    if (places === 'avaliable') { return ['Hay plazas disponibles.', ' ¡Apúntate!'] }

    return []
  }, [places])
  return (
    <Container places={places} opacity={opacity}>
      <Box>
        <Text variant='h5' fontWeight='700'>
          {placesTextInfo[0]}
        </Text>
        <Text variant='h5' fontWeight='400'>
          {placesTextInfo[1]}
        </Text>
      </Box>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28.589'
        height='28.517'
        viewBox='0 0 28.589 28.517'
      >
        <g transform='translate(0 0)'>
          <g data-name='Grupo 11769'>
            <path
              d='M2182.668,1308.744a12.287,12.287,0,0,1,8.556,3.711,11.785,11.785,0,0,1,3.383,8.543,12.091,12.091,0,0,1-11.991,11.726,12.291,12.291,0,0,1-8.588-3.639,11.781,11.781,0,0,1-3.457-8.512,12.194,12.194,0,0,1,12.1-11.828m.014-2.268a14.259,14.259,0,1,0,14.2,14.573,14.394,14.394,0,0,0-14.2-14.573Z'
              transform='translate(-2168.296 -1306.476)'
              fill='#e1df3c'
            />
          </g>
          <g transform='translate(9.27 5.668)'>
            <g>
              <g>
                <path
                  d='M2184.542,1324.533l5.946-8.042.045.024-1.022,7.066h2.507l-5.955,8.055-.045-.024,1.024-7.078Z'
                  transform='translate(-2183.256 -1315.668)'
                  fill='#e1df3c'
                />
                <path
                  d='M2185.552,1332.035l-.887-.5.018-.463.917-6.337h-3.037l7.034-9.514.909.453-.021.486-.916,6.325h3.043Zm-.416-8.6h1.964l-.777,5.369,3.716-5.026h-1.971l.775-5.357Z'
                  transform='translate(-2182.563 -1315.221)'
                  fill='#e1df3c'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Container>
  )
}
