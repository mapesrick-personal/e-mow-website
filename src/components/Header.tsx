import { Menu, Snowflake, X, Zap } from 'lucide-react';
import { useState } from 'react';

export function Header({ variant = 'mow' }: { variant?: 'mow' | 'snow' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSnow = variant === 'snow';

  // Falls back to navigating home when the section isn't on this page (e.g. About on /esnow).
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }
    window.location.href = `/#${id}`;
  };

  const quoteButtonClasses = isSnow
    ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/50'
    : 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/50';

  return (
    <header
      style={{ top: 'var(--banner-h, 0px)' }}
      className={`fixed left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b ${
        isSnow ? 'border-blue-900/50' : 'border-purple-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => (isSnow ? (window.location.href = '/') : scrollToSection('hero'))}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              {isSnow ? (
                <Snowflake className="w-8 h-8 text-blue-400 group-hover:text-sky-300 transition-colors" />
              ) : (
                <Zap className="w-8 h-8 text-purple-500 fill-purple-500 group-hover:text-green-400 group-hover:fill-green-400 transition-colors" />
              )}
              <div
                className={`absolute inset-0 blur-lg transition-colors ${
                  isSnow
                    ? 'bg-blue-500/30 group-hover:bg-sky-300/30'
                    : 'bg-purple-500/30 group-hover:bg-green-400/30'
                }`}
              />
            </div>
            {isSnow ? (
              <span className="text-2xl font-black text-white tracking-tight">
                <span className="text-blue-400 group-hover:text-sky-300 transition-colors">E-</span>SNOW
              </span>
            ) : (
              <span className="text-2xl font-black text-white tracking-tight">
                E-<span className="text-purple-500 group-hover:text-green-400 transition-colors">MOW</span>
              </span>
            )}
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
              onClick={() => scrollToSection('quote-form')}
              className={`px-6 py-2 text-white rounded-sm transition-all hover:shadow-lg ${quoteButtonClasses}`}
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
              onClick={() => scrollToSection('quote-form')}
              className={`px-6 py-2 text-white rounded-sm transition-colors ${quoteButtonClasses}`}
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
