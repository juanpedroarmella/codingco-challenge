import { styled } from '@mui/material/styles'

const StyledSvg = styled('svg')(({ theme }) => {
  return {
    verticalAlign: 'middle',
    '& path': {
      fill: theme.palette.text.primary,
      [theme.breakpoints.down('md')]: {
        fill: '#000000'
      }
    }
  }
})

export default StyledSvg
