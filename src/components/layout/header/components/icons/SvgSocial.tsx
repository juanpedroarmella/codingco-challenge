import { styled } from '@mui/material/styles'
interface Props {
  fill?: string
}

const SvgSocial = styled('svg')<Props>(({ fill }) => {
  return {
    verticalAlign: 'middle',
    '& path': {
      fill
    }
  }
})

export default SvgSocial
