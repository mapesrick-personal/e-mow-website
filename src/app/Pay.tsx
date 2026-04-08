import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

declare global {
  interface Window {
    paypal?: any;
  }

  interface ImportMetaEnv {
    readonly VITE_PAYPAL_CLIENT_ID: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export function Pay() {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const [amount, setAmount] = useState('45.00');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const amountRef = useRef(amount);
  const lastNameRef = useRef(lastName);
  const buttonsRenderedRef = useRef(false);

  useEffect(() => {
  amountRef.current = amount;
}, [amount]);

useEffect(() => {
  lastNameRef.current = lastName;
}, [lastName]);
useEffect(() => {
  if (!clientId || !paypalRef.current || buttonsRenderedRef.current) return;

  const existingScript = document.querySelector(
    'script[data-paypal-sdk="true"]'
  ) as HTMLScriptElement | null;

  const renderButtons = () => {
    if (!window.paypal || !paypalRef.current || buttonsRenderedRef.current) return;

    buttonsRenderedRef.current = true;

    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          shape: 'rect',
          color: 'gold',
          label: 'pay',
        },
        createOrder: async () => {
          const currentAmount = amountRef.current;
          const currentLastName = lastNameRef.current;

          if (!currentLastName.trim()) {
            throw new Error('Please enter a customer last name.');
          }

          setLoading(true);
          setStatus('');

          const response = await fetch('/api/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              amount: currentAmount,
              lastName: currentLastName,
            }),
          });

          const data = await response.json();

          if (!response.ok || !data.id) {
            setLoading(false);
            throw new Error(data.error || 'Failed to create PayPal order');
          }

          return data.id;
        },
        onApprove: async (data: any) => {
          const response = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });

          const capture = await response.json();
          setLoading(false);

          if (!response.ok) {
            throw new Error(capture.error || 'Failed to capture payment');
          }

          setStatus(
            `Payment completed successfully for ${lastNameRef.current.trim()}.`
          );
          console.log('Capture details:', capture);
        },
        onError: (err: unknown) => {
          console.error('PayPal error:', err);
          setLoading(false);
          setStatus('There was a problem starting payment. Please try again.');
        },
        onCancel: () => {
          setLoading(false);
          setStatus('Payment was cancelled.');
        },
      })
      .render(paypalRef.current);
  };

  if (existingScript) {
    renderButtons();
    return;
  }

  const script = document.createElement('script');
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&components=buttons&enable-funding=venmo,card`;
  script.async = true;
  script.dataset.paypalSdk = 'true';
  script.onload = renderButtons;
  script.onerror = () => {
    console.error('Failed to load PayPal SDK');
    setStatus('Failed to load payment options. Please refresh and try again.');
  };

  document.body.appendChild(script);
}, [clientId]);

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
              Enter an amount and customer last name to help match the payment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="amount" className="block text-gray-300 mb-2 font-semibold">
                  Payment Amount (USD)
                </label>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-gray-300 mb-2 font-semibold">
                  Customer Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="mb-4 text-sm text-gray-500">
              The payment will be tagged with the customer&apos;s last name for easier matching.
            </div>

            <div
              ref={paypalRef}
              className="bg-zinc-950 border border-zinc-800 rounded-sm p-6"
            >
              {!lastName.trim() && (
                <p className="text-gray-400">
                  Enter the customer&apos;s last name to load payment options.
                </p>
              )}
            </div>

            {loading && (
              <div className="mt-4 text-sm text-gray-400">
                Starting secure payment session...
              </div>
            )}

            {status && (
              <div className="mt-6 bg-green-950/50 border border-green-500/50 p-4 rounded-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-300">{status}</p>
              </div>
            )}
          </div>

          <div className="bg-black/80 border border-purple-900/50 p-8 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-black">Auto-Pay</h2>
            </div>

            <p className="text-gray-400 mb-4">
              Auto-Pay is a recurring billing feature and needs a separate subscription setup.
            </p>

            <p className="text-gray-300">
              For now, use Quick Pay for one-time payments. Recurring billing can be added next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}