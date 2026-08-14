/// <reference types="vite/client" />

interface Window {
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID?: string;
}