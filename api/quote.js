import { Resend } from 'resend'
import twilio from 'twilio'

const resend = new Resend(process.env.RESEND_API_KEY)

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(req) {
  try {
    const data = await req.json()

    const {
      name,
      email,
      phone,
      address,
      service,
      frequency,
      lawnSize,
      message,
    } = data

    const emailResult = await resend.emails.send({
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

    console.log('Email sent:', emailResult)

    const smsResult = await twilioClient.messages.create({
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.TWILIO_TO_NUMBER,
      body: `New E-Mow quote: ${name} | ${phone} | ${service} | ${address}`,
    })

    console.log('SMS sent:', smsResult.sid, smsResult.status)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error('Quote API error:', err)
    console.error('Error details:', {
      code: err?.code,
      message: err?.message,
      status: err?.status,
      moreInfo: err?.moreInfo,
    })

    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 })
  }
}