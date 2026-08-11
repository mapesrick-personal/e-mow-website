export function Services() {
  const columns = [
    {
      title: 'Mowing',
      body: 'A clean cut with quiet electric equipment.',
    },
    {
      title: 'Trimming',
      body: 'Clean lines around fences, beds, and walkways.',
    },
    {
      title: 'Hard-surface clean-up',
      body: 'Driveways and walks blown clear before we leave.',
    },
    {
      title: 'Lawn Aeration',
      body: 'Core aeration to loosen soil and help your lawn breathe.',
    },
    {
      title: 'Power Washing',
      body: 'Power washing for driveways, patios, and siding.',
    },
    {
      title: 'Rototilling',
      body: 'Rototilling to break up soil for new beds or garden plots.',
    },
    {
      title: 'Mulch Refresh/Installation',
      body: 'Fresh mulch laid or refreshed around beds and borders.',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Services we <span className="text-purple-500">Offer</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {columns.map((col) => (
            <div
              key={col.title}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] bg-black/80 border border-purple-900/50 hover:border-purple-500/50 p-8 rounded-sm backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-purple-500/20"
            >
              <h3 className="text-xl font-black text-white mb-3">{col.title}</h3>
              <p className="text-gray-400 leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Bagging available on request. Light spring and fall cleanup available.
        </p>
      </div>
    </section>
  );
}
