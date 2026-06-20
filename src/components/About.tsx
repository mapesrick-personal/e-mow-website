import { EmowCrewCharacters } from './EmowCrewCharacters';

export function About() {
  return (
    <>
      {/* Why electric */}
      <section id="why-electric" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
            Why electric <span className="text-green-400">matters</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Electric mowers are quieter, cleaner, and don't drip oil on your driveway. Your dog
            will thank you. Your neighbors will too. We just like that the equipment doesn't smell
            like a lawnmower.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-sm overflow-hidden group">
              <img
                src="/images/aab6f90d94d6d0c0fb6c7c3b786bf44be56d16d3.png"
                alt="Electric lawn mower"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Who we <span className="text-purple-400">are</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're a small local crew, Rick and his son, running an{' '}
                <span className="text-green-400 font-semibold">electric-only mowing service</span>{' '}
                in Central Iowa. We started Emow because we wanted lawncare that was easier to
                schedule, quieter to listen to, and a little more fun to deal with.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Don't worry, we won't mow your lawn in floor-length trench coats. We're starting
                small and staying small. If you have a few neighbors interested, ask about a route
                discount.
              </p>

              <div className="flex justify-start pt-2">
                <div className="w-48 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                  <EmowCrewCharacters />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
