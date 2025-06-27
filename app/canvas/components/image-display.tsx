"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Download, 
  Image as ImageIcon, 
  Loader2, 
  Sparkles, 
  Copy,
  Share,
  Heart,
  Maximize,
  Info,
  Palette,
  Zap,
  Star
} from 'lucide-react'

interface ImageDisplayProps {
  isGenerating: boolean
  generatedImage?: string
  prompt?: string
  style?: string
  colors?: string[]
  onDownload?: () => void
}

export function ImageDisplay({ isGenerating, generatedImage, prompt, style, colors, onDownload }: ImageDisplayProps) {
  const handleDownload = () => {
    if (generatedImage && onDownload) {
      onDownload()
    } else if (generatedImage) {
      // Default download behavior
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `ai-character-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleCopy = async () => {
    if (generatedImage) {
      try {
        await navigator.clipboard.writeText(generatedImage)
        // Show success toast
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  const handleShare = async () => {
    if (generatedImage && navigator.share) {
      try {
        await navigator.share({
          title: 'AI Generated Character',
          text: `Check out this amazing character I created: ${prompt}`,
          url: generatedImage
        })
      } catch (err) {
        console.error('Failed to share:', err)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Main Image Display Area */}
      <div className="relative aspect-square w-full max-w-2xl mx-auto">
        {isGenerating ? (
          // Enhanced Loading State
          <div className="absolute inset-0 glass rounded-2xl border border-white/20 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
            </div>
            
            {/* Loading Content */}
            <div className="relative z-10 text-center space-y-6 p-8 max-w-md">
              <div className="relative">
                <div className="w-20 h-20 mx-auto">
                  <div className="absolute inset-0 gradient-primary rounded-full animate-pulse-glow"></div>
                  <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                    <Loader2 className="size-8 animate-spin text-primary" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="size-6 text-yellow-500 animate-bounce" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gradient-primary">
                  Creating Your Character...
                </h3>
                <p className="text-muted-foreground">
                  Our AI is crafting a stunning character just for you
                </p>
                
                {/* Loading Steps */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 animate-fade-in-up">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    <span>Analyzing your prompt...</span>
                  </div>
                  <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span>Applying art style...</span>
                  </div>
                  <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span>Rendering Cinema4D quality...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : generatedImage ? (
          // Generated Image Display
          <div className="relative group h-full w-full glass rounded-2xl border border-white/20 overflow-hidden hover-lift">
            <Image
              src={generatedImage}
              alt={`AI Generated Character: ${prompt || 'Character'}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            {/* Action Buttons - Top Right */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleCopy}
                className="glass hover-lift h-9 w-9 p-0"
              >
                <Copy className="size-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={handleShare}
                className="glass hover-lift h-9 w-9 p-0"
              >
                <Share className="size-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="glass hover-lift h-9 w-9 p-0"
              >
                <Heart className="size-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="glass hover-lift h-9 w-9 p-0"
              >
                <Maximize className="size-4" />
              </Button>
            </div>

            {/* Style Badge - Top Left */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {style && (
                <Badge variant="secondary" className="glass bg-black/50 text-white border-white/20 backdrop-blur-sm">
                  <Palette className="size-3 mr-1" />
                  {style.replace('_', ' ').replace('/', ' • ')}
                </Badge>
              )}
            </div>
            
            {/* Download Button - Bottom Right */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button
                onClick={handleDownload}
                className="gradient-primary hover:shadow-lg hover:shadow-primary/25 focus-ring"
              >
                <Download className="size-4 mr-2" />
                Download HD
              </Button>
            </div>

            {/* Quality Badge - Bottom Left */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex gap-2">
                <Badge variant="secondary" className="glass bg-black/50 text-white border-white/20">
                  <Star className="size-3 mr-1 text-yellow-400" />
                  Cinema4D
                </Badge>
                <Badge variant="secondary" className="glass bg-black/50 text-white border-white/20">
                  <Zap className="size-3 mr-1 text-blue-400" />
                  AI-Powered
                </Badge>
              </div>
            </div>
          </div>
        ) : (
          // Empty State
          <div className="absolute inset-0 glass rounded-2xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center">
            <div className="text-center space-y-6 p-8 max-w-md animate-fade-in-up">
              <div className="relative">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <ImageIcon className="size-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="size-3 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gradient-primary">
                  Ready to Create Magic?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enter your character concept and watch our AI bring it to life with 
                  professional 3D quality and stunning detail.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="glass border-primary/30">
                  <Sparkles className="size-3 mr-1 text-primary" />
                  AI-Powered
                </Badge>
                <Badge variant="outline" className="glass border-primary/30">
                  <Palette className="size-3 mr-1 text-primary" />
                  39+ Styles
                </Badge>
                <Badge variant="outline" className="glass border-primary/30">
                  <Star className="size-3 mr-1 text-primary" />
                  HD Quality
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Generation Info Panel */}
      {prompt && (
        <div className="space-y-4 animate-scale-in">
          <Alert className="glass-lg border-primary/20">
            <Info className="size-5 text-primary" />
            <AlertDescription className="space-y-3">
              <div className="font-medium text-foreground">Generation Details</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-foreground">Prompt:</strong>
                  <div className="text-muted-foreground mt-1">{prompt}</div>
                </div>
                
                {style && (
                  <div>
                    <strong className="text-foreground">Style:</strong>
                    <div className="text-muted-foreground mt-1">
                      {style.replace('_', ' ').replace('/', ' • ')}
                    </div>
                  </div>
                )}
              </div>

              {colors && colors.length > 0 && (
                <div>
                  <strong className="text-foreground">Color Palette:</strong>
                  <div className="flex items-center gap-2 mt-2">
                    {colors.map((color, index) => (
                      <div 
                        key={index}
                        className="w-6 h-6 rounded-lg border-2 border-white/20 shadow-sm hover-lift"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <Badge variant="outline" className="glass">
                  <Star className="size-3 mr-1 text-yellow-500" />
                  Cinema4D Quality
                </Badge>
                <Badge variant="outline" className="glass">
                  <Zap className="size-3 mr-1 text-blue-500" />
                  Transparent Background
                </Badge>
                <Badge variant="outline" className="glass">
                  <Download className="size-3 mr-1 text-green-500" />
                  Commercial License
                </Badge>
              </div>
            </AlertDescription>
          </Alert>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="glass hover-lift focus-ring">
              <Heart className="size-4 mr-2" />
              Save to Favorites
            </Button>
            <Button variant="outline" className="glass hover-lift focus-ring">
              <Share className="size-4 mr-2" />
              Share Creation
            </Button>
            <Button variant="outline" className="glass hover-lift focus-ring">
              <Copy className="size-4 mr-2" />
              Copy URL
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 