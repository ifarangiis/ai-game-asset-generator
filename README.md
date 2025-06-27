# AI Character Generator Canvas

A professional AI-powered character asset generator built with Next.js, Recraft v3, and shadcn/ui components.

## 🎨 Features

- **✅ Full Style Selection**: Choose from Realistic Image, Digital Illustration, and Vector Illustration categories with 39+ individual styles
- **✅ Custom Color Palettes**: Select up to 3 colors that influence the character's color scheme via Recraft API
- **✅ Smart Prompt Enhancement**: Automatically enhances user input with our optimized CHARACTER_GENERATION_PROMPT
- **✅ Responsive Design**: Mobile-first design that scales beautifully across all devices
- **✅ Accessibility-First**: WCAG 2.2 compliant with proper focus management and contrast ratios
- **✅ Real-time Feedback**: Toast notifications and animated loading states
- **✅ Professional Output**: Cinema4D quality rendering with transparent backgrounds

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Recraft API key (via AIML API)

### Environment Variables
```env
AIML_API_KEY=your_aiml_api_key_here
```

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage
1. Navigate to `/canvas`
2. Enter a character type (e.g., "panda", "dragon", "robot")
3. **Select style category** (Realistic Image, Digital Illustration, Vector Illustration)
4. **Choose specific style** from 39+ available options
5. **Customize color palette** with up to 3 colors
6. Select canvas size for your use case
7. Click "Generate Character"
8. Download your professional 3D asset

## 🏗️ Architecture

### Component Structure
```
/app/canvas/
├── page.tsx                    # Main canvas page
├── components/
│   ├── generation-controls.tsx # Input form and generation controls
│   ├── image-display.tsx      # Image display with loading states
│   └── style-selector.tsx     # Style selection (future enhancement)
```

### Key Features Implementation

#### Primary Color Integration
- Uses `#FF6633` as defined in requirements
- Integrated into Tailwind theme via CSS variables (oklch format)
- Applied to UI elements and passed to Recraft API for color influence

#### Character Prompt Enhancement
```typescript
// Replaces "Axolotl" in CHARACTER_GENERATION_PROMPT with user input
const enhancedPrompt = CHARACTER_GENERATION_PROMPT.replace(
  'Axolotl',
  userPrompt.trim() || 'character'
)
```

#### Enterprise Style Selection
- Automatically uses `realistic_image/enterprise` style
- Shows preview thumbnail from recraft-styles.ts
- Professional 3D rendering optimized for commercial use

### Responsive Breakpoints
- Mobile: `< 640px` - Stacked layout
- Tablet: `640px - 1024px` - Responsive grid
- Desktop: `1024px+` - Full sidebar + canvas layout

## 🎨 Styling & Theming

### Custom Colors (Tailwind v4)
```css
--primary: oklch(0.63 0.18 38.8); /* #FF6633 */
```

### Custom Animations
- `animate-pulse-glow`: Smooth pulsing effect
- `animate-float`: Floating animation for icons
- `animate-shimmer`: Loading shimmer effect
- `animate-caret-blink`: Cursor blinking animation

## 🔧 API Integration

### Recraft v3 Configuration
```typescript
interface GenerationParams {
  prompt: string           // Enhanced with CHARACTER_GENERATION_PROMPT
  style: string           // e.g., 'realistic_image/enterprise', 'digital_illustration/pixel_art'
  size: string            // From RECRAFT_IMAGE_SIZE_OPTIONS
  colors: Array<{         // Up to 3 colors for palette influence
    r: number;            // Red (0-255 integer)
    g: number;            // Green (0-255 integer) 
    b: number;            // Blue (0-255 integer)
  }>
}
```

### Image Generation Flow
1. User input enhanced with professional prompt template
2. Primary color converted to RGB and integrated into prompt
3. Request sent to `/api/images/generations`
4. Response displays generated image with download capability

## 📱 Accessibility Features

### WCAG 2.2 Compliance
- ✅ **Focus Management**: Proper tab order and focus-visible styles
- ✅ **Color Contrast**: All text meets AA contrast ratios
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks
- ✅ **Screen Reader**: ARIA labels and descriptive alt text
- ✅ **Keyboard Navigation**: Full keyboard accessibility

### Focus-Visible Styling
```css
focus-visible:ring-primary/20 focus-visible:border-ring
```

## 🔄 Future Enhancements

### Planned Features
- [ ] Style selector with multiple enterprise options
- [ ] Batch generation capabilities
- [ ] Custom color palette selection
- [ ] Asset export in multiple formats
- [ ] Generation history and favorites
- [ ] Advanced prompt customization

### Performance Optimizations
- [ ] Image optimization with Next.js Image component
- [ ] Lazy loading for style thumbnails
- [ ] Caching for repeated generations
- [ ] Progressive loading states

## 🛠️ Development

### Adding New Components
```bash
# Add new shadcn/ui components
npx shadcn@latest add [component-name]
```

### Testing Accessibility
```bash
# Install axe-core for accessibility testing
npm install --save-dev @axe-core/react
```

### Code Quality
- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Tailwind CSS for consistent styling

## 📝 TODOs

### High Priority
- [ ] Add error boundaries for better error handling
- [ ] Implement proper loading states for network requests
- [ ] Add image compression for faster downloads

### Medium Priority
- [ ] Add keyboard shortcuts for common actions
- [ ] Implement undo/redo functionality
- [ ] Add generation presets for different use cases

### Low Priority
- [ ] Add social sharing capabilities
- [ ] Implement user preferences/settings
- [ ] Add analytics for generation metrics

## 🤝 Contributing

1. Follow the existing code style and component patterns
2. Ensure all new components are accessible (WCAG 2.2)
3. Add proper TypeScript types for all props and functions
4. Test on mobile, tablet, and desktop breakpoints
5. Verify color contrast ratios for any new UI elements

## 📄 License

Commercial license included with Recraft v3 enterprise features. 