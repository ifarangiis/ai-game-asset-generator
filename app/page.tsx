"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Zap, 
  Star, 
  Download, 
  Shield, 
  Clock,
  Wand2,
  Image as ImageIcon,
  CheckCircle,
  PlayCircle,
  Github,
  Twitter,
  ExternalLink
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 hover-lift">
            <Sparkles className="size-5 text-primary animate-pulse" />
            <span className="text-lg font-semibold">AI Character Studio</span>
            <Badge variant="secondary" className="ml-2 gradient-primary text-white">
              v3.0
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Create <span className="text-gradient-primary">Stunning</span><br />
              AI Characters in <span className="text-gradient-secondary">Seconds</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Professional 3D character assets powered by Recraft v3. Choose from 39+ art styles, 
              customize colors, and generate Cinema4D quality renders with commercial licensing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/canvas">
              <Button size="lg" className="gradient-primary hover:shadow-xl hover:shadow-primary/25 focus-ring h-14 px-8 text-lg font-semibold animate-pulse-glow">
                <Wand2 className="size-6 mr-3" />
                Start Creating Now
                <ArrowRight className="size-6 ml-3" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="glass hover-lift focus-ring h-14 px-8 text-lg">
              <PlayCircle className="size-6 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="size-4 text-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Download className="size-4 text-green-500" />
              <span>50K+ Downloads</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-blue-500" />
              <span>Commercial License</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge variant="outline" className="glass border-primary/30 mb-6">
              <Sparkles className="size-4 mr-2 text-primary" />
              Professional Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need for <span className="text-gradient-primary">Professional</span> Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading AI technology meets professional design tools
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Feature 1 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Palette className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">39+ Art Styles</h3>
                  <p className="text-muted-foreground">
                    From realistic images to vector illustrations, choose the perfect style for your project
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    Realistic • Digital • Vector
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Cinema4D Quality</h3>
                  <p className="text-muted-foreground">
                    Professional 3D rendering with transparent backgrounds and commercial licensing
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    Enterprise Grade
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Powered by Recraft v3, generate stunning characters in seconds, not hours
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    Recraft v3 Powered
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Custom Colors</h3>
                  <p className="text-muted-foreground">
                    Full color palette control with up to 3 custom colors to match your brand
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    Brand Matching
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Instant Results</h3>
                  <p className="text-muted-foreground">
                    No waiting, no queues. Get your professional character assets immediately
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    Real-time Generation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="glass-lg border-white/20 hover-lift hover-glow group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="size-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Commercial Ready</h3>
                  <p className="text-muted-foreground">
                    Full commercial license included. Use in any project without restrictions
                  </p>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="glass">
                    No Restrictions
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="glass border-primary/30 mb-6">
              <Wand2 className="size-4 mr-2 text-primary" />
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Create in <span className="text-gradient-primary">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Step 1 */}
            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="size-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Describe Your Character</h3>
                <p className="text-muted-foreground">
                  Enter your character concept like "mystical dragon" or "cyber ninja"
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 mx-auto gradient-secondary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <Palette className="size-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Choose Style & Colors</h3>
                <p className="text-muted-foreground">
                  Select from 39+ art styles and customize your color palette
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-20 h-20 mx-auto gradient-accent rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <Download className="size-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Download & Use</h3>
                <p className="text-muted-foreground">
                  Get your professional HD character ready for commercial use
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/canvas">
              <Button size="lg" className="gradient-primary hover:shadow-xl hover:shadow-primary/25 focus-ring h-14 px-8 text-lg font-semibold">
                <Sparkles className="size-6 mr-3" />
                Try It Now - It's Free!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Create <span className="text-gradient-primary">Amazing Characters?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators using our AI to generate professional character assets in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/canvas">
              <Button size="lg" className="gradient-primary hover:shadow-xl hover:shadow-primary/25 focus-ring h-14 px-8 text-lg font-semibold animate-pulse-glow">
                <Wand2 className="size-6 mr-3" />
                Start Creating Now
                <ArrowRight className="size-6 ml-3" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="glass hover-lift focus-ring h-14 px-8 text-lg">
              <Github className="size-6 mr-3" />
              View on GitHub
              <ExternalLink className="size-4 ml-2" />
            </Button>
          </div>

          <div className="pt-8">
            <Badge variant="outline" className="glass text-lg px-6 py-3">
              <Shield className="size-5 mr-2 text-green-500" />
              Free to use • No signup required • Commercial license included
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="size-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-gradient-primary">AI Character Studio</div>
                <div className="text-sm text-muted-foreground">Powered by Recraft v3</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="hover-lift">
                <Github className="size-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-lift">
                <Twitter className="size-5" />
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <p>© 2024 AI Character Studio. Built with Next.js, Recraft v3, and love for creativity.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
