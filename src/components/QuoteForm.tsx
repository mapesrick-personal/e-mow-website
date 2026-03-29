import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'mowing',
    frequency: 'weekly',
    lawnSize: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Quote request:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get Your <span className="text-purple-500">Quote</span>
          </h2>
          <p className="text-xl text-gray-400">
            Tell us what you need, and we'll hook you up with a custom quote
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-950/50 border border-green-500/50 p-6 rounded-sm flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <p className="text-green-400">
              Thanks! We'll get back to you within 24 hours with your custom quote.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black/80 border border-purple-900/50 p-8 rounded-sm backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2 font-semibold">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="lawnSize" className="block text-gray-300 mb-2 font-semibold">
                Lawn Size (sq ft)
              </label>
              <input
                type="text"
                id="lawnSize"
                name="lawnSize"
                value={formData.lawnSize}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Approx. size"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-300 mb-2 font-semibold">
              Service Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="123 Dark Lane, Gothville, ST 12345"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="service" className="block text-gray-300 mb-2 font-semibold">
                Primary Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="mowing">Lawnmowing only</option>
                <option value="mowing-trimming">Lawnmowing and trimming</option>
                <option value="other">Other (please add details below)</option>
              </select>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-gray-300 mb-2 font-semibold">
                Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="onetime">One-time Service</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Any specific requirements or questions?"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-sm transition-all hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Request Quote
          </button>
        </form>
      </div>
    </section>
  );
}
