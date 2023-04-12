import { styled } from '@mui/material/styles'
import StyledSvg from './StyledSvg'

interface Props {
  color?: string
}

const SvgSocial = styled(StyledSvg)<Props>(({ theme, color }) => {
  return {
    '& path': {
      [theme.breakpoints.down('md')]: {
        fill: color ?? '#707070'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '34px',
      height: '34px',
      margin: '13px'
    }
  }
})

export default SvgSocial
