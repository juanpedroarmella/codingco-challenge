import { styled } from '@mui/material/styles'

const Misc = styled('svg')(({ theme }) => {
  return {
    width: 458,
    height: 320,
    position: 'absolute',
    bottom: -70,
    left: '20%',
    zIndex: -1,
    '& path': {
      stroke: '#E1DF3C'
    },
    [theme.breakpoints.down('lg')]: {
      left: '10%'
    },
    [theme.breakpoints.down('md')]: {
      left: '-10%'
    }
  }
})

export default function YellowMisc (): JSX.Element {
  return (
    <Misc
      xmlns='http://www.w3.org/2000/svg'
      width='282'
      height='198.3'
      viewBox='0 0 282 198.3'
    >
      <path
        d='M234.36,87.083A41.9,41.9,0,0,0,195.3,30.15a41.637,41.637,0,0,0-23.235,7.062A69.756,69.756,0,0,0,41.85,72c0,1.177.044,2.354.087,3.531A62.792,62.792,0,0,0,62.775,197.55H223.2A55.8,55.8,0,0,0,234.36,87.083Z'
        transform='translate(1.5 -0.75)'
        fill='none'
        strokeWidth='2'
      />
    </Misc>
  )
}
