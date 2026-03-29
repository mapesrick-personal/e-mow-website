import { Zap, Leaf, Wind, Headphones } from 'lucide-react';
import { EmowCrewCharacters } from './EmowCrewCharacters';

export function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Why E-<span className="text-purple-500">MOW</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're rewriting the rules of lawn care with electric power and a conscience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-sm overflow-hidden group">
            <img
  src="/images/aab6f90d94d6d0c0fb6c7c3b786bf44be56d16d3.png"
  alt="Electric lawn mower"
  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Don't worry, we won't mow your lawn in floor length trench coats. Born from a love of puns and a deep respect for Mother Earth, E-MOW is a <span className="text-purple-400 font-semibold">community minded, family run company</span> with the goal of bringing an ecological approach to lawncare.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As much as possible, our equipment is <span className="text-green-400 font-semibold">100% electric</span>. 
              No gas fumes. No pollution. WAY less noise. Just clean, quiet power that gets the job done while keeping your 
              carbon footprint six feet under.
            </p>
            
            {/* Meet the Crew */}
            <div className="flex justify-center pt-6">
              <div className="w-56 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                <EmowCrewCharacters />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/50 p-8 rounded-sm hover:border-purple-500/50 transition-all group">
            <Zap className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-3">All-Electric Power</h3>
            <p className="text-gray-400">
              Powered by batteries, not fossil fuels. Silent but deadly effective.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-950/50 to-black border border-green-900/50 p-8 rounded-sm hover:border-green-500/50 transition-all group">
            <Leaf className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-3">Eco-Conscious</h3>
            <p className="text-gray-400">
              Zero emissions, maximum impact. Your lawn, our planet, everyone wins.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-950/50 to-black border border-zinc-800/50 p-8 rounded-sm hover:border-zinc-500/50 transition-all group">
            <Wind className="w-12 h-12 text-gray-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-3">Whisper Quiet</h3>
            <p className="text-gray-400">
              No ear-splitting noise. Just the peaceful sound of progress.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/50 p-8 rounded-sm hover:border-purple-500/50 transition-all group">
            <Headphones className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-white mb-3">Professional</h3>
            <p className="text-gray-400">
              We like play on words, but we take customer service very seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
