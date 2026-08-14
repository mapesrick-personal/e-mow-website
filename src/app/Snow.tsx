import { ArrowLeft, Snowflake } from 'lucide-react';
import { Header } from '../components/Header'
import { SnowQuoteForm } from '../components/SnowQuoteForm'
import { Footer } from '../components/Footer'

export function Snow() {
  return (
    <div>
      <Header variant="snow" />

      <section className="relative pt-32 pb-12 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Snowflake className="w-14 h-14 text-blue-400" />
                <div className="absolute inset-0 blur-2xl bg-blue-500/30" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              <span className="text-blue-400">E-</span>SNOW
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Driveways and walks cleared through the '26/'27 winter, for the same Ankeny,
              Urbandale, and Central Iowa neighborhoods we mow. Spots are limited, so reserve
              yours before the schedule fills up.
            </p>
          </div>
        </div>
      </section>

      <SnowQuoteForm />
      <Footer />
    </div>
  );
}
