import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { Services } from '../components/Services'
import { HowItWorks } from '../components/HowItWorks'
import { About } from '../components/About'
import { SeedPaper } from '../components/SeedPaper'
import { FAQ } from '../components/FAQ'
import { QuoteForm } from '../components/QuoteForm'
import { PaymentPortal } from '../components/PaymentPortal'
import { Footer } from '../components/Footer'
import { MobileStickyBar } from '../components/MobileStickyBar'
import { Legal } from './Legal'
import { Pay } from './Pay'

export default function App() {
  const path = window.location.pathname

  if (path === '/legal' || path === '/legal/') {
    return <Legal />
  }

  if (path === '/pay' || path === '/pay/') {
    return <Pay />
  }

  return (
    <div className="pb-20 md:pb-0">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <About />
      <SeedPaper />
      <FAQ />
      <QuoteForm />
      <PaymentPortal />
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
