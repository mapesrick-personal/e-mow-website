import { ArrowLeft, CreditCard, ShieldCheck } from 'lucide-react';

export function Pay() {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-green-500">Payment</span> Portal
          </h1>
          <p className="text-xl text-gray-400">
            Pay securely with card, PayPal, or Venmo
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-black/80 border border-green-900/50 p-8 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-black">Quick Pay</h2>
            </div>

            <p className="text-gray-400 mb-6">
              Use the payment options below to make a one-time payment.
            </p>

            <div
              id="paypal-button-container"
              className="bg-zinc-950 border border-zinc-800 rounded-sm p-6"
            >
              <p className="text-gray-400">
                PayPal checkout buttons will render here after you connect your PayPal business account.
              </p>
            </div>
          </div>

          <div className="bg-black/80 border border-purple-900/50 p-8 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-black">Auto-Pay</h2>
            </div>

            <p className="text-gray-400 mb-4">
              Auto-Pay will use the same secure payment platform, but recurring billing setup is a separate step.
            </p>

            <p className="text-gray-300">
              For now, use Quick Pay for one-time payments. Once you’re ready, I can wire a proper subscription setup for Auto-Pay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}