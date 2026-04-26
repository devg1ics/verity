import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import Process from './components/Process'
import ReportPreview from './components/ReportPreview'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <ReportPreview />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
