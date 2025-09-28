import emailjs from '@emailjs/browser'

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (!publicKey) {
    throw new Error('EmailJS public key is not configured')
  }
  emailjs.init(publicKey)
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS service or template ID is not configured')
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
    to_name: 'Portfolio Owner', // お好みで変更してください
  }

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams)
    if (result.status !== 200) {
      throw new Error(`EmailJS returned status: ${result.status}`)
    }
  } catch (error) {
    console.error('EmailJS send error:', error)
    throw new Error('メールの送信に失敗しました。')
  }
}