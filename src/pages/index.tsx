import { Header } from '~/container/Header'
import { Services } from '~/container/Services'
import { OurStory } from '~/container/OurStory'
import { WorkingHours } from '~/container/WorkingHours'
import { Footer } from '~/container/Footer'

export default function Home() {

  return (
    <div>
      <Header />
      <Services />
      <OurStory />
      <WorkingHours />
      <Footer />
      </div>
  )
      
}
