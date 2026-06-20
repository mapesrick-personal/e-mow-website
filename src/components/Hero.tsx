import { TextQuoteLink } from './TextQuoteLink';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">

        {/* Logo Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/emow-logo.png"
            alt="E-MOW Lawncare"
            className="w-72 md:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          A quieter way to mow.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Local father/son electric mowing in Ankeny, Urbandale, and the small Central Iowa
          neighborhoods nearby. No contract, no phone call, free quote usually the same day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <TextQuoteLink className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-sm transition-all hover:shadow-2xl hover:shadow-green-500/40 hover:scale-105 text-center">
            Text Your Address
          </TextQuoteLink>
          <a
            href="#quote-form"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-500 text-gray-300 hover:border-gray-300 hover:text-white text-lg font-semibold rounded-sm transition-all text-center"
          >
            Use the Form
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Free quote, no commitment. We'll text you back today.
        </p>

      </div>
    </section>
  );
}
