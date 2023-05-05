import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const MainContainer = styled(Box)(() => {
  return {
    minWidth: '33.3%',
    textAlign: 'left',
    '& em': {
      textDecoration: 'underline',
      fontStyle: 'normal'
    }
  }
})

const Title = styled('h3')(({ theme }) => {
  return {
    fontFamily: 'Larken',
    fontSize: 39,
    color: '#000000',
    marginTop: 0,
    marginBottom: '50px',
    fontWeight: '100',
    fontStyle: 'normal',
    display: 'inline-block',
    position: 'relative',
    '&:before': {
      '@keyframes rotate': {
        '0%': {
          transform: 'rotate(0)'
        },
        '50%': {
          transform: 'rotate(20deg)'
        },

        '100%': {
          transform: 'rotate(0)'
        }
      },
      animation: 'rotate 3s ease infinite',
      backgroundImage: 'url(/yellow-trap.svg)',
      backgroundSize: 'cover',
      content: '""',
      position: 'absolute',
      top: 0,
      right: -20,
      width: '130px',
      height: '130px',
      zIndex: -1
    }
  }
})

const Text = styled('p')(() => {
  return {
    fontFamily: 'Work Sans',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '20px'
  }
})

export default function Description (): JSX.Element {
  return (
    <MainContainer component='section'>
      <Title>
        Mucho mas <br /> que una escuela de <br />{' '}
        <b>
          <em>creativos</em>
        </b>
      </Title>
      <Text>
        Un Brother es alguien que <em>piensa continuamente,</em> inquieto,
        <b> curioso</b> y reflexivo.
      </Text>
      <Text>
        Que se <em>plantea preguntas</em> y busca las respuestas. Un Brother es
        alguien que se abre camino, proactivo, que tiene iniciativas, que
        <b> busca oportunidades.</b>
      </Text>
      <Text>
        Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea y que
        si gana, sigue a por más.
      </Text>
      <Text>
        Y si pierde{' '}
        <b>
          no se rinde <em>jamás.</em>
        </b>
      </Text>
    </MainContainer>
  )
}
