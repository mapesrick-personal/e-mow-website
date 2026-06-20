import { Leaf } from 'lucide-react';

export function SeedPaper() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-green-950/20 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Leaf className="w-10 h-10 text-green-400 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          One more <span className="text-green-400">thing</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Our door hangers are printed on wildflower seed paper. Plant them under a thin layer of
          soil, water until established, and you'll have wildflowers where the flyer used to be.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          We figured if a flyer is going to end up in your yard either way, it might as well grow.
        </p>
      </div>
    </section>
  );
}
