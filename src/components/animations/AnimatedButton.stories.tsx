import type { Meta, StoryObj } from '@storybook/react'
import AnimatedButton from './AnimatedButton'

const meta: Meta<typeof AnimatedButton> = {
  title: 'Components/Animations/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['button', 'a', 'div'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click me',
    className: 'bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/50',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    className: 'bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-[#1F1F1F] text-white px-6 py-3 rounded-lg font-medium border border-gray-600 hover:border-white/50 transition-colors',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    className: 'bg-gray-600 text-gray-400 px-6 py-3 rounded-lg font-medium cursor-not-allowed',
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    as: 'a',
    href: '#',
    className: 'bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/50 inline-block',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        すべての記事を見る
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </>
    ),
    className: 'bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] hover:from-white hover:to-[#E5E5E5] hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/50 inline-flex items-center',
  },
}