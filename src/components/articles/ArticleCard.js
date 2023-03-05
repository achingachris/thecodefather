import Image from 'next/image'

const ArticleCard = ({ title, slug, image, brief }) => {
  return (
    <div className='mt-5'>
      <div className='row'>
        <div className='col-md-7'>
          <a href='#'>
            <Image
              className='img-fluid rounded mb-3 mb-md-0'
              src={image}
              width={700}
              height={300}
              alt=''
            />
          </a>
        </div>
        <div className='col-md-5'>
          <h3>{title}</h3>
          <p>
            {brief}
          </p>
          <a
            className='btn btn-primary'
            href={`https://chrisdevcode.hashnode.dev/${slug}`}
            target={'_blank'}
          >
            Full Article
          </a>
        </div>
      </div>
      {/* /.row */}
      <hr />
    </div>
  )
}

export default ArticleCard
ArticleCard.defaultProps = {
  image: 'https://via.placeholder.com/700x300',
}
// 'https://via.placeholder.com/700x300'
