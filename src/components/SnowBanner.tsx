import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Snowflake, X } from 'lucide-react';

// Mar 1 2027 00:00 America/Chicago (UTC-6), so the banner runs through end of Feb 28 2027.
// Anchored to a fixed UTC instant so it expires at the same moment for every visitor.
const SNOW_BANNER_END = Date.UTC(2027, 2, 1, 6, 0, 0);

// Season-versioned so a future '27/'28 banner isn't suppressed for returning visitors.
const DISMISS_KEY = 'esnow-banner-dismissed-2627';

// Static so the dots don't reshuffle on every render.
const SNOW_DOTS = [
  { left: '6%', delay: '0s', duration: '3.4s' },
  { left: '18%', delay: '1.2s', duration: '4.1s' },
  { left: '29%', delay: '2.4s', duration: '3.7s' },
  { left: '41%', delay: '0.6s', duration: '4.4s' },
  { left: '55%', delay: '1.8s', duration: '3.2s' },
  { left: '68%', delay: '3s', duration: '4s' },
  { left: '79%', delay: '0.9s', duration: '3.9s' },
  { left: '91%', delay: '2.1s', duration: '4.3s' },
];

function isDismissed() {
  try {
    return localStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

export function SnowBanner() {
  const [visible, setVisible] = useState(() => Date.now() < SNOW_BANNER_END && !isDismissed());
  const ref = useRef<HTMLDivElement | null>(null);

  // Publish the banner's real height so the fixed header and the hero can offset themselves.
  // Measuring instead of hardcoding keeps the mobile two-line wrap correct.
  useLayoutEffect(() => {
    const root = document.documentElement;

    if (!visible) {
      root.style.setProperty('--banner-h', '0px');
      return;
    }

    const el = ref.current;
    if (!el) return;

    const publish = () => root.style.setProperty('--banner-h', `${el.offsetHeight}px`);
    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(el);

    return () => {
      observer.disconnect();
      root.style.setProperty('--banner-h', '0px');
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Safari private mode. Banner still closes for this session.
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-gradient-to-r from-white via-sky-50 to-white border-b border-sky-200"
    >
      {/* Falling snow */}
      <div className="absolute inset-0 pointer-events-none motion-reduce:hidden" aria-hidden="true">
        {SNOW_DOTS.map((dot) => (
          <span
            key={dot.left}
            className="absolute top-0 w-1 h-1 rounded-full bg-sky-300"
            style={{
              left: dot.left,
              animation: `esnow-fall ${dot.duration} linear ${dot.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5">
        <Snowflake className="w-[18px] h-[18px] text-sky-500 shrink-0" aria-hidden="true" />

        <p className="text-[12.5px] leading-snug sm:text-[15px] text-slate-800">
          <span className="font-black tracking-tight text-slate-900">
            E<span className="text-sky-700">SNOW!</span>
          </span>{' '}
          <span className="font-semibold">
            Sign up today for '26/'27 snow removal before our schedule fills up!
          </span>
        </p>

        <a
          href="/esnow"
          aria-label="Sign up for snow removal"
          className="shrink-0 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-sm transition-colors"
        >
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss snow removal announcement"
          className="shrink-0 p-1 text-slate-400 hover:text-slate-800 transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
