"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Palette, Grid3X3 } from 'lucide-react'
import { STYLES_RECRAFT_OPTIONS } from '@/lib/recraft-styles'

interface StyleSelectorProps {
  selectedCategory: string
  selectedStyleId: string
  onCategoryChange: (categoryId: string) => void
  onStyleChange: (styleId: string) => void
  disabled?: boolean
}

export function StyleSelector({ 
  selectedCategory, 
  selectedStyleId, 
  onCategoryChange, 
  onStyleChange,
  disabled = false 
}: StyleSelectorProps) {
  const currentCategory = STYLES_RECRAFT_OPTIONS.find(cat => cat.id === selectedCategory)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Palette className="size-5 text-primary" />
          Style Gallery
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Grid */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Categories
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {STYLES_RECRAFT_OPTIONS.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="h-auto p-3 justify-start"
                onClick={() => onCategoryChange(category.id)}
                disabled={disabled}
              >
                <div className="flex items-center gap-3 w-full">
                  <img 
                    src={category.thumbnail} 
                    alt={category.name}
                    className="w-8 h-8 rounded object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {category.style.length} styles
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Style Grid */}
        {currentCategory && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Grid3X3 className="size-4 text-muted-foreground" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {currentCategory.name} Styles
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {currentCategory.style.slice(0, 8).map((style) => (
                <Button
                  key={style.id}
                  variant={selectedStyleId === style.id ? "default" : "outline"}
                  className="h-auto p-2 flex-col space-y-2"
                  onClick={() => onStyleChange(style.id)}
                  disabled={disabled}
                >
                  <img 
                    src={style.thumbnail} 
                    alt={style.name}
                    className="w-full h-16 rounded object-cover"
                  />
                  <div className="text-xs font-medium truncate w-full">
                    {style.name}
                  </div>
                </Button>
              ))}
            </div>
            
            {currentCategory.style.length > 8 && (
              <div className="text-center">
                <Badge variant="outline" className="text-xs">
                  +{currentCategory.style.length - 8} more styles available
                </Badge>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 