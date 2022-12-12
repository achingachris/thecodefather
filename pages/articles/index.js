import Header from '../../src/components/articlespages/Header'
import ArticleCard from '../../src/components/articlespages/ArticleCard'
import Pagination from '../../src/components/articlespages/Pagination'

const ArticlesHome = () => {
  return (
    <>
      <Header />
      <section className='bg-light py-10'>
        <div className='container px-5'>
          <a
            className='card post-preview post-preview-featured lift mb-5 overflow-hidden'
            href='#!'
          >
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
                    <h5 className='card-title'>
                      Boots on the Ground, Inclusive Thought Provoking Ideas
                    </h5>
                    <p className='card-text'>
                      Empower communities and energize engaging ideas; scale and
                      impact do-gooders while disruptring industries. Venture
                      philanthropy benefits corporations and people by moving
                      the needle.
                    </p>
                  </div>
                  <hr />
                  <div className='post-preview-meta'>
                    <img
                      className='post-preview-meta-img'
                      src='assets/img/illustrations/profiles/profile-1.png'
                    />
                    <div className='post-preview-meta-details'>
                      <div className='post-preview-meta-details-name'>
                        Valerie Luna
                      </div>
                      <div className='post-preview-meta-details-date'>
                        Feb 5 · 6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className='row gx-5'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <Pagination />
        </div>
        <div className='svg-border-rounded text-light'>
          {/* Rounded SVG Border*/}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 144.54 17.34'
            preserveAspectRatio='none'
            fill='currentColor'
          >
            <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
          </svg>
        </div>
      </section>
    </>
  )
}

export default ArticlesHome
