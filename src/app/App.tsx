import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { QuoteForm } from '../components/QuoteForm'
import { PaymentPortal } from '../components/PaymentPortal'
import { Footer } from '../components/Footer'
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
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <QuoteForm />
      <PaymentPortal />
      <Footer />
    </div>
  )
}