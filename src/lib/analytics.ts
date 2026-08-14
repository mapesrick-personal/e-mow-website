// Thin wrapper over the gtag.js snippet already loaded in index.html.
//
// Each CTA sends its own event name rather than one shared name with a
// parameter, because distinct names show up as their own rows in the GA4
// Events report with no custom-dimension setup required.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.('event', name, params);
}

// The gtag.js library in index.html is loaded for the Google Ads tag (AW-...).
// Pointing a second config at a GA4 Measurement ID on the same library gives us
// page views and the click events above, without loading anything extra.
//
// The ID comes from VITE_GA4_MEASUREMENT_ID rather than being hardcoded, so it
// can be set in Vercel's environment variables without a code change. Missing or
// unset, this is a no-op and nothing is sent.
export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  if (!measurementId) return;

  window.gtag?.('config', measurementId);
}
