import { ReactNode } from 'react';

const SMS_HREF = 'sms:+15157206948?body=Hi%20Emow%2C%20I%27d%20like%20a%20free%20mowing%20quote.%20My%20address%20is%3A%20';

export function TextQuoteLink({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={SMS_HREF} className={className}>
      {children}
    </a>
  );
}
