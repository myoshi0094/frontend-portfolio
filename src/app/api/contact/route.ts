import { NextRequest, NextResponse } from 'next/server'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // バリデーション
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '全てのフィールドを入力してください。' },
        { status: 400 }
      )
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      )
    }

    // 実際のプロジェクトでは、ここでメール送信サービス（SendGrid、Nodemailer等）を使用
    // 今回はログ出力のみ
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // 成功レスポンス
    return NextResponse.json(
      {
        message: 'お問い合わせを受け付けました。ありがとうございます。',
        success: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらく後でお試しください。' },
      { status: 500 }
    )
  }
}