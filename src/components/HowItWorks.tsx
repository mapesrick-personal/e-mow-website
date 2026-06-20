export function HowItWorks() {
  const steps = [
    {
      number: '1',
      text: (
        <>
          Text your address to{' '}
          <a href="tel:+15157206948" className="text-green-400 hover:text-green-300">
            (515) 720-6948
          </a>
          .
        </>
      ),
    },
    { number: '2', text: 'We send a price back the same day.' },
    { number: '3', text: 'We mow on your schedule. No contract.' },
    { number: '4', text: 'Pay after by Venmo, PayPal, or cash. Card coming soon.' },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          How it <span className="text-green-400">works</span>
        </h2>

        <ol className="space-y-6">
          {steps.map((step) => (
            <li key={step.number} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-black text-lg flex items-center justify-center">
                {step.number}
              </div>
              <p className="text-lg text-gray-300 pt-1.5">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
