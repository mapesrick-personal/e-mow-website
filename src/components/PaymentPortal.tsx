import { CreditCard, DollarSign, Calendar, Receipt } from 'lucide-react';

export function PaymentPortal() {
  const handlePaymentClick = (method: string) => {
    // In a real app, this would integrate with payment processors
    alert(`Payment portal coming soon! You selected: ${method}`);
  };

  return (
    <section id="payment" className="relative py-24 bg-gradient-to-b from-black via-green-950/20 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-500">Payment</span> Portal
          </h2>
          <p className="text-xl text-gray-400">
            Quick and secure payment options for existing customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => handlePaymentClick('Pay Invoice')}
            className="bg-gradient-to-br from-green-950/50 to-black border border-green-900/50 hover:border-green-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-green-500/30 group text-left"
          >
            <Receipt className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">Pay Invoice</h3>
            <p className="text-gray-400 text-sm">Enter your invoice number to pay</p>
          </button>

          <button
            onClick={() => handlePaymentClick('Quick Pay')}
            className="bg-gradient-to-br from-green-950/50 to-black border border-green-900/50 hover:border-green-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-green-500/30 group text-left"
          >
            <CreditCard className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">Quick Pay</h3>
            <p className="text-gray-400 text-sm">One-time payment with card</p>
          </button>

          <button
            onClick={() => handlePaymentClick('Auto-Pay Setup')}
            className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/50 hover:border-purple-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-purple-500/30 group text-left"
          >
            <Calendar className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">Auto-Pay</h3>
            <p className="text-gray-400 text-sm">Set up automatic payments</p>
          </button>

          <button
            onClick={() => handlePaymentClick('Payment History')}
            className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/50 hover:border-purple-500/70 p-8 rounded-sm transition-all hover:shadow-xl hover:shadow-purple-500/30 group text-left"
          >
            <DollarSign className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-2">History</h3>
            <p className="text-gray-400 text-sm">View past payments</p>
          </button>
        </div>

        <div className="bg-black/80 border border-green-900/50 p-8 rounded-sm backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white mb-4">Accepted Payment Methods</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span>Credit Cards</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span>Debit Cards</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>ACH Transfer</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>PayPal</span>
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
