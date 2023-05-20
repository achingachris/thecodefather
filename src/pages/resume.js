import Header from '@/components/resume/Header'
import Experience from '@/components/resume/Experience'
import Volunteer from '@/components/resume/Volunteer'
import Skills from '@/components/resume/Skills'
const resume = () => {
  return (
    <div className='container px-5 my-5'>
      <Header />
      <div className='row gx-5 justify-content-center'>
        <div className='col-lg-11 col-xl-9 col-xxl-8'>
          <Experience />
          <Volunteer />
          <div className='pb-5' />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default resume
