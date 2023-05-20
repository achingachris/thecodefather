const ContactForm = () => {
  return (
    <>
      <form
        id='contactForm'
        method='post'
        action='https://formspree.io/f/xwkjzgjl'
      >
        {/* Name input*/}
        <div className='form-floating mb-3'>
          <input
            className='form-control'
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name...'
          />
          <label htmlFor='name'>Full name</label>
        </div>
        {/* Email address input*/}
        <div className='form-floating mb-3'>
          <input
            className='form-control'
            id='email'
            type='email'
            name='email'
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>
        {/* Message input*/}
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            id='message'
            type='text'
            placeholder='Enter your message here...'
            style={{ height: '10rem' }}
            name='message'
            defaultValue={''}
          />
          <label htmlFor='message'>Message</label>
        </div>

        {/* Submit Button*/}
        <div className='d-grid'>
          <button
            className='btn btn-primary btn-lg'
            id='submitButton'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
