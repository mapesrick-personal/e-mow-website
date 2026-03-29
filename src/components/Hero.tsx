import { Zap, Leaf } from 'lucide-react';
import { EmowCrewCharacters } from './EmowCrewCharacters';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1678424059788-e9a272786b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBnYXJkZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzcxODY2NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark garden"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black" />
      </div>

      {/* Lightning Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-16 h-16 text-purple-500 fill-purple-500 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            E-<span className="text-purple-500">MOW</span>
          </h1>
          <Leaf className="w-16 h-16 text-green-500 fill-green-500" />
        </div>
        
        {/* E-MOW Crew Characters */}
        <div className="flex justify-center mb-8">
          <div className="w-64 md:w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300">
            <EmowCrewCharacters />
          </div>
        </div>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light italic">
          Darkness meets <span className="text-green-400">green</span> energy
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We're not your typical lawn care company. We're the <span className="text-purple-400 font-semibold">rebels</span> of the industry—
          all-electric, eco-conscious, and here to make your lawn look killer without killing the planet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('quote')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-sm transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
          >
            Get Your Quote
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10 text-lg rounded-sm transition-all hover:shadow-xl hover:shadow-green-500/30"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-black/50 border border-purple-900/50 p-6 rounded-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Electric Equipment</div>
          </div>
          <div className="bg-black/50 border border-purple-900/50 p-6 rounded-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-green-400 mb-2">0</div>
            <div className="text-gray-400">Carbon Emissions</div>
          </div>
          <div className="bg-black/50 border border-purple-900/50 p-6 rounded-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-purple-400 mb-2">∞</div>
            <div className="text-gray-400">Style Points</div>
          </div>
        </div>
      </div>
    </section>
  );
}
