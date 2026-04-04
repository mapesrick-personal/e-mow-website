import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const data = await req.json()

    const { name, email, phone, address, service, frequency, lawnSize, message } = data

    await resend.emails.send({
      from: 'E-Mow <quotes@mail.emow-lawncare.com>',
      to: ['maplesrentals@gmail.com'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Frequency:</strong> ${frequency}</p>
        <p><strong>Lawn Size:</strong> ${lawnSize}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 })
  }
}