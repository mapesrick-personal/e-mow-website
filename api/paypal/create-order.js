const PAYPAL_BASE =
  process.env.PAYPAL_ENV === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    throw new Error(`Failed to get PayPal access token: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

function makeSafeTag(value) {
  return String(value || '')
    .trim()
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toUpperCase();
}

export async function POST(req) {
  try {
    const { amount, lastName } = await req.json();

    if (!amount || !lastName) {
      return new Response(JSON.stringify({ error: 'Missing amount or last name' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const safeLastName = makeSafeTag(lastName);
    const dateTag = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const invoiceId = `EMOW-${safeLastName}-${dateTag}`;
    const customId = `customer-${safeLastName}`;
    const description = `E-Mow payment - ${lastName.trim()}`;

    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description,
            custom_id: customId,
            invoice_id: invoiceId,
            amount: {
              currency_code: 'USD',
              value: String(amount),
            },
          },
        ],
      }),
    });

    const order = await response.json();

    if (!response.ok || !order.id) {
      console.error('PayPal create order failed:', order);
      return new Response(JSON.stringify({ error: 'Failed to create PayPal order' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ id: order.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Create order error:', err);
    return new Response(JSON.stringify({ error: 'Server error creating order' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}