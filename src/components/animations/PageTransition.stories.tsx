import type { Meta, StoryObj } from '@storybook/react'
import PageTransition from './PageTransition'

const meta: Meta<typeof PageTransition> = {
  title: 'Components/Animations/PageTransition',
  component: PageTransition,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="min-h-screen bg-[#0F0F0F] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Page Content</h1>
          <p className="text-xl text-[#E5E5E5] mb-8">
            This entire page content is wrapped with PageTransition.
            It fades in and slides up when the page loads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Card 1</h3>
              <p className="text-[#E5E5E5]">
                Some content in the first card.
              </p>
            </div>

            <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Card 2</h3>
              <p className="text-[#E5E5E5]">
                Some content in the second card.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
}

export const WithHeroSection: Story = {
  args: {
    children: (
      <div className="min-h-screen bg-[#0F0F0F]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Frontend Engineer
                <span className="block bg-gradient-to-r from-[#E5E5E5] to-white bg-clip-text text-transparent">
                  with Design Background
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto leading-relaxed">
                デザイナーからフロントエンドエンジニアに転身。
                <br />
                UI/UXを理解した実装で、デザインと開発の橋渡しを得意とする。
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">技術スタック</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">フロントエンド</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>
                    <span className="text-[#E5E5E5]">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>
                    <span className="text-[#E5E5E5]">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">デザイン</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full"></div>
                    <span className="text-[#E5E5E5]">Figma</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full"></div>
                    <span className="text-[#E5E5E5]">Photoshop</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">バックエンド</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full"></div>
                    <span className="text-[#E5E5E5]">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#A1A1A1] rounded-full"></div>
                    <span className="text-[#E5E5E5]">Laravel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
  },
}