import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const MainContainer = styled(Box)(({ theme }) => {
  return {
    minWidth: '50%'
  }
})

export default function CoursesAndWorkshops (): JSX.Element {
  return <MainContainer component='section' />
}
