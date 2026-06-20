import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    value: 'response-time',
    question: 'How fast will I hear back?',
    answer: 'Usually same day, often within a couple hours.',
  },
  {
    value: 'contract',
    question: 'Do you require a contract?',
    answer: 'No. Try us once and see if you like it.',
  },
  {
    value: 'payment',
    question: 'Do you take card payments?',
    answer: 'We currently take Venmo, PayPal, and cash. Card coming soon.',
  },
  {
    value: 'electric-works',
    question: 'Will electric work on my lawn?',
    answer:
      "We're best for small to medium established lawns. Anything over roughly three-quarters of an acre, or heavily overgrown, might need a different setup. Send us your address and we'll be honest about whether we're a fit.",
  },
  {
    value: 'service-area',
    question: "What's your service area?",
    answer:
      "Focused on Ankeny, Urbandale, and surrounding Central Iowa neighborhoods. If you're a few miles outside that, text us anyway. We'd rather quote it and decide than turn you away sight unseen.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Quick <span className="text-purple-400">answers</span>
        </h2>

        <Accordion.Root type="single" collapsible className="w-full space-y-1">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.value}
              value={faq.value}
              className="border-b border-zinc-800"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-semibold text-white hover:text-purple-400 transition-colors group">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-transform duration-200 data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pb-4 text-gray-400 leading-relaxed data-[state=open]:animate-none">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
