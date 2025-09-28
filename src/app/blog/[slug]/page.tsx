import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/microcms'
import { formatDate } from '@/lib/utils'
import PageTransition from '@/components/animations/PageTransition'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import AnimatedButton from '@/components/animations/AnimatedButton'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const response = await getBlogPosts({ limit: 100 })
    return response.contents.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post = null

  try {
    post = await getBlogPostBySlug(params.slug)
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
  }

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0F0F0F]">
        <article className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <FadeInWhenVisible className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-[#E5E5E5] hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                ブログ一覧に戻る
              </Link>
            </FadeInWhenVisible>

            {/* Article Header */}
            <FadeInWhenVisible delay={0.2}>
              <header className="mb-8">
                {post.category && (
                  <div className="mb-4">
                    <span className="inline-block bg-[#2A2A2A] text-[#E5E5E5] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.name}
                    </span>
                  </div>
                )}

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#A1A1A1] text-sm">
              <time className="mb-2 sm:mb-0">
                公開日: {formatDate(post.publishedAt)}
              </time>
              {post.updatedAt !== post.createdAt && (
                <time>更新日: {formatDate(post.updatedAt)}</time>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs text-[#A1A1A1] bg-[#1A1A1A] px-2 py-1 rounded"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}
              </header>
            </FadeInWhenVisible>

            {/* Article Content */}
            <FadeInWhenVisible delay={0.4}>
              <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-8">
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-p:text-[#E5E5E5] prose-p:leading-relaxed
                    prose-a:text-[#E5E5E5] prose-a:no-underline hover:prose-a:text-white
                    prose-strong:text-white prose-em:text-[#E5E5E5]
                    prose-code:text-[#E5E5E5] prose-code:bg-[#1A1A1A] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-[#0F0F0F] prose-pre:border prose-pre:border-gray-700/50
                    prose-blockquote:border-l-white prose-blockquote:text-[#E5E5E5]
                    prose-ul:text-[#E5E5E5] prose-ol:text-[#E5E5E5]
                    prose-li:text-[#E5E5E5]"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </FadeInWhenVisible>

            {/* Footer Navigation */}
            <FadeInWhenVisible delay={0.6}>
              <footer className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="text-center">
                  <AnimatedButton
                    as="a"
                    href="/blog"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/50"
                  >
                    他の記事を読む
                  </AnimatedButton>
                </div>
              </footer>
            </FadeInWhenVisible>
          </div>
        </article>
      </div>
    </PageTransition>
  )
}