'use client'

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

/**
 * ButtonShowcase Component
 * 
 * Demonstrates all available button variants from the Figma designs:
 * - BUTTON 1: Purple gradient buttons with and without shadows
 * - Component 76: Cyan/Teal buttons with and without shadows  
 * - Group 12714: WhatsApp-style green buttons with icons
 * 
 * Each variant supports proper hover states, accessibility, and responsive design.
 */
const ButtonShowcase: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Button Component Showcase</h1>
          <p className="text-gray-600">Reusable button variants based on Figma designs</p>
        </div>

        {/* BUTTON 1 - Purple Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">BUTTON 1 - Purple Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="purple" size="figma">
              Button
            </Button>
            <Button variant="purple-shadow" size="figma">
              Button
            </Button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Usage:</strong> variant="purple" | variant="purple-shadow"</p>
            <p><strong>Colors:</strong> #c347fc (primary), #a006d8 (with shadow)</p>
          </div>
        </section>

        {/* Component 76 - Cyan/Teal Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Component 76 - Cyan/Teal Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="cyan" size="figma">
              Button
            </Button>
            <Button variant="cyan-shadow" size="figma">
              Button
            </Button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Usage:</strong> variant="cyan" | variant="cyan-shadow"</p>
            <p><strong>Colors:</strong> #28e7c5 (primary), #28d7e7 (with shadow)</p>
          </div>
        </section>

        {/* Group 12714 - WhatsApp Style Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Group 12714 - WhatsApp Style Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="whatsapp" size="figma-whatsapp" className="min-w-[165px]">
              <span>Pieteikties</span>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="ml-2">
                <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 13.89 3.09 15.64 4.11 17.1L2.59 22.41L8.09 20.91C9.5 21.8 11.19 22.3 12.99 22.3C18.52 22.3 23 17.82 23 12.3C23 6.78 18.52 2.3 12.99 2.3L12.5 2ZM12.99 20.15C11.59 20.15 10.26 19.75 9.14 19.05L8.84 18.87L5.05 19.96L6.16 16.27L5.95 15.96C5.17 14.8 4.72 13.42 4.72 11.95C4.72 7.68 8.18 4.22 12.45 4.22C14.52 4.22 16.47 5.01 17.94 6.48C19.41 7.95 20.2 9.9 20.2 11.97C20.2 16.24 16.74 19.7 12.47 19.7L12.99 20.15Z" fill="white"/>
              </svg>
            </Button>
            <Button variant="whatsapp-dark" size="figma-whatsapp" className="min-w-[165px]">
              <span>Pieteikties</span>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="ml-2">
                <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 13.89 3.09 15.64 4.11 17.1L2.59 22.41L8.09 20.91C9.5 21.8 11.19 22.3 12.99 22.3C18.52 22.3 23 17.82 23 12.3C23 6.78 18.52 2.3 12.99 2.3L12.5 2ZM12.99 20.15C11.59 20.15 10.26 19.75 9.14 19.05L8.84 18.87L5.05 19.96L6.16 16.27L5.95 15.96C5.17 14.8 4.72 13.42 4.72 11.95C4.72 7.68 8.18 4.22 12.45 4.22C14.52 4.22 16.47 5.01 17.94 6.48C19.41 7.95 20.2 9.9 20.2 11.97C20.2 16.24 16.74 19.7 12.47 19.7L12.99 20.15Z" fill="white"/>
              </svg>
            </Button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Usage:</strong> variant="whatsapp" | variant="whatsapp-dark"</p>
            <p><strong>Colors:</strong> #25d366 (primary), #0fb34c (dark)</p>
            <p><strong>Note:</strong> Includes WhatsApp icon and justify-between layout</p>
          </div>
        </section>

        {/* Standard Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Standard Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        {/* Size Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="purple">Small</Button>
            <Button size="default" variant="cyan">Default</Button>
            <Button size="lg" variant="whatsapp">Large</Button>
            <Button size="figma" variant="purple-shadow">Figma Size</Button>
          </div>
        </section>

        {/* Enhanced Features */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Enhanced Features</h2>
          <div className="space-y-6">
            
            {/* Loading States */}
            <div>
              <h3 className="font-medium mb-3">Loading States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="purple" size="figma" loading>
                  Loading...
                </Button>
                <Button variant="cyan" size="figma" loading>
                  Processing
                </Button>
                <Button variant="whatsapp" size="figma-whatsapp" loading>
                  Sending
                </Button>
              </div>
            </div>

            {/* Full Width */}
            <div>
              <h3 className="font-medium mb-3">Full Width Buttons</h3>
              <div className="space-y-2">
                <Button variant="purple-shadow" size="figma" fullWidth>
                  Full Width Purple
                </Button>
                <Button variant="cyan-shadow" size="figma" fullWidth>
                  Full Width Cyan
                </Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="font-medium mb-3">Buttons with Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="whatsapp" 
                  size="figma-whatsapp" 
                  className="min-w-[165px]"
                  icon={
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 13.89 3.09 15.64 4.11 17.1L2.59 22.41L8.09 20.91C9.5 21.8 11.19 22.3 12.99 22.3C18.52 22.3 23 17.82 23 12.3C23 6.78 18.52 2.3 12.99 2.3L12.5 2ZM12.99 20.15C11.59 20.15 10.26 19.75 9.14 19.05L8.84 18.87L5.05 19.96L6.16 16.27L5.95 15.96C5.17 14.8 4.72 13.42 4.72 11.95C4.72 7.68 8.18 4.22 12.45 4.22C14.52 4.22 16.47 5.01 17.94 6.48C19.41 7.95 20.2 9.9 20.2 11.97C20.2 16.24 16.74 19.7 12.47 19.7L12.99 20.15Z" fill="white"/>
                    </svg>
                  }
                >
                  Pieteikties
                </Button>
                <Button 
                  variant="whatsapp-dark" 
                  size="figma-whatsapp" 
                  className="min-w-[165px]"
                  icon={
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 13.89 3.09 15.64 4.11 17.1L2.59 22.41L8.09 20.91C9.5 21.8 11.19 22.3 12.99 22.3C18.52 22.3 23 17.82 23 12.3C23 6.78 18.52 2.3 12.99 2.3L12.5 2ZM12.99 20.15C11.59 20.15 10.26 19.75 9.14 19.05L8.84 18.87L5.05 19.96L6.16 16.27L5.95 15.96C5.17 14.8 4.72 13.42 4.72 11.95C4.72 7.68 8.18 4.22 12.45 4.22C14.52 4.22 16.47 5.01 17.94 6.48C19.41 7.95 20.2 9.9 20.2 11.97C20.2 16.24 16.74 19.7 12.47 19.7L12.99 20.15Z" fill="white"/>
                    </svg>
                  }
                >
                  Pieteikties
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Code Examples</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">Purple Button (BUTTON 1)</h3>
              <code className="text-sm bg-gray-100 p-2 rounded block whitespace-pre">
                {`<Button variant="purple" size="figma">
  Click Me
</Button>`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">Cyan Button with Shadow (Component 76)</h3>
              <code className="text-sm bg-gray-100 p-2 rounded block whitespace-pre">
                {`<Button variant="cyan-shadow" size="figma">
  Continue
</Button>`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">WhatsApp Button with Icon (Group 12714)</h3>
              <code className="text-sm bg-gray-100 p-2 rounded block whitespace-pre">
                {`<Button 
  variant="whatsapp" 
  size="figma-whatsapp" 
  className="min-w-[165px]"
  icon={<WhatsAppIcon />}
>
  Pieteikties
</Button>`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">Loading State</h3>
              <code className="text-sm bg-gray-100 p-2 rounded block whitespace-pre">
                {`<Button variant="purple" loading>
  Processing...
</Button>`}
              </code>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default ButtonShowcase