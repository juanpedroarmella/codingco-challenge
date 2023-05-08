import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import Notice from './Notice'
import data from '../data/notices'

const NoticesContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2.5%'
  }
})

const TwoNoticesContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '20%',
    [theme.breakpoints.down('lg')]: {
      width: '30%'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: 25
    }
  }
})

export default function NoticesList (): JSX.Element {
  const noticesList = useMemo(() => {
    const arr: JSX.Element[] = []
    for (let i = 0; i < data.length; i += 2) {
      const notices = []
      for (let j = i; j < i + 2; j++) {
        const notice = data[j]
        if (notice !== undefined) {
          notices.push(<Notice key={j} notice={notice} />)
        }
      }
      if (notices.length > 0) {
        arr.push(<TwoNoticesContainer key={i}>{notices}</TwoNoticesContainer>)
      }
    }
    return arr
  }, [])
  return <NoticesContainer>{noticesList}</NoticesContainer>
}
