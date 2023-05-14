/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import ProjectCard from '@/components/projects/ProjectCard'

const projects = () => {
  return (
    <>
      <section className='py-5'>
        <div className='container px-5 mb-5'>
          <div className='text-center mb-5'>
            <h1 className='display-5 fw-bolder mb-0'>
              <span className='text-gradient d-inline'>Projects</span>
            </h1>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-11 col-xl-9 col-xxl-8'>
              <ProjectCard
                projectName='React Router and Bootstrap Starter Template'
                projectDescription='React Bootstrap Starter is a starter template for react and bootstrap created by Chris Achinga. This theme uses Create React App, react-bootstrap and gh-pages.'
                projectImageBanner='/projects/reactbootstrap.png'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Call to action section*/}
      <section className='py-5 bg-gradient-primary-to-secondary text-white'>
        <div className='container px-5 my-5'>
          <div className='text-center'>
            <h2 className='display-4 fw-bolder mb-4'>
              Let's build something together
            </h2>
            <Link href='/contact' legacyBehavior>
              <a className='btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder'>
                Contact me
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default projects
