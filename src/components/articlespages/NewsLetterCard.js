import { FiSend } from 'react-icons/fi'

const NewsLetterCard = () => {
  return (
    <div className='row g-0'>
      <div className='col-lg-5'>
        <div
          className='post-preview-featured-img'
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/vZJdYl5JVXY/660x360")',
          }}
        />
      </div>
      <div className='col-lg-7'>
        <div className='card-body'>
          <div className='py-5'>
            <h5 className='card-title'>ChrisDevCode Monthly Newsletter</h5>
            <p className='card-text'>
              I try to summarize all the good stuff and tools in the internet
              for Software developers and send it to you once a month, for free.
              Sometimes I also share my own thoughts and ideas, ooh and Aviation
              Stuff!
            </p>
          </div>
          <hr />
          <div className='post-preview-meta'>
            <FiSend className='post-preview-meta-img' />
            <div className='post-preview-meta-details'>
              <div className='post-preview-meta-details-name'>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterCard
