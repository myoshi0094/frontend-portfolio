import type { Meta, StoryObj } from '@storybook/react'
import FadeInWhenVisible from './FadeInWhenVisible'

const meta: Meta<typeof FadeInWhenVisible> = {
  title: 'Components/Animations/FadeInWhenVisible',
  component: FadeInWhenVisible,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'],
    },
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
      <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-white mb-4">Default Fade In</h3>
        <p className="text-[#E5E5E5]">
          This content fades in from the bottom when it becomes visible.
        </p>
      </div>
    ),
  },
}

export const FromTop: Story = {
  args: {
    direction: 'down',
    children: (
      <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-white mb-4">Fade from Top</h3>
        <p className="text-[#E5E5E5]">
          This content fades in from the top.
        </p>
      </div>
    ),
  },
}

export const FromLeft: Story = {
  args: {
    direction: 'left',
    children: (
      <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-white mb-4">Fade from Left</h3>
        <p className="text-[#E5E5E5]">
          This content fades in from the left.
        </p>
      </div>
    ),
  },
}

export const FromRight: Story = {
  args: {
    direction: 'right',
    children: (
      <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-white mb-4">Fade from Right</h3>
        <p className="text-[#E5E5E5]">
          This content fades in from the right.
        </p>
      </div>
    ),
  },
}

export const WithDelay: Story = {
  args: {
    delay: 1,
    children: (
      <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-white mb-4">Delayed Fade In</h3>
        <p className="text-[#E5E5E5]">
          This content has a 1 second delay before fading in.
        </p>
      </div>
    ),
  },
}

export const TextContent: Story = {
  args: {
    children: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">見出しテキスト</h1>
        <p className="text-xl text-[#E5E5E5]">
          説明テキストがここに入ります。アニメーションと共に表示されます。
        </p>
      </div>
    ),
  },
}

export const MultipleElements: Story = {
  render: () => (
    <div className="space-y-8">
      <FadeInWhenVisible delay={0}>
        <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">First Element</h3>
          <p className="text-[#E5E5E5]">Appears first</p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Second Element</h3>
          <p className="text-[#E5E5E5]">Appears with 0.2s delay</p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Third Element</h3>
          <p className="text-[#E5E5E5]">Appears with 0.4s delay</p>
        </div>
      </FadeInWhenVisible>
    </div>
  ),
}