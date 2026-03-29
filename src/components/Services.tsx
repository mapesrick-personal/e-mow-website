import { Scissors, Trees, Sprout, Snowflake } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Mowing',
      description: 'Precision electric mowing that leaves your grass looking sharp. Weekly, bi-weekly, or monthly—we adapt to your vibe.',
      price: 'From $45/visit',
      color: 'purple'
    },
    {
      icon: Trees,
      title: 'Trimming & Edging',
      description: 'Clean lines, crisp edges. We bring the same attention to detail we give our playlist curation.',
      price: 'From $35/visit',
      color: 'green'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1716107647226-6d25730fe348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGdyYXNzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzE4NjY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Grass texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Electric-powered excellence for every aspect of your lawn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isGreen = service.color === 'green';
            
            return (
              <div
                key={service.title}
                className={`bg-black/80 border ${
                  isGreen ? 'border-green-900/50 hover:border-green-500/50' : 'border-purple-900/50 hover:border-purple-500/50'
                } p-8 rounded-sm backdrop-blur-sm transition-all hover:shadow-xl ${
                  isGreen ? 'hover:shadow-green-500/20' : 'hover:shadow-purple-500/20'
                } group`}
              >
                <Icon
                  className={`w-14 h-14 mb-4 ${
                    isGreen ? 'text-green-500' : 'text-purple-500'
                  } group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-2xl font-black text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <div className={`text-lg font-semibold ${isGreen ? 'text-green-400' : 'text-purple-400'}`}>
                  {service.price}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            All services are performed with 100% electric equipment. Custom packages available.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('quote');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-sm transition-all hover:shadow-xl hover:shadow-purple-500/50"
          >
            Request a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
