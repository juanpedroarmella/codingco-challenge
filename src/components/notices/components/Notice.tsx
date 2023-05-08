import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import INotice from '../interfaces/INotice'

const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    '& img': {
      position: 'relative !important',
      border: '7px solid black'
    },
    '& figure': {
      margin: 0
    }
  }
})

const PublishDateContainer = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Work Sans',
    fontWeight: 'normal',
    color: '#707070',
    fontSize: '12px',
    '& p': {
      margin: 0
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      gap: 10,
      fontSize: '13px'
    }
  }
})

const NoticeTitle = styled('h4')(({ theme }) => {
  return {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      textAlign: 'center',
      margin: 10
    }
  }
})

interface Props {
  notice: INotice
}

export default function Notice ({ notice }: Props): JSX.Element {
  return (
    <Container>
      <Box component='figure' width='100%'>
        <a href={notice.href}>
          <Image src={notice.imgSrc} fill alt='Notice image' />
        </a>
      </Box>
      <NoticeTitle>
        <a href={notice.href}>{notice.title}</a>
      </NoticeTitle>
      <PublishDateContainer>
        <p>Publicado: {notice.publishDate}</p>
        <p>•</p>
        <Box
          display='flex'
          gap={1}
          alignItems='center'
          component='a'
          href={notice.href}
        >
          <p>Leer Más</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='21.888'
            height='12.063'
            viewBox='0 0 21.888 12.063'
          >
            <g>
              <g>
                <path
                  d='M-1169.345-1836.026l.064-.16,10.784,5.983v.1l-10.784,5.983-.064-.16,7.424-5.536h-18.464v-.607h18.528Z'
                  transform='translate(1180.385 1836.186)'
                  fill='#707070'
                />
              </g>
            </g>
          </svg>
        </Box>
      </PublishDateContainer>
    </Container>
  )
}
