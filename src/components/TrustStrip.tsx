export function TrustStrip() {
  const items = [
    'Local father/son',
    '100% electric equipment',
    'Free quote in under a minute',
    'Pay after the mow',
  ];

  return (
    <div className="bg-zinc-950 border-y border-purple-900/30 py-4 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-400">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {i > 0 && <span className="hidden sm:inline text-purple-900">•</span>}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
