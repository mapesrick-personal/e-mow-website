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

export async function POST(req) {
  try {
    const { orderID } = await req.json();

    if (!orderID) {
      return new Response(JSON.stringify({ error: 'Missing orderID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const capture = await response.json();

    if (!response.ok) {
      console.error('PayPal capture failed:', capture);
      return new Response(JSON.stringify({ error: 'Failed to capture PayPal order' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(capture), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Capture order error:', err);
    return new Response(JSON.stringify({ error: 'Server error capturing payment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}