import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-purple-500 fill-purple-500" />
              <span className="text-2xl font-black text-white">
                E-<span className="text-purple-500">MOW</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Electric lawn care that doesn't compromise on style or sustainability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
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
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Payment Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lawn Mowing</li>
              <li>Trimming & Edging</li>
              <li>Lawn Care & Treatment</li>
              <li>Seasonal Services</li>
              <li>Custom Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>(515) EMO-LAWN</div>
                  <div>(515) 366-5296</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@e-mow.com" className="hover:text-purple-400 transition-colors">
                  emow.lawncare515@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>Serving the Greater Des Moines/Ankeny Area</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              &copy; {new Date().getFullYear()} E-MOW. All rights reserved. Powered by electric dreams.
            </div>
            <div className="flex gap-6">
  <a href="/legal" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
  <a href="/legal" className="hover:text-purple-400 transition-colors">Terms of Service</a>
</div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-green-500 to-purple-600" />
    </footer>
  );
}
