import Link from 'next/link'
import { getBlogPosts } from '@/lib/microcms'
import { formatDate } from '@/lib/utils'
import PageTransition from '@/components/animations/PageTransition'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import AnimatedCard from '@/components/animations/AnimatedCard'

export default async function BlogPage() {
  let posts = []
  let error = null

  try {
    const response = await getBlogPosts({
      orders: '-publishedAt',
      limit: 20,
    })
    posts = response.contents
  } catch (err) {
    console.error('Failed to fetch blog posts:', err)
    error = 'ブログ記事の取得に失敗しました。'
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0F0F0F]">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <FadeInWhenVisible className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
              <p className="text-xl text-[#A1A1A1]">
                技術やデザインに関する記事を投稿しています
              </p>
            </FadeInWhenVisible>

          {/* Error State */}
          {error && (
            <div className="bg-[#2A2A2A]/50 border border-gray-600/50 rounded-lg p-6 mb-8">
              <p className="text-[#E5E5E5] text-center">{error}</p>
            </div>
          )}

          {/* Blog Posts */}
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post, index) => (
                <AnimatedCard
                  key={post.id}
                  delay={index * 0.1}
                  className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 hover:border-white/50 transition-all duration-300 group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                          {post.title}
                        </h2>
                        {post.category && (
                          <span className="inline-block bg-[#2A2A2A] text-[#E5E5E5] px-3 py-1 rounded-full text-sm font-medium mb-3">
                            {post.category.name}
                          </span>
                        )}
                      </div>
                      <time className="text-[#A1A1A1] text-sm sm:ml-4 sm:mt-0 mt-2">
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>

                    {/* Content Preview */}
                    <div className="text-[#E5E5E5] mb-4 line-clamp-3">
                      {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
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
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          ) : !error && (
            <div className="text-center py-12">
              <p className="text-[#A1A1A1] text-lg">まだ記事がありません</p>
            </div>
          )}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}