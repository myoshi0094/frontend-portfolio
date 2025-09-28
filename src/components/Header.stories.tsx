import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-[#E5E5E5] mb-8">
          This is how the header looks on a typical page. Try clicking the navigation links and the mobile menu button.
        </p>
        <div className="h-96 bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
          <p className="text-[#E5E5E5]">Content area for demonstration</p>
        </div>
      </div>
    </div>
  ),
}

export const WithScrollContent: Story = {
  render: () => (
    <div className="bg-[#0F0F0F]">
      <Header />
      <div className="p-8 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4">Scroll to see sticky header</h1>
        <p className="text-[#E5E5E5] mb-8">
          The header has a sticky position and backdrop blur effect. Scroll down to see how it behaves.
        </p>

        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Section {i + 1}</h3>
            <p className="text-[#E5E5E5] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#E5E5E5]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Mobile View</h1>
        <p className="text-[#E5E5E5] mb-6">
          On mobile devices, the navigation collapses into a hamburger menu.
          Try clicking the menu button to see the mobile navigation.
        </p>
        <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-4">
          <p className="text-[#E5E5E5]">Mobile content area</p>
        </div>
      </div>
    </div>
  ),
}

export const HeaderOnly: Story = {
  render: () => <Header />,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}