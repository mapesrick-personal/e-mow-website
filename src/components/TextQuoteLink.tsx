import { ReactNode } from 'react';
import { trackEvent } from '../lib/analytics';

const SMS_HREF = 'sms:+15157206948?body=Hi%20Emow%2C%20I%27d%20like%20a%20free%20mowing%20quote.%20My%20address%20is%3A%20';

export function TextQuoteLink({
  children,
  className = '',
  placement,
}: {
  children: ReactNode;
  className?: string;
  placement?: string;
}) {
  return (
    <a
      href={SMS_HREF}
      className={className}
      onClick={() => trackEvent('click_text_quote', { placement })}
    >
      {children}
    </a>
  );
}
