import { styled } from '@mui/material/styles'

interface StyledSvgProps {
  scrolled: string
}

const StyledSvg = styled('svg')<StyledSvgProps>(({ theme, scrolled }) => {
  return {
    verticalAlign: 'middle',
    '& path': {
      fill: scrolled === 'true' ? '#FFFFFF' : theme.palette.text.primary,
      [theme.breakpoints.down('md')]: {
        fill: '#000000'
      }
    }
  }
})

export default StyledSvg
