"use client"

import React, { useState } from 'react'
import { toast } from 'sonner'
import { ArrowLeft, Info, Sparkles, Zap, Star, Palette, Settings } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { GenerationControls } from './components/generation-controls'
import { ImageDisplay } from './components/image-display'

interface GenerationParams {
  prompt: string
  style: string
  size: string
  colors: Array<{ r: number; g: number; b: number }>
}

export default function CanvasPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | undefined>()
  const [currentPrompt, setCurrentPrompt] = useState<string>()
  const [currentStyle, setCurrentStyle] = useState<string>()
  const [currentColors, setCurrentColors] = useState<string[]>()

  const handleGenerate = async (params: GenerationParams) => {
    setIsGenerating(true)
    setCurrentPrompt(params.prompt)
    setCurrentStyle(params.style)
    
    // Convert RGB colors back to hex for display
    const hexColors = params.colors.map(color => 
      `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`
    )
    setCurrentColors(hexColors)
    
    try {
      const formData = new FormData()
      formData.append('prompt', params.prompt)
      formData.append('model', 'recraft-v3')
      formData.append('style', params.style)
      formData.append('size', params.size)
      formData.append('n', '1')

      // Add colors to the request
      // Colors are already in RGB integer format (0-255) from the component
      if (params.colors && params.colors.length > 0) {
        formData.append('colors', JSON.stringify(params.colors))
      }

      const response = await fetch('/api/images/generations', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      if (data.data && data.data[0] && data.data[0].url) {
        setGeneratedImage(data.data[0].url)
        toast.success('Character generated successfully!')
      } else {
        throw new Error('No image URL in response')
      }
    } catch (error) {
      console.error('Generation error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to generate character')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      toast.success('Download started!')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Header with Glassmorphism */}
      <header className="glass-lg sticky top-0 z-50 border-b border-white/10">
        <div className="container flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 hover-lift focus-ring">
                <ArrowLeft className="size-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                  <Sparkles className="size-5 text-white animate-spin-slow" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-primary">AI Character Studio</h1>
                <p className="text-sm text-muted-foreground">Professional 3D Asset Generator</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <Badge variant="secondary" className="glass hover-lift">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Recraft v3 Active
              </Badge>
              <Badge variant="outline" className="glass border-primary/30 text-primary">
                <Star className="size-3 mr-1" />
                Enterprise
              </Badge>
            </div>
            
            <Button variant="outline" size="sm" className="glass hover-lift focus-ring">
              <Settings className="size-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Zap className="size-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Cinema4D Quality • Professional Assets</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Create <span className="text-gradient-primary">Stunning Characters</span><br />
              with AI Precision
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate professional 3D character assets using enterprise-grade AI. 
              Choose from 39+ styles with full color customization and transparent backgrounds.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Palette className="size-4 text-primary" />
                <span>39+ Art Styles</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                <span>Color Customization</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="size-4 text-primary" />
                <span>Commercial License</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        {/* Info Alert with Modern Styling */}
        <Alert className="mb-8 glass-lg border-primary/20 animate-scale-in max-w-4xl mx-auto">
          <Info className="size-5 text-primary" />
          <AlertDescription className="text-base">
            <strong className="text-foreground">Professional Quality:</strong> All characters are generated with Cinema4D rendering quality, 
            optimized for commercial use with transparent backgrounds and high-resolution output.
          </AlertDescription>
        </Alert>

        {/* Main Generation Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Controls Panel - Enhanced Design */}
          <div className="xl:col-span-4 space-y-6 animate-slide-in-right">
            <div className="glass-lg rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="size-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Character Generator</h3>
                  <p className="text-sm text-muted-foreground">Create your perfect character</p>
                </div>
              </div>
              
              <GenerationControls 
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass rounded-xl p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-gradient-primary">39+</div>
                <div className="text-sm text-muted-foreground">Art Styles</div>
              </div>
              <div className="glass rounded-xl p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-gradient-primary">3D</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>

          {/* Image Display - Enhanced Canvas Area */}
          <div className="xl:col-span-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-lg rounded-2xl p-6 hover-lift min-h-[600px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 gradient-secondary rounded-lg flex items-center justify-center">
                    <Palette className="size-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Generation Canvas</h3>
                    <p className="text-sm text-muted-foreground">Your AI-generated character will appear here</p>
                  </div>
                </div>
                
                {isGenerating && (
                  <Badge variant="secondary" className="glass animate-pulse">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
                    Generating...
                  </Badge>
                )}
              </div>

              <ImageDisplay
                isGenerating={isGenerating}
                generatedImage={generatedImage}
                prompt={currentPrompt}
                style={currentStyle}
                colors={currentColors}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <section className="mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Choose Our AI Generator?</h3>
            <p className="text-muted-foreground">Professional features for serious creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center hover-lift hover-glow">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Professional Quality</h4>
              <p className="text-sm text-muted-foreground">Cinema4D rendering with commercial license included</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center hover-lift hover-glow">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Palette className="size-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Full Customization</h4>
              <p className="text-sm text-muted-foreground">39+ styles with color palette control</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center hover-lift hover-glow">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="size-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">Powered by Recraft v3 for instant results</p>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-20 text-center space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="size-4 text-primary" />
              <span>Powered by Recraft v3</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              <span>Enterprise Quality</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <span>Commercial License</span>
            </div>
          </div>
          
          <div className="glass rounded-xl px-6 py-3 inline-flex items-center gap-2 max-w-md mx-auto">
            <Palette className="size-4 text-primary" />
            <span className="text-sm font-medium">Ready to create amazing characters?</span>
          </div>
        </footer>
      </main>
    </div>
  )
}