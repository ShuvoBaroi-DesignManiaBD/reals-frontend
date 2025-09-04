'use client'

import React from 'react'
import { BrandButton } from '@/components/ui/brand-button'
import { BrandCard, BrandCardHeader, BrandCardTitle, BrandCardDescription, BrandCardContent, BrandCardFooter } from '@/components/ui/brand-card'
import { BrandInput } from '@/components/ui/brand-input'

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display text-gray-900 mb-4">
            Reals Piedzivojums
          </h1>
          <h2 className="text-h2 bg-primary-gradient bg-clip-text text-transparent mb-6">
            Brand Design System
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of our brand colors, typography, and components following the design guidelines.
          </p>
        </div>

        {/* Brand Colors */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BrandCard variant="default" padding="md">
              <div className="w-full h-20 bg-[#D151FF] rounded-lg mb-4"></div>
              <h4 className="text-h4 text-gray-900 mb-2">Primary Purple</h4>
              <p className="text-body-small text-gray-600 font-mono">#D151FF</p>
            </BrandCard>
            
            <BrandCard variant="default" padding="md">
              <div className="w-full h-20 bg-[#0BC8E5] rounded-lg mb-4"></div>
              <h4 className="text-h4 text-gray-900 mb-2">Secondary Cyan</h4>
              <p className="text-body-small text-gray-600 font-mono">#0BC8E5</p>
            </BrandCard>
            
            <BrandCard variant="default" padding="md">
              <div className="w-full h-20 bg-primary-gradient rounded-lg mb-4"></div>
              <h4 className="text-h4 text-gray-900 mb-2">Primary Gradient</h4>
              <p className="text-body-small text-gray-600">Purple to Cyan</p>
            </BrandCard>
            
            <BrandCard variant="default" padding="md">
              <div className="w-full h-20 bg-section-gradient rounded-lg mb-4 border border-gray-200"></div>
              <h4 className="text-h4 text-gray-900 mb-2">Section Gradient</h4>
              <p className="text-body-small text-gray-600">Subtle Background</p>
            </BrandCard>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Typography - Poppins Font Family</h3>
          <BrandCard variant="default" padding="lg">
            <div className="space-y-6">
              <div>
                <h1 className="text-display text-gray-900">Display Text</h1>
                <p className="text-body-small text-gray-500 font-mono">text-display • 60px • Bold</p>
              </div>
              
              <div>
                <h1 className="text-h1 text-gray-900">Heading 1</h1>
                <p className="text-body-small text-gray-500 font-mono">text-h1 • 48px • SemiBold</p>
              </div>
              
              <div>
                <h2 className="text-h2 text-gray-900">Heading 2</h2>
                <p className="text-body-small text-gray-500 font-mono">text-h2 • 36px • SemiBold</p>
              </div>
              
              <div>
                <h3 className="text-h3 text-gray-900">Heading 3</h3>
                <p className="text-body-small text-gray-500 font-mono">text-h3 • 30px • Medium</p>
              </div>
              
              <div>
                <h4 className="text-h4 text-gray-900">Heading 4</h4>
                <p className="text-body-small text-gray-500 font-mono">text-h4 • 24px • Medium</p>
              </div>
              
              <div>
                <p className="text-body-large text-gray-900">Large body text for important content and introductions.</p>
                <p className="text-body-small text-gray-500 font-mono">text-body-large • 18px • Regular</p>
              </div>
              
              <div>
                <p className="text-body text-gray-900">Regular body text for general content and descriptions.</p>
                <p className="text-body-small text-gray-500 font-mono">text-body • 16px • Regular</p>
              </div>
              
              <div>
                <p className="text-body-small text-gray-900">Small body text for secondary information.</p>
                <p className="text-body-small text-gray-500 font-mono">text-body-small • 14px • Regular</p>
              </div>
              
              <div>
                <p className="text-caption text-gray-900">Caption text for labels and metadata.</p>
                <p className="text-body-small text-gray-500 font-mono">text-caption • 12px • Light</p>
              </div>
            </div>
          </BrandCard>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Button Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BrandCard variant="default" padding="md">
              <h4 className="text-h4 text-gray-900 mb-4">Button Variants</h4>
              <div className="space-y-3">
                <BrandButton variant="primary" className="w-full">Primary Button</BrandButton>
                <BrandButton variant="secondary" className="w-full">Secondary Button</BrandButton>
                <BrandButton variant="gradient" className="w-full">Gradient Button</BrandButton>
                <BrandButton variant="outline" className="w-full">Outline Button</BrandButton>
                <BrandButton variant="ghost" className="w-full">Ghost Button</BrandButton>
              </div>
            </BrandCard>
            
            <BrandCard variant="default" padding="md">
              <h4 className="text-h4 text-gray-900 mb-4">Button Sizes</h4>
              <div className="space-y-3">
                <BrandButton size="sm" className="w-full">Small Button</BrandButton>
                <BrandButton size="md" className="w-full">Medium Button</BrandButton>
                <BrandButton size="lg" className="w-full">Large Button</BrandButton>
                <BrandButton size="xl" className="w-full">Extra Large</BrandButton>
              </div>
            </BrandCard>
            
            <BrandCard variant="default" padding="md">
              <h4 className="text-h4 text-gray-900 mb-4">Button States</h4>
              <div className="space-y-3">
                <BrandButton className="w-full">Normal State</BrandButton>
                <BrandButton className="w-full hover:bg-[#B91EFF]">Hover State</BrandButton>
                <BrandButton disabled className="w-full">Disabled State</BrandButton>
              </div>
            </BrandCard>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Card Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BrandCard variant="default">
              <BrandCardHeader>
                <BrandCardTitle>Default Card</BrandCardTitle>
                <BrandCardDescription>Standard card with white background and subtle shadow.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-body text-gray-600">This is the default card variant used for most content.</p>
              </BrandCardContent>
            </BrandCard>
            
            <BrandCard variant="gradient">
              <BrandCardHeader>
                <BrandCardTitle>Gradient Card</BrandCardTitle>
                <BrandCardDescription>Card with subtle brand gradient background.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-body text-gray-600">Perfect for highlighting special content or features.</p>
              </BrandCardContent>
            </BrandCard>
            
            <BrandCard variant="bordered">
              <BrandCardHeader>
                <BrandCardTitle>Bordered Card</BrandCardTitle>
                <BrandCardDescription>Card with prominent brand-colored border.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-body text-gray-600">Great for call-to-action sections and important information.</p>
              </BrandCardContent>
            </BrandCard>
            
            <BrandCard variant="elevated">
              <BrandCardHeader>
                <BrandCardTitle>Elevated Card</BrandCardTitle>
                <BrandCardDescription>Card with enhanced shadow for depth.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-body text-gray-600">Ideal for testimonials and featured content.</p>
              </BrandCardContent>
            </BrandCard>
            
            <BrandCard variant="primary">
              <BrandCardHeader>
                <BrandCardTitle className="text-white">Primary Card</BrandCardTitle>
                <BrandCardDescription className="text-white/80">Card with primary gradient background.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-white/90">Perfect for hero sections and primary call-to-actions.</p>
              </BrandCardContent>
            </BrandCard>
            
            <BrandCard variant="secondary">
              <BrandCardHeader>
                <BrandCardTitle className="text-white">Secondary Card</BrandCardTitle>
                <BrandCardDescription className="text-white/80">Card with secondary gradient background.</BrandCardDescription>
              </BrandCardHeader>
              <BrandCardContent>
                <p className="text-white/90">Great for secondary actions and supporting content.</p>
              </BrandCardContent>
            </BrandCard>
          </div>
        </section>

        {/* Form Inputs */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Form Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BrandCard variant="default" padding="lg">
              <h4 className="text-h4 text-gray-900 mb-6">Input Variants</h4>
              <div className="space-y-4">
                <BrandInput
                  label="Default Input"
                  placeholder="Enter your text here"
                  variant="default"
                />
                <BrandInput
                  label="Filled Input"
                  placeholder="Enter your text here"
                  variant="filled"
                />
                <BrandInput
                  label="Outlined Input"
                  placeholder="Enter your text here"
                  variant="outlined"
                />
                <BrandInput
                  label="Required Field"
                  placeholder="This field is required"
                  required
                />
                <BrandInput
                  label="Input with Error"
                  placeholder="Invalid input"
                  error="This field is required"
                />
              </div>
            </BrandCard>
            
            <BrandCard variant="default" padding="lg">
              <h4 className="text-h4 text-gray-900 mb-6">Input Sizes</h4>
              <div className="space-y-4">
                <BrandInput
                  label="Small Input"
                  placeholder="Small size input"
                  inputSize="sm"
                />
                <BrandInput
                  label="Medium Input"
                  placeholder="Medium size input"
                  inputSize="md"
                />
                <BrandInput
                  label="Large Input"
                  placeholder="Large size input"
                  inputSize="lg"
                />
              </div>
            </BrandCard>
          </div>
        </section>

        {/* Sample Form */}
        <section className="mb-16">
          <h3 className="text-h3 text-gray-900 mb-8">Sample Contact Form</h3>
          <BrandCard variant="gradient" padding="xl">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h4 className="text-h2 text-gray-900 mb-4">Pieteikt Pasākumu</h4>
                <p className="text-body-large text-gray-600">Aizpildiet formu un mēs ar jums sazināsimies 24 stundu laikā!</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BrandInput
                    label="Vārds"
                    placeholder="Jūsu vārds"
                    required
                  />
                  <BrandInput
                    label="Uzņēmuma nosaukums"
                    placeholder="Uzņēmuma nosaukums"
                  />
                </div>
                
                <BrandInput
                  label="E-pasta adrese"
                  type="email"
                  placeholder="jusu.epasts@example.com"
                  required
                />
                
                <BrandInput
                  label="Telefona numurs"
                  type="tel"
                  placeholder="+371 20000000"
                  required
                />
                
                <BrandInput
                  label="Pasākuma veids"
                  placeholder="Korporatīvs pasākums, komandas saliedēšana, u.c."
                />
                
                <div className="flex justify-center pt-4">
                  <BrandButton variant="gradient" size="lg" className="px-12">
                    PIETEIKT PASĀKUMU
                  </BrandButton>
                </div>
              </form>
            </div>
          </BrandCard>
        </section>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-body text-gray-600">
            Reals Piedzivojums Brand Design System • Built with Next.js, Tailwind CSS, and Poppins Typography
          </p>
        </div>
      </div>
    </div>
  )
}