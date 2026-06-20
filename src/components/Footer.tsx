import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-900/50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-7 h-7 text-purple-500 fill-purple-500" />
              <span className="text-xl font-black text-white">
                E-<span className="text-purple-500">MOW</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Local father/son electric mowing.<br />
              Ankeny, Urbandale, and Central Iowa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = '/pay')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Pay Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+15157206948" className="hover:text-green-300 transition-colors">
                  (515) 720-6948
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:maplesrentals@gmail.com" className="hover:text-purple-400 transition-colors">
                  maplesrentals@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Ankeny, Urbandale, and Central Iowa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-purple-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <div>
              &copy; {new Date().getFullYear()} E-MOW Lawncare. All rights reserved.
            </div>
            <a href="/legal" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-green-500 to-purple-600" />
    </footer>
  );
}
