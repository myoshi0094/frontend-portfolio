import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-[#E5E5E5] mb-8">
          This is how the footer looks at the bottom of a page. The footer contains
          copyright information and social media links.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Content Section 1</h3>
            <p className="text-[#E5E5E5]">
              Some content to demonstrate the page layout with the footer at the bottom.
            </p>
          </div>
          <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Content Section 2</h3>
            <p className="text-[#E5E5E5]">
              The footer will always stick to the bottom of the page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ),
}

export const FooterOnly: Story = {
  render: () => <Footer />,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}

export const WithLongContent: Story = {
  render: () => (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col">
      <div className="flex-1 p-8 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4">Long Page Content</h1>
        <p className="text-[#E5E5E5] mb-8">
          This demonstrates how the footer behaves with longer page content.
          The footer remains at the bottom regardless of content length.
        </p>

        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Section {i + 1}</h3>
            <p className="text-[#E5E5E5] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[#E5E5E5]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        ))}
      </div>
      <Footer />
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
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Mobile View</h1>
        <p className="text-[#E5E5E5] mb-6">
          On mobile devices, the footer layout adapts to stack the elements vertically.
          The social media links and copyright information are centered.
        </p>
        <div className="bg-[#1F1F1F] border border-gray-700/50 rounded-lg p-4">
          <p className="text-[#E5E5E5]">Mobile content area</p>
        </div>
      </div>
      <Footer />
    </div>
  ),
}