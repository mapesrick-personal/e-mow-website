import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { TextQuoteLink } from './TextQuoteLink';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    lotSize: '',
    serviceInterest: '',
    message: '',
    smsConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        address: '',
        lotSize: '',
        serviceInterest: '',
        message: '',
        smsConsent: false,
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <section id="quote-form" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get a <span className="text-purple-500">free quote</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Text us your address, or use the form below. We'll send back a price the same day.
          </p>
          <TextQuoteLink className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-sm transition-colors text-lg">
            Text (515) 720-6948
          </TextQuoteLink>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-950/50 border border-green-500/50 p-6 rounded-sm flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <p className="text-green-400">
              Thanks! We'll text or email back the same day.
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
                placeholder="(515) 555-1234"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-300 mb-2 font-semibold">
              Property Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="123 Main St, Ankeny, IA 50023"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="lotSize" className="block text-gray-300 mb-2 font-semibold">
                Approximate Lot Size *
              </label>
              <select
                id="lotSize"
                name="lotSize"
                value={formData.lotSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Select lot size</option>
                <option value="under-quarter">Under 1/4 acre</option>
                <option value="quarter-to-half">1/4 to 1/2 acre</option>
                <option value="half-to-threequarter">1/2 to 3/4 acre</option>
                <option value="over-threequarter">Over 3/4 acre</option>
              </select>
            </div>

            <div>
              <label htmlFor="serviceInterest" className="block text-gray-300 mb-2 font-semibold">
                Service Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Select one</option>
                <option value="one-time">One-time mow</option>
                <option value="recurring">Recurring mowing</option>
                <option value="seasonal">Seasonal cleanup</option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
              Anything else?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Any specific requests or questions?"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-start gap-3 text-gray-300">
              <input
                type="checkbox"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 accent-purple-600"
              />
              <span className="text-sm leading-relaxed">
                I agree to receive SMS messages from E-Mow Lawncare related to my quote request.
                Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
                Reply HELP for help. See our{' '}
                <a href="/legal" className="text-green-400 hover:text-green-300 underline">
                  Privacy Policy and Terms
                </a>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-sm transition-all hover:shadow-xl hover:shadow-green-500/40"
          >
            Send My Address
          </button>
          <p className="mt-3 text-sm text-gray-500 text-center">
            We'll text or email back the same day.
          </p>
        </form>
      </div>
    </section>
  );
}
