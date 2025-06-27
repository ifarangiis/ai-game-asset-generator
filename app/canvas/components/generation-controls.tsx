"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { 
  Loader2, 
  Sparkles, 
  Palette, 
  Settings, 
  X, 
  Plus, 
  Image as ImageIcon,
  Wand2,
  Info,
  Eye,
  Download
} from 'lucide-react'
import { STYLES_RECRAFT_OPTIONS } from '@/lib/recraft-styles'
import { RECRAFT_IMAGE_SIZE_OPTIONS } from '@/lib/settings'
import { CHARACTER_GENERATION_PROMPT } from '@/lib/config'

interface GenerationControlsProps {
  onGenerate: (params: {
    prompt: string
    style: string
    size: string
    colors: Array<{ r: number; g: number; b: number }>
  }) => void
  isGenerating: boolean
}

interface ColorRGB {
  r: number  // 0-255 integer
  g: number  // 0-255 integer  
  b: number  // 0-255 integer
}

export function GenerationControls({ onGenerate, isGenerating }: GenerationControlsProps) {
  const [userPrompt, setUserPrompt] = useState('panda')
  const [selectedStyleCategory, setSelectedStyleCategory] = useState('realistic_image')
  const [selectedStyleId, setSelectedStyleId] = useState('enterprise')
  const [selectedSize, setSelectedSize] = useState('1024x1024')
  const [colorPalette, setColorPalette] = useState<string[]>(['#FF6633', '#3366FF', '#33FF66'])
  const [showStylePreview, setShowStylePreview] = useState(true)

  // Get current style category and specific style
  const currentCategory = STYLES_RECRAFT_OPTIONS.find(cat => cat.id === selectedStyleCategory)
  const currentStyle = currentCategory?.style.find(style => style.id === selectedStyleId)
  
  // Helper function to convert hex to RGB (0-255 integer range for Recraft API)
  const hexToRgb = (hex: string): ColorRGB => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 102, b: 51 } // fallback to orange (#FF6633)
  }

  // Handle style category change
  const handleStyleCategoryChange = (categoryId: string) => {
    setSelectedStyleCategory(categoryId)
    // Reset to first style in the new category
    const newCategory = STYLES_RECRAFT_OPTIONS.find(cat => cat.id === categoryId)
    if (newCategory && newCategory.style.length > 0) {
      setSelectedStyleId(newCategory.style[0].id)
    }
  }

  // Handle color change
  const handleColorChange = (index: number, color: string) => {
    const newPalette = [...colorPalette]
    newPalette[index] = color
    setColorPalette(newPalette)
  }

  // Remove color from palette
  const removeColor = (index: number) => {
    if (colorPalette.length > 1) {
      const newPalette = colorPalette.filter((_, i) => i !== index)
      setColorPalette(newPalette)
    }
  }

  // Add color to palette (max 3)
  const addColor = () => {
    if (colorPalette.length < 3) {
      setColorPalette([...colorPalette, '#000000'])
    }
  }

  const handleGenerate = () => {
    // Replace "Axolotl" with user's prompt in the CHARACTER_GENERATION_PROMPT
    const enhancedPrompt = CHARACTER_GENERATION_PROMPT.replace(
      'Axolotl',
      userPrompt.trim() || 'character'
    )

    // Build style string for API
    const styleString = selectedStyleCategory === currentCategory?.id && selectedStyleId !== selectedStyleCategory
      ? `${selectedStyleCategory}/${selectedStyleId}`
      : selectedStyleCategory

    // Convert colors to RGB format for API
    const colors = colorPalette.map(hexToRgb)

    onGenerate({
      prompt: enhancedPrompt,
      style: styleString,
      size: selectedSize,
      colors
    })
  }

  return (
    <div className="space-y-8">
      {/* Character Input Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center">
            <Wand2 className="size-3 text-white" />
          </div>
          <Label htmlFor="prompt" className="text-base font-semibold">
            Character Concept
          </Label>
        </div>
        
        <div className="space-y-3">
          <Input
            id="prompt"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="e.g., mystical dragon, cyber panda, space robot..."
            className="h-12 text-base glass border-white/20 focus-ring placeholder:text-muted-foreground/60"
          />
          <Alert className="glass border-blue-200/30">
            <Info className="size-4 text-blue-500" />
            <AlertDescription className="text-sm">
              <strong>Pro Tip:</strong> Be specific! Try "steampunk owl with golden gears" instead of just "owl"
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Separator className="opacity-30" />

      {/* Style Selection Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 gradient-secondary rounded-lg flex items-center justify-center">
            <Palette className="size-3 text-white" />
          </div>
          <Label className="text-base font-semibold">Art Style</Label>
        </div>

        {/* Style Category */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-muted-foreground">Category</Label>
          <Select value={selectedStyleCategory} onValueChange={handleStyleCategoryChange}>
            <SelectTrigger className="h-12 glass border-white/20 focus-ring">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-lg">
              {STYLES_RECRAFT_OPTIONS.map((category) => (
                <SelectItem key={category.id} value={category.id} className="p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={category.thumbnail} 
                      alt={category.name}
                      className="w-8 h-8 rounded-lg object-cover shadow-sm"
                    />
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {category.style.length} styles available
                      </div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Specific Style */}
        {currentCategory && (
          <div className="space-y-3">
            <Label className="text-sm font-medium text-muted-foreground">Specific Style</Label>
            <Select value={selectedStyleId} onValueChange={setSelectedStyleId}>
              <SelectTrigger className="h-12 glass border-white/20 focus-ring">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-lg max-h-60">
                {currentCategory.style.map((style) => (
                  <SelectItem key={style.id} value={style.id} className="p-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={style.thumbnail} 
                        alt={style.name}
                        className="w-8 h-8 rounded-lg object-cover shadow-sm"
                      />
                      <span className="font-medium">{style.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        {/* Style Preview */}
        {currentStyle && showStylePreview && (
          <Card className="glass border-white/20 overflow-hidden hover-lift">
            <div className="relative">
              <img
                src={currentStyle.thumbnail}
                alt={currentStyle.name}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowStylePreview(false)}
                  className="h-6 w-6 p-0 bg-black/50 hover:bg-black/70 text-white"
                >
                  <X className="size-3" />
                </Button>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <Badge variant="secondary" className="text-xs bg-black/50 text-white border-white/20">
                  <Eye className="size-3 mr-1" />
                  {currentStyle.name}
                </Badge>
              </div>
            </div>
          </Card>
        )}
      </div>

      <Separator className="opacity-30" />

      {/* Color Palette Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 gradient-accent rounded-lg flex items-center justify-center">
              <Palette className="size-3 text-white" />
            </div>
            <Label className="text-base font-semibold">Color Palette</Label>
          </div>
          <Badge variant="outline" className="text-xs">
            {colorPalette.length}/3 colors
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {colorPalette.map((color, index) => (
              <div key={index} className="relative group">
                <div className="relative">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    className="w-full h-12 rounded-lg border-2 border-white/20 cursor-pointer bg-transparent focus-ring hover-lift"
                    style={{ backgroundColor: color }}
                  />
                  <div 
                    className="absolute inset-1 rounded-md pointer-events-none"
                    style={{ backgroundColor: color }}
                  />
                  {colorPalette.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeColor(index)}
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 bg-destructive hover:bg-destructive/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="size-3" />
                    </Button>
                  )}
                </div>
                <div className="text-xs text-center mt-1 font-mono text-muted-foreground">
                  {color.toUpperCase()}
                </div>
              </div>
            ))}
            
            {colorPalette.length < 3 && (
              <Button
                variant="outline"
                onClick={addColor}
                className="h-12 glass border-dashed border-white/30 hover-lift focus-ring"
              >
                <Plus className="size-4" />
              </Button>
            )}
          </div>
          
          <Alert className="glass border-purple-200/30">
            <Palette className="size-4 text-purple-500" />
            <AlertDescription className="text-sm">
              Colors influence the character's overall palette and mood
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Separator className="opacity-30" />

      {/* Canvas Size Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center">
            <ImageIcon className="size-3 text-white" />
          </div>
          <Label className="text-base font-semibold">Canvas Size</Label>
        </div>

        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="h-12 glass border-white/20 focus-ring">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="glass-lg">
                         {RECRAFT_IMAGE_SIZE_OPTIONS.map((option) => (
               <SelectItem key={option.id} value={option.id} className="p-3">
                 <div className="flex items-center justify-between w-full">
                   <span className="font-medium">{option.title}</span>
                   <Badge variant="outline" className="text-xs ml-2">
                     {option.value}
                   </Badge>
                 </div>
               </SelectItem>
             ))}
          </SelectContent>
        </Select>
      </div>

      <Separator className="opacity-30" />

      {/* Generation Button */}
      <div className="space-y-4">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !userPrompt.trim()}
          className="w-full h-14 text-base font-semibold gradient-primary hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed focus-ring animate-pulse-glow"
        >
          {isGenerating ? (
            <>
              <Loader2 className="size-5 mr-2 animate-spin" />
              Creating Magic...
            </>
          ) : (
            <>
              <Sparkles className="size-5 mr-2" />
              Generate Character
            </>
          )}
        </Button>

        {/* Generation Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground px-1">
          <div className="flex items-center gap-1">
            <Sparkles className="size-3 text-primary" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="size-3 text-primary" />
            <span>HD Quality</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="size-3 text-primary" />
            <span>Commercial Use</span>
          </div>
        </div>
      </div>
    </div>
  )
} 