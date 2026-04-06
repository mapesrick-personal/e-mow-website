import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-purple-500 fill-purple-500 group-hover:text-green-400 group-hover:fill-green-400 transition-colors" />
              <div className="absolute inset-0 blur-lg bg-purple-500/30 group-hover:bg-green-400/30 transition-colors" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              E-<span className="text-purple-500 group-hover:text-green-400 transition-colors">MOW</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Services
            </button>
            <button 
              onClick={() => scrollToSection('quote')} 
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-sm transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              Get Quote
            </button>
            <button
  onClick={() => (window.location.href = '/pay')}
  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm transition-all hover:shadow-lg hover:shadow-green-500/50"
>
  Pay Now
</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Services
            </button>
            <button 
              onClick={() => scrollToSection('quote')} 
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-sm transition-colors"
            >
              Get Quote
            </button>
            <button
  onClick={() => (window.location.href = '/pay')}
  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm transition-colors"
>
  Pay Now
</button>
          </nav>
        )}
      </div>
    </header>
  );
}
