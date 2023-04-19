import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface Props {
  title: string
  paragraphs: string[]
}

const Container = styled(Box)(({ theme }) => {
  return {
    padding: '7px 20px',
    height: '125px',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    color: theme.palette.text.primary
  }
})

export default function FeaturedCourse ({
  title,
  paragraphs
}: Props): JSX.Element {
  return (
    <Container component='li'>
      <Typography
        variant='h6'
        fontWeight='bold'
        fontSize='20px'
        lineHeight='25px'
      >
        {title}
      </Typography>
      {paragraphs.map((text: string, index: number) => (
        <Typography variant='body1' fontSize='16px' key={`${text}-${index}`}>
          {text}
        </Typography>
      ))}
    </Container>
  )
}
