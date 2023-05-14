/* eslint-disable @next/next/no-img-element */
const ProjectCard = ({
  projectName,
  projectDescription,
  projectImageBanner,
  projectGitHubLink,
  projectLiveLink,
}) => {
  return (
    <div className='card overflow-hidden shadow rounded-4 border-0 mb-5'>
      <div className='card-body p-0'>
        <div className='d-flex align-items-center'>
          <div className='p-5'>
            <h2 className='fw-bolder'>{projectName}</h2>
            <p>{projectDescription}</p>
            <a
              className='text-decoration-none'
              href={projectGitHubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bi bi-github' />
            </a>
            <span className='mx-5' />
            <a
              className='text-decoration-none'
              href={projectLiveLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Preview
            </a>
          </div>
          <img
            className='img-fluid'
            src={projectImageBanner}
            alt={projectName}
            width='300'
            height='400'
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

ProjectCard.defaultProps = {
  projectName: 'Project Name',
  projectDescription: 'Project Description',
  projectImageBanner: 'https://dummyimage.com/300x400/343a40/6c757d',
  projectGitHubLink: 'https://github.com/achingachris/',
  projectLiveLink: 'https://github.com/achingachris/',
}
