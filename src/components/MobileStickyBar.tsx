import { TextQuoteLink } from './TextQuoteLink';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-black/95 border-t border-purple-900/50 p-2 flex gap-2 md:hidden shadow-lg backdrop-blur-sm">
      <TextQuoteLink className="flex-1 py-3 rounded-sm bg-green-600 hover:bg-green-700 text-white font-semibold text-center text-base transition-colors">
        Text Quote
      </TextQuoteLink>
      <a
        href="#quote-form"
        className="flex-1 py-3 rounded-sm border border-green-600 text-green-400 font-semibold text-center text-base transition-colors hover:bg-green-900/20"
      >
        Use Form
      </a>
    </div>
  );
}
