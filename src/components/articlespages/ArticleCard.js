import Link from 'next/link'
import Image from 'next/image'

const ArticleCard = ({ title, brief, date, coverimage, slug }) => {
  return (
    <div className='col-md-6 col-xl-4 mb-5'>
      <>
        <a
          className='card post-preview lift h-100'
          href={`https://chrisdevcode.hashnode.dev/${slug}`}
          target='_blank'
        >
          <img className='card-img-top' src={coverimage} alt='..' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{brief}</p>
          </div>
          <div className='card-footer'>
            <div className='post-preview-meta'>
              <Image
                className='post-preview-meta-img'
                width='36'
                height='36'
                src='/redditavataar.png'
                alt='Chris Achinga Reddit Avatar'
              />
              <div className='post-preview-meta-details'>
                <div className='post-preview-meta-details-name'>
                  Chris Achinga
                </div>
                <div className='post-preview-meta-details-date'>
                  {date} · 5 min read
                </div>
              </div>
            </div>
          </div>
        </a>
      </>
    </div>
  )
}

export default ArticleCard

ArticleCard.defaultProps = {
  title: 'Article Title',
  brief: 'Article Brief',
  date: 'Date',
  coverimage: 'https://source.unsplash.com/KE0nC8-58MQ/660x360',
}
