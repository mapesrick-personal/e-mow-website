import { CreditCard, Calendar } from 'lucide-react';

export function PaymentPortal() {
  const goToPayPortal = () => {
    window.location.href = '/pay';
  };

  return (
    <section id="payment" className="relative py-24 bg-gradient-to-b from-black via-green-950/20 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-500">Payment</span> Portal
          </h2>
          <p className="text-xl text-gray-400">
            Quick and secure payment options for existing customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={goToPayPortal}
            className="bg-gradient-to-br from-green-950/50 to-black border border-green-900/50 hover:border-green-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-green-500/30 group text-left"
          >
            <CreditCard className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">Quick Pay</h3>
            <p className="text-gray-400 text-sm">One-time payment with card, PayPal, or Venmo</p>
          </button>

          <button
            onClick={goToPayPortal}
            className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/50 hover:border-purple-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-purple-500/30 group text-left"
          >
            <Calendar className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">Auto-Pay</h3>
            <p className="text-gray-400 text-sm">Set up recurring payments</p>
          </button>
        </div>

        <div className="bg-black/80 border border-green-900/50 p-8 rounded-sm backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white mb-4">Accepted Payment Methods</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span>Credit & Debit Cards</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span>PayPal</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span>Venmo</span>
            </div>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            All transactions are encrypted and secure. We never store your payment information.
          </p>
        </div>
      </div>
    </section>
  );
}