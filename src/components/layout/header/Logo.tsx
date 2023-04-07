import { styled } from '@mui/material/styles'

interface StyledLogoProps {
  fillColor: string
}

const StyledLogo = styled('svg')<StyledLogoProps>(({ fillColor }) => {
  return {
    '& path': {
      fill: fillColor
    }
  }
})

const Logo: React.FC = (): JSX.Element => {
  return (
    <StyledLogo
      fillColor='white'
      xmlns='http://www.w3.org/2000/svg'
      width='116.847'
      height='24.713'
      viewBox='0 0 116.847 24.713'
    >
      <g
        id='Grupo_12704'
        data-name='Grupo 12704'
        transform='translate(-1.83 -170.568)'
      >
        <g
          id='Grupo_12297'
          data-name='Grupo 12297'
          transform='translate(1.83 170.568)'
        >
          <path
            id='Trazado_12002'
            data-name='Trazado 12002'
            d='M10.783,170.966H1.9a.073.073,0,0,0-.073.075v.268a.072.072,0,0,0,.057.071l2.454.561v21.786l-2.454.559a.076.076,0,0,0-.057.073v.268a.075.075,0,0,0,.073.075h8.88a.075.075,0,0,0,.073-.075V171.041A.073.073,0,0,0,10.783,170.966Z'
            transform='translate(-1.83 -170.158)'
          />
          <path
            id='Trazado_12003'
            data-name='Trazado 12003'
            d='M9.726,182.227c4.705-.429,6.432-3.508,6.432-5.559v-.1c0-3.506-2.761-5.6-7.387-5.6H6.987a.075.075,0,0,0-.075.075v.268a.075.075,0,0,0,.075.073h.582c1.68,0,2.365,1.521,2.365,5.252v.268c0,3.9-.523,5.151-2.147,5.151h-.8a.075.075,0,0,0-.075.073v.268a.075.075,0,0,0,.075.075h.728a1.9,1.9,0,0,1,1.9,1.124,11.065,11.065,0,0,1,.647,4.6V189c0,4.927-.88,5.283-2.328,5.283H7.024a.076.076,0,0,0-.075.075v.268a.076.076,0,0,0,.075.075H8.988c2.778,0,4.919-.712,6.365-2.115A5.739,5.739,0,0,0,17.1,188.5v-.2C17.1,185.537,14.574,182.646,9.726,182.227Z'
            transform='translate(3.422 -170.158)'
          />
        </g>
      </g>
    </StyledLogo>
  )
}

export default Logo
