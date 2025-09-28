export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  publishedAt: string
  category?: {
    id: string
    name: string
  }
  tags?: Array<{
    id: string
    name: string
  }>
  createdAt: string
  updatedAt: string
  revisedAt: string
}

export interface BlogListResponse {
  contents: BlogPost[]
  totalCount: number
  offset: number
  limit: number
}

export interface Category {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}

export interface Tag {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}