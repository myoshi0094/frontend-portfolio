import { createClient } from 'microcms-js-sdk'
import { BlogPost, BlogListResponse } from '@/types/blog'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// ブログ記事一覧を取得
export const getBlogPosts = async (
  queries?: {
    limit?: number
    offset?: number
    orders?: string
    q?: string
    filters?: string
  }
): Promise<BlogListResponse> => {
  return await client.get({
    endpoint: 'blog',
    queries,
  })
}

// ブログ記事詳細を取得
export const getBlogPost = async (
  contentId: string,
  queries?: {
    fields?: string
    depth?: number
  }
): Promise<BlogPost> => {
  return await client.get({
    endpoint: 'blog',
    contentId,
    queries,
  })
}

// スラッグでブログ記事を取得
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const response = await getBlogPosts({
    filters: `slug[equals]${slug}`,
    limit: 1,
  })

  return response.contents.length > 0 ? response.contents[0] : null
}

// 最新のブログ記事を取得
export const getLatestBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  const response = await getBlogPosts({
    orders: '-publishedAt',
    limit,
  })

  return response.contents
}