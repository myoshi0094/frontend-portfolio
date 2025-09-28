'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PageTransition from '@/components/animations/PageTransition'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import AnimatedButton from '@/components/animations/AnimatedButton'
import { ContactFormData } from '@/app/api/contact/route'
import { initEmailJS, sendEmail, EmailData } from '@/lib/emailjs'

interface FormData extends ContactFormData {
  // フロントエンド用の追加プロパティがある場合はここに定義
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  useEffect(() => {
    try {
      initEmailJS()
    } catch (error) {
      console.error('EmailJS initialization failed:', error)
      setSubmitStatus({
        type: 'error',
        message: 'メール機能の初期化に失敗しました。管理者にお問い合わせください。',
      })
    }
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // EmailJSでメール送信
      await sendEmail(data as EmailData)

      setSubmitStatus({
        type: 'success',
        message: 'お問い合わせを受け付けました。ありがとうございます。通常1-2営業日以内にご返信いたします。',
      })
      reset() // フォームをリセット
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'メールの送信に失敗しました。しばらく後でお試しください。',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0F0F0F]">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <FadeInWhenVisible className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact</h1>
              <p className="text-xl text-[#A1A1A1]">
                お仕事のご相談やご質問がございましたら、お気軽にお問い合わせください
              </p>
            </FadeInWhenVisible>

            {/* Contact Form */}
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-8 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', {
                        required: 'お名前を入力してください',
                        minLength: {
                          value: 2,
                          message: 'お名前は2文字以上で入力してください',
                        },
                      })}
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600/50 rounded-lg text-white placeholder-[#A1A1A1] focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'メールアドレスを入力してください',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: '有効なメールアドレスを入力してください',
                        },
                      })}
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600/50 rounded-lg text-white placeholder-[#A1A1A1] focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      件名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', {
                        required: '件名を入力してください',
                        minLength: {
                          value: 5,
                          message: '件名は5文字以上で入力してください',
                        },
                      })}
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600/50 rounded-lg text-white placeholder-[#A1A1A1] focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      placeholder="お仕事のご相談について"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      メッセージ <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', {
                        required: 'メッセージを入力してください',
                        minLength: {
                          value: 10,
                          message: 'メッセージは10文字以上で入力してください',
                        },
                      })}
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600/50 rounded-lg text-white placeholder-[#A1A1A1] focus:border-white focus:ring-1 focus:ring-white transition-colors resize-vertical"
                      placeholder="お仕事の内容や期間、予算などについてお聞かせください。"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <FadeInWhenVisible>
                      <div
                        className={`p-4 rounded-lg ${
                          submitStatus.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {submitStatus.type === 'success' ? (
                              <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div className="ml-3">
                            {submitStatus.message}
                          </div>
                        </div>
                      </div>
                    </FadeInWhenVisible>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <AnimatedButton
                      as="button"
                      className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white border border-white/20 hover:border-white/50'
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          送信中...
                        </div>
                      ) : (
                        '送信する'
                      )}
                    </AnimatedButton>
                  </div>
                </form>
              </div>
            </FadeInWhenVisible>

            {/* Contact Info */}
            <FadeInWhenVisible delay={0.4} className="mt-12 text-center">
              <div className="bg-[#1A1A1A] border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">その他のお問い合わせ方法</h3>
                <div className="space-y-2 text-[#A1A1A1]">
                  <p>返信には通常1-2営業日いただいております</p>
                  <p>お急ぎの場合は、SNSのDMでもご連絡いただけます</p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}