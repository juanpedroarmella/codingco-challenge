import GoToTop from '@/components/atoms/GoToTop'
import CourseList from '@/components/course-list/CourseList'
import Hero from '@/components/hero/Hero'
import Notices from '@/components/notices/Notices'

export default function Home (): JSX.Element {
  return (
    <>
      <Hero />
      <CourseList />
      <Notices />
      <GoToTop />
    </>
  )
}
