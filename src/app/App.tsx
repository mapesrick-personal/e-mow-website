import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { QuoteForm } from '../components/QuoteForm'
import { PaymentPortal } from '../components/PaymentPortal'
import { Footer } from '../components/Footer'
import { Legal } from './Legal'

export default function App() {
  const path = window.location.pathname

  if (path === '/legal') {
    return <Legal />
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