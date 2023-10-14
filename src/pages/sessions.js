import Header from '@/components/sessions/Header'
import Decks from '../components/sessions/Decks'

const sessions = () => {
  return (
    <div className='container px-5 my-5'>
    <Header />
    <div className='row gx-5 justify-content-center'>
      <div className='col-lg-11 col-xl-9 col-xxl-8'>
       <Decks />
      </div>
    </div>
  </div>
  )
}

export default sessions
