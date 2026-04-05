export function EmowCrewCharacters() {
  return (
    <div className="flex justify-center gap-8 my-12">
      {/* Character 1 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-green-600 mb-2 flex items-center justify-center text-4xl">
          🌱
        </div>
        <div className="text-sm font-semibold text-green-300">Eco</div>
      </div>

      {/* Character 2 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-purple-500 mb-2 flex items-center justify-center text-4xl">
          ⚡
        </div>
        <div className="text-sm font-semibold text-purple-300">Volt</div>
      </div>

      {/* Character 3 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-green-500 mb-2 flex items-center justify-center text-4xl">
          🔋
        </div>
        <div className="text-sm font-semibold text-green-300">Charge</div>
      </div>
    </div>
  );
}