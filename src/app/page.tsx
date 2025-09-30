import Link from 'next/link'
import { getLatestBlogPosts } from '@/lib/microcms'
import { formatDate } from '@/lib/utils'
import { BlogPost } from '@/types/blog'
import PageTransition from '@/components/animations/PageTransition'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import AnimatedCard from '@/components/animations/AnimatedCard'
import AnimatedButton from '@/components/animations/AnimatedButton'

export default async function Home() {
  let latestPosts: BlogPost[] = []

  try {
    latestPosts = await getLatestBlogPosts(3)
  } catch (error) {
    console.error('Failed to fetch latest blog posts:', error)
  }
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0F0F0F]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <FadeInWhenVisible delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Frontend Engineer
                  <span className="block bg-gradient-to-r from-[#E5E5E5] to-white bg-clip-text text-transparent">
                    with Design Background
                  </span>
                </h1>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-xl sm:text-2xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto leading-relaxed">
                  デザイナーとしての経験を活かし、
                  <br />
                  UI/UXを深く理解したフロントエンド開発を実現します。
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible
                delay={0.6}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <div className="bg-[#1F1F1F] border border-white/20 rounded-lg px-6 py-4 shadow-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#E5E5E5]">8年</div>
                  <div className="text-sm text-[#A1A1A1]">フリーランス経験</div>
                </div>
                <div className="bg-[#1F1F1F] border border-white/20 rounded-lg px-6 py-4 shadow-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#E5E5E5]">2.5年</div>
                  <div className="text-sm text-[#A1A1A1]">フロントエンド開発</div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">技術スタック</h2>
              <p className="text-lg text-[#A1A1A1]">
                UI/UXの実装品質とパフォーマンスを両立させるため、最適な技術選定を行っています。
              </p>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard
                delay={0.1}
                className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 hover:border-white/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                  フロントエンド
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">React Hook Form</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Form Validation</span>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard
                delay={0.2}
                className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 hover:border-white/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                  デザイン
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Figma</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Photoshop</span>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard
                delay={0.3}
                className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 hover:border-white/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                  バックエンド
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">Laravel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full shadow-lg shadow-white/20"></div>
                    <span className="text-[#E5E5E5]">microCMS</span>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">最新記事</h2>
              <p className="text-lg text-[#A1A1A1]">
                技術やデザインに関する知見をブログで共有しています
              </p>
            </FadeInWhenVisible>

            {latestPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {latestPosts.map((post, index) => (
                  <AnimatedCard
                    key={post.id}
                    delay={index * 0.1}
                    className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 hover:border-white/50 transition-all duration-300 group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.category && (
                        <span className="inline-block bg-[#2A2A2A] text-[#E5E5E5] px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {post.category.name}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#A1A1A1] text-sm mb-4 line-clamp-3">
                        {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </p>
                      <time className="text-[#A1A1A1] text-xs">{formatDate(post.publishedAt)}</time>
                    </Link>
                  </AnimatedCard>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-[#A1A1A1]">記事を準備中です</p>
              </div>
            )}

            <FadeInWhenVisible className="text-center">
              <AnimatedButton
                as="a"
                href="/blog"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/50"
              >
                すべての記事を見る
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </AnimatedButton>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
