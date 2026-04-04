export function Legal() {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <a
            href="/"
            className="inline-block mb-6 text-green-400 hover:text-green-300 transition-colors"
          >
            ← Back to Home
          </a>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Privacy Policy <span className="text-purple-500">&amp;</span> Terms
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: April 4, 2026
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-black text-purple-400 mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                E-Mow Lawncare respects your privacy. This Privacy Policy explains how we collect,
                use, and protect your information when you use our website.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Information We Collect</h3>
                <p>We may collect the following information when you submit a quote request:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Service address</li>
                  <li>Lawn size and service details</li>
                  <li>Any comments you provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                  <li>Respond to quote requests</li>
                  <li>Contact you regarding requested services</li>
                  <li>Send service-related updates and notifications</li>
                  <li>Provide customer support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">SMS Consent</h3>
                <p>
                  If you opt in to SMS communication, you agree to receive text messages related to
                  your quote request and service inquiries. Message frequency varies. Message and
                  data rates may apply.
                </p>
                <p className="mt-2">
                  SMS consent is not shared with third parties or affiliates for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Sharing</h3>
                <p>
                  We do not sell your personal information. We only use your information to operate
                  our business and communicate with you about requested services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                <p>
                  If you have questions about this policy, contact us at{' '}
                  <a
                    href="mailto:maplesrentals@gmail.com"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    maplesrentals@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-purple-400 mb-6">Terms &amp; Conditions</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                By using this website and submitting a quote request, you agree to the following
                terms.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Quotes and Services</h3>
                <p>
                  All quotes are estimates based on the information you provide and may change based
                  on actual property conditions, access, terrain, and service requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">SMS Terms</h3>
                <p>
                  By checking the consent box on the quote form, you agree to receive SMS messages
                  from E-Mow Lawncare related to your inquiry or requested services.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                  <li>Message frequency varies</li>
                  <li>Message and data rates may apply</li>
                  <li>Reply STOP to opt out</li>
                  <li>Reply HELP for assistance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website Use</h3>
                <p>
                  You agree not to misuse this website or submit false or misleading information
                  through the quote form.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Changes</h3>
                <p>
                  We may update these terms or our privacy policy from time to time by posting the
                  updated version on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}