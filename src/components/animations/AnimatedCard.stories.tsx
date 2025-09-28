import type { Meta, StoryObj } from '@storybook/react'
import AnimatedCard from './AnimatedCard'

const meta: Meta<typeof AnimatedCard> = {
  title: 'Components/Animations/AnimatedCard',
  component: AnimatedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delay: {
      control: 'number',
      min: 0,
      max: 2,
      step: 0.1,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Default Card</h3>
        <p className="text-[#E5E5E5]">
          This is a default animated card with hover effects.
        </p>
      </div>
    ),
    className: 'bg-[#1F1F1F] border border-gray-700/50 rounded-lg hover:border-white/50 transition-all duration-300 group w-80',
  },
}

export const SkillCard: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">フロントエンド</h3>
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
        </div>
      </div>
    ),
    className: 'bg-[#1F1F1F] border border-gray-700/50 rounded-lg hover:border-white/50 transition-all duration-300 group w-80',
  },
}

export const BlogCard: Story = {
  args: {
    children: (
      <div className="p-6">
        <span className="inline-block bg-[#2A2A2A] text-[#E5E5E5] px-3 py-1 rounded-full text-sm font-medium mb-3">
          技術
        </span>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
          Next.js 15の新機能について
        </h3>
        <p className="text-[#A1A1A1] text-sm mb-4">
          Next.js 15がリリースされました。新しい機能や変更点について詳しく解説します...
        </p>
        <time className="text-[#A1A1A1] text-xs">
          2024年12月15日
        </time>
      </div>
    ),
    className: 'bg-[#1F1F1F] border border-gray-700/50 rounded-lg hover:border-white/50 transition-all duration-300 group w-80',
  },
}

export const WithDelay: Story = {
  args: {
    delay: 0.5,
    children: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Delayed Animation</h3>
        <p className="text-[#E5E5E5]">
          This card has a 0.5 second delay before animating in.
        </p>
      </div>
    ),
    className: 'bg-[#1F1F1F] border border-gray-700/50 rounded-lg hover:border-white/50 transition-all duration-300 group w-80',
  },
}