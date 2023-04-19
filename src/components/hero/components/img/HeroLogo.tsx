import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledHeroLogo = styled('svg')(({ theme }) => {
  return {
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '300px'
    },
    '& .arrow path, & .brother path,& .circle path  ': {
      fill: theme.palette.text.primary
    },
    '& .madrid path,& .circle circle ': {
      stroke: theme.palette.text.primary
    }
  }
})

const StyledLogoContainer = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    margin: 0,
    height: '251px',
    [theme.breakpoints.down('sm')]: {
      height: '150px'
    }
  }
})

export default function HeroLogo (): JSX.Element {
  return (
    <StyledLogoContainer component='h1'>
      <StyledHeroLogo
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 506 254.5'
      >
        <g transform='translate(25 19.048)' className='arrow'>
          <g transform='translate(69.811 70.441) rotate(90)'>
            <path d='M141.4-386.1v69.8h-14.9v-0.4l8.6-3.6v-61.7l-8.6-3.6v-0.4H141.4z' />
          </g>
          <g transform='translate(19.24)'>
            <path
              d='M387.5,143.5l-0.5-0.3l36.3-16.7l0.2,0.1l3.6,39.8l-0.5-0.3l-11.5-23l-14.9,40l-14.3-8.2
          l27.2-32.9L387.5,143.5z'
            />
          </g>
        </g>
        <g transform='translate(8 21.071)' className='brother'>
          <path
            d='M100.9,2.8H70.3C70.1,2.8,70,2.9,70,3c0,0,0,0,0,0V4c0,0.1,0.1,0.2,0.2,0.2l8.5,1.9v75.2
        l-8.5,1.9c-0.1,0-0.2,0.1-0.2,0.2v0.9c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h30.7c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0V3
        C101.2,2.9,101,2.8,100.9,2.8C100.9,2.8,100.9,2.8,100.9,2.8z'
          />
          <path
            d='M115.4,41.7c16.2-1.5,22.2-12.1,22.2-19.2v-0.4c0-12.1-9.5-19.3-25.5-19.3h-6.2
        c-0.1,0-0.3,0.1-0.3,0.3c0,0,0,0,0,0V4c0,0.1,0.1,0.3,0.3,0.3h2c5.8,0,8.2,5.3,8.2,18.1v0.9c0,13.5-1.8,17.8-7.4,17.8h-2.8
        c-0.1,0-0.3,0.1-0.3,0.3c0,0,0,0,0,0v0.9c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h2.5c3.2,0,5.2,1.2,6.6,3.9c1.5,3,2.2,8.1,2.2,15.9V65
        c0,17-3,18.2-8,18.2h-3.1c-0.1,0-0.3,0.1-0.3,0.3v0.9c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h6.8c9.6,0,17-2.5,22-7.3
        c3.8-3.7,6-8.8,6-14.1v-0.7C140.9,53.1,132.1,43.1,115.4,41.7z'
          />
          <path
            d='M185.4,25.1c-5.4-0.1-9.9,4.2-10.1,9.7c0,4.9,4.7,9.2,10.1,9.2c5.6,0,10.3-4.2,10.3-9.2
        C195.7,29.5,191.1,25.1,185.4,25.1z'
          />
          <path
            d='M179,83.5l-8.5-2V26.3c0-0.1-0.1-0.3-0.3-0.3h-24.7c-0.1,0-0.3,0.1-0.3,0.3v0v0.8
        c0,0.1,0,0.2,0.1,0.2l5.3,3.4v51.1l-6.2,1.7c-0.1,0-0.2,0.1-0.2,0.2v0.7c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h34.4
        c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-0.7C179.2,83.7,179.1,83.6,179,83.5z'
          />
          <path
            d='M222.2,25.1c-14.5,0.7-26.7,14.4-26.7,29.8v0.6c0,15.4,12.2,29,26.7,29.7h0
        c0.1,0,0.3-0.1,0.3-0.3v-0.7c0-0.1-0.1-0.2-0.2-0.3c-3-0.9-5.2-1.5-5.2-28.5v-0.6c0-26.7,2.1-27.5,5.1-28.6l0.1,0
        c0.1,0,0.2-0.1,0.2-0.2v-0.7c0-0.1,0-0.1-0.1-0.2C222.4,25.1,222.3,25.1,222.2,25.1z'
          />
          <path
            d='M227.5,25.1c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2v0.7c0,0.1,0.1,0.2,0.2,0.2
        l0.1,0c3,1.1,5.1,1.9,5.1,28.6v0.6c0,26.9-2.2,27.6-5.2,28.5c-0.1,0-0.2,0.1-0.2,0.2v0.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1
        h0c14.5-0.7,26.7-14.3,26.7-29.7v-0.6C254.3,39.5,242,25.9,227.5,25.1z'
          />
          <path
            d='M296.3,74.3l-0.5-0.3c-0.1-0.1-0.3-0.1-0.3,0c-1.8,2.2-4.5,3.5-7.3,3.5
        c-1.7,0-5.6-0.6-5.6-6V28.2h12.9c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-1.6c0-0.1-0.1-0.3-0.3-0.3l0,0h-12.9V8h-1.1l-18.6,16.6
        c-0.1,0-0.1,0.1-0.1,0.2v1.3h-5.1c-0.1,0-0.3,0.1-0.3,0.3c0,0,0,0,0,0v1.6c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h5.1v44.3
        c0,8.1,5.7,12.8,15.6,12.8c8.7,0,14.8-3.6,18.2-10.7C296.4,74.5,296.4,74.3,296.3,74.3z'
          />
          <path
            d='M327.7,83.5l-6.3-1.7V34l0.5-33.7c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1-0.1-0.2-0.1l-25.2,4
        c-0.1,0-0.2,0.1-0.2,0.3V5c0,0.1,0,0.2,0.1,0.2l5.3,3.4v73.2l-6.1,1.7c-0.1,0-0.2,0.1-0.2,0.2v0.7c0,0.1,0.1,0.3,0.3,0.3
        c0,0,0,0,0,0h32.2c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-0.7C327.9,83.7,327.8,83.6,327.7,83.5z'
          />
          <path
            d='M362.5,83.5l-6.2-1.7V40.7c0-9.8-5.6-15.6-15-15.6c-5.6,0.2-10.9,2.1-15.2,5.6
        c-0.1,0-0.1,0.1-0.1,0.2v0.7c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0c6.9,0,10.2,3.2,10.2,10.2v39.7l-5.2,1.7c-0.1,0-0.2,0.1-0.2,0.2
        v0.7c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h31.2c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-0.7C362.7,83.7,362.6,83.6,362.5,83.5z'
          />
          <path
            d='M417,73.2c-0.1-0.1-0.2-0.1-0.3-0.1c-3.9,2.2-8.2,3.5-12.7,3.6
        c-11.1,0-17.7-8.7-17.7-23.4v-0.7c0-21.5,3.6-25.3,7.1-26.2c0.1,0,0.2-0.1,0.2-0.2v-0.7c0-0.1-0.1-0.3-0.3-0.3c0,0,0,0,0,0
        c-7.5,0.1-14.6,3.3-19.6,8.8c-5.7,6.2-8.8,14.4-8.7,22.8v0.5c0,16.7,10.7,27.9,26.5,27.9c10.5,0,19.4-3.9,25.9-11.1
        c0.1-0.1,0.1-0.2,0-0.3L417,73.2z'
          />
          <path
            d='M398.5,25.1c-0.1,0-0.3,0.1-0.3,0.2c0,0,0,0.1,0,0.1c1.5,5.3,2,13.9,1.4,24.2l-7.9,0.6
        c-0.1,0-0.2,0.1-0.2,0.3v0.8c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0H419c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-1.9
        C419.2,38.6,410.9,26.2,398.5,25.1z'
          />
          <path
            d='M473.4,34.8c0-5.3-4.6-9.7-10.3-9.7c-5.4-0.1-9.9,4.2-10.1,9.7c0,4.9,4.7,9.2,10.1,9.2
        C468.6,44,473.4,39.8,473.4,34.8z'
          />
          <path
            d='M456.6,83.5l-8.5-2V26.3c0-0.1-0.1-0.3-0.3-0.3c0,0,0,0,0,0h-24.7c-0.1,0-0.3,0.1-0.3,0.3
        c0,0,0,0,0,0v0.8c0,0.1,0,0.2,0.1,0.2l5.3,3.4v51.1l-6.2,1.7c-0.1,0-0.2,0.1-0.2,0.2v0.7c0,0.1,0.1,0.3,0.3,0.3c0,0,0,0,0,0h34.4
        c0.1,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0v-0.7C456.8,83.7,456.7,83.6,456.6,83.5z'
          />
        </g>
        <g transform='translate(0 30.227)' className='circle'>
          <g fill='none' stroke='#000000' strokeWidth='3'>
            <circle cx='33' cy='33' r='33' stroke='none' />
            <circle cx='33' cy='33' r='32' fill='none' />
          </g>
          <g transform='translate(16 33)'>
            <path
              d='M-1188.148-1847.033v-1.26h35v1.26Z'
              transform='translate(1188.148 1848.293)'
              fill='#656565'
            />
          </g>
        </g>
        <g
          transform='translate(31 20.124)'
          fill='transparent'
          stroke='#656565'
          strokeWidth='0.6'
          className='madrid'
        >
          <path
            d='M0,213c2.7-8.4,4.1-15.5,4.1-21.3v-46.2c0-4.2-1.1-9.5-3.3-15.8v-0.3h13.8l28.1,72.8
      L71,129.2h12.3v0.4c-1.3,5.2-2.1,10.5-2.2,15.8v51.9c0.2,5.3,0.9,10.6,2.2,15.8v0.4H68.8v-0.4c1.3-5.2,2.1-10.5,2.2-15.8v-56
      l-28,72.2h-4.8v-0.1l-1.8,0.1L8.8,141.6c0,0.5,0,1.1-0.1,2s-0.1,1.5-0.1,1.9v46.2c0,5.8,1.4,12.9,4.1,21.3v0.6H0V213z'
          />
          <path
            d='M89.2,197.2c0-6.6,2.7-11.4,8.2-14.3c5.1-2.8,10.8-4.3,16.6-4.4c2.7,0,5.5,0.3,8.2,0.8
      c1.2,0.2,2.4,0.4,3.6,0.8v-7.7c0-4.4-1.1-7.7-3.2-10.1c-2.1-2.3-5-3.6-8.1-3.5c-3.4,0-7.3,1.5-11.6,4.5c-3.7,2.4-7,5.4-9.8,8.8
      h-0.4v-12.5c8-3.2,15.3-4.8,22.1-4.8c6.4,0,11.4,1.5,15.2,4.6c3.7,3.1,5.6,7.4,5.6,12.9v30.4c0,2.6,0.5,4.2,1.6,5
      c0.9,0.7,2,1.1,3.1,1.1c0.9,0,1.8-0.2,2.7-0.5l0.1,0.4c-1.4,3.2-4.7,5.2-8.2,5c-2.2,0.1-4.4-0.7-6.1-2.2c-1.7-1.6-2.7-3.8-2.7-6.1
      c-4.2,5.7-10.9,9-18,8.8c-5.7,0-10.2-1.7-13.6-5C91,206.1,89.1,201.7,89.2,197.2z M99.5,196.3c-0.1,3.4,1.3,6.6,3.8,8.9
      c2.4,2.3,5.7,3.6,9.1,3.5c5.1,0,9.6-2.5,13.5-7.5v-17.9c-0.4,0-0.7,0-1.1-0.1c-2.5-0.5-5.1-0.8-7.7-0.8c-4.2,0-8.3,1.2-11.9,3.4
      C101.4,188.1,99.5,191.6,99.5,196.3L99.5,196.3z'
          />
          <path
            d='M152.4,162.9c4.4-5.1,10.8-8,17.6-8c6.4-0.2,12.5,2.8,16.3,8v-18.7
      c0.1-5.3-0.9-10.5-2.9-15.3v-0.4l12.6-2v70.8c0.2,5.3,0.9,10.6,2.2,15.8v0.4h-9.2c-0.2-0.5-0.5-1.9-1.1-3.9
      c-0.5-1.7-0.9-3.5-1.2-5.3c-4.6,6.7-10.7,10.1-18.3,10.1c-6.4,0.1-12.6-2.7-16.6-7.7c-4.4-5.1-6.6-12.2-6.6-21.3
      C145.1,175.6,147.5,168.2,152.4,162.9z M159.8,201.8c2.7,4.7,6.7,7,11.8,7c5.2,0,10.1-2.8,14.5-8.5v-33.1
      c-3.8-4.5-8.3-6.8-13.5-6.8c-5-0.1-9.7,2.4-12.4,6.6c-3,4.4-4.6,10.2-4.6,17.6C155.7,191.5,157.1,197.2,159.8,201.8z'
          />
          <path
            d='M206.4,155.9v-0.3h11.8v9.4c2.4-4.1,5.3-6.8,8.5-8.2c2.7-1.3,5.7-2,8.7-2.2
      c2,0,4,0.3,6,0.9l-1.4,11.2h-0.4c-1.6-1.4-3.5-2.5-5.6-3.2c-1.4-0.5-2.9-0.7-4.4-0.8c-1.7,0.1-3.4,0.4-5.1,0.9
      c-2.5,0.9-4.7,2.4-6.4,4.4v29.4c0.2,5.3,0.9,10.6,2.2,15.8v0.4h-14v-0.4c1.3-5.2,2.1-10.5,2.2-15.8v-25.6
      C208.5,166.3,207.8,161,206.4,155.9z'
          />
          <path
            d='M250.8,129.1c1.3-1.3,3.2-2,5-2c1.9,0,3.8,0.7,5.1,2c1.4,1.3,2.1,3.1,2.1,5
      c0,1.9-0.7,3.7-2.1,5c-1.4,1.4-3.2,2.1-5.1,2c-1.9,0-3.7-0.7-5-2c-1.4-1.3-2.1-3.1-2.1-5C248.6,132.2,249.4,130.4,250.8,129.1z
       M249.2,213.1c1.3-5.2,2.1-10.5,2.2-15.8v-25.6c-0.2-5.3-0.9-10.6-2.2-15.8v-0.3h11.7v41.8c0.2,5.3,0.9,10.6,2.2,15.8v0.4h-13.9
      L249.2,213.1z'
          />
          <path
            d='M277.9,162.9c4.4-5.1,10.8-8,17.6-8c6.4-0.2,12.5,2.8,16.3,8v-18.7
      c0.1-5.3-0.9-10.5-2.9-15.3v-0.4l12.6-2v70.8c0.2,5.3,0.9,10.6,2.2,15.8v0.4h-9.2c-0.2-0.5-0.5-1.9-1.1-3.9
      c-0.5-1.7-0.9-3.5-1.2-5.3c-4.6,6.7-10.7,10.1-18.3,10.1c-6.4,0.1-12.6-2.7-16.6-7.7c-4.4-5.1-6.6-12.2-6.6-21.3
      C270.6,175.6,273,168.2,277.9,162.9z M285.4,201.8c2.7,4.7,6.7,7,11.8,7c5.2,0,10.1-2.8,14.5-8.5v-33.1c-3.8-4.5-8.3-6.8-13.5-6.8
      c-5-0.1-9.7,2.4-12.4,6.6c-3,4.4-4.6,10.2-4.6,17.6C281.3,191.5,282.6,197.2,285.4,201.8z'
          />
        </g>
      </StyledHeroLogo>
    </StyledLogoContainer>
  )
}
