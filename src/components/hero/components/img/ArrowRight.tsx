import { styled } from '@mui/material/styles'

const Arrow = styled('svg')(({ theme }) => {
  return {
    '& path': {
      fill: theme.palette.text.primary
    }
  }
})

export default function ArrowRight (): JSX.Element {
  return (
    <Arrow
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='19.467'
      viewBox='0 0 15 19.467'
    >
      <g transform='translate(61.143 -16.142) rotate(90)'>
        <g transform='translate(16.142 48)'>
          <g>
            <path
              d='M2038.692,1329.5l-2.76-2.631,10.019-10.512,9.448,10.437-2.827,2.561-6.693-7.393Z'
              transform='translate(-2035.932 -1316.353)'
              fill='#e9e6e1'
            />
          </g>
        </g>
      </g>
    </Arrow>
  )
}
