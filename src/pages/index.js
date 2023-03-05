import AboutMe from '@/components/land/AboutMe'
import Header from '@/components/land/Header'
import ContactMe from '@/components/shared/ContactMe'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <ContactMe />
    </>
  )
}
