import { styled } from '@mui/material/styles'
import StyledSvg from './StyledSvg'

const SvgSocial = styled(StyledSvg)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      width: '34px',
      height: '34px',
      margin: '13px',
      fill: '#707070'
    }
  }
})

export default SvgSocial
