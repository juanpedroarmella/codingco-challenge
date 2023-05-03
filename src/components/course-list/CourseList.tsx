import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CoursesAndWorkshops from './components/CoursesAndWorkshops'
import Description from './components/Description'

const Bg = styled(Box)(({ theme }) => {
  return {
    minHeight: '95vh',
    position: 'relative',
    zIndex: 13,
    backgroundColor: theme.palette.background.paper
  }
})

const MainContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    paddingTop: 90,
    paddingBottom: 40,
    margin: 'auto',
    justifyContent: 'space-between',
    gap: '8.33%',
    [theme.breakpoints.down(1000)]: {
      flexDirection: 'column',
      gap: '50px'
    },
    [theme.breakpoints.down(576)]: {
      paddingLeft: 30,
      paddingRight: 30
    },
    [theme.breakpoints.up(576)]: {
      maxWidth: theme.breakpoints.values.xs
    },
    [theme.breakpoints.up(768)]: {
      maxWidth: theme.breakpoints.values.sm
    },
    [theme.breakpoints.up(992)]: {
      maxWidth: theme.breakpoints.values.md
    },
    [theme.breakpoints.up(1200)]: {
      maxWidth: 1140
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  }
})

export default function CourseList (): JSX.Element {
  return (
    <Bg component='section'>
      <MainContainer>
        <Description />
        <CoursesAndWorkshops />
      </MainContainer>
    </Bg>
  )
}
