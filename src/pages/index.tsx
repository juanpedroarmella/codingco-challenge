import GoToTop from '@/components/atoms/GoToTop'
import CourseList from '@/components/course-list/CourseList'
import Hero from '@/components/hero/Hero'

export default function Home (): JSX.Element {
  return (
    <>
      <Hero />
      <CourseList />
      <GoToTop />
    </>
  )
}
