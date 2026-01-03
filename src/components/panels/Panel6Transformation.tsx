import { StoryPanel } from '@/components/StoryPanel';
import { SpeechBubble } from '@/components/SpeechBubble';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Laptop, Users, Star } from 'lucide-react';

export const Panel6Transformation = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-secondary/30 via-background to-panel-yellow/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Visual Side */}
        <div className="relative">
          <ImagePlaceholder 
            label="Confident Student" 
            aspectRatio="square"
            className="max-w-md mx-auto"
          />
          {/* Success indicators */}
          <div className="absolute -top-4 -right-4 p-3 bg-panel-green rounded-full animate-float">
            <Star className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
          <div className="absolute bottom-8 -left-4 p-3 bg-panel-blue rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
            <Laptop className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-2 right-1/4 p-3 bg-panel-purple rounded-full animate-float" style={{ animationDelay: '1s' }}>
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-2 bg-secondary/50 text-panel-yellow font-display text-xl rounded-full border-2 border-panel-yellow/30">
            Panel 6: Transformation
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Change 🌟
          </h2>
          
          <SpeechBubble className="max-w-lg" position="left">
            <p className="text-foreground/90">
              "Now I know <span className="font-bold text-panel-green">what I'm learning</span> — and <span className="font-bold text-primary">why</span>."
            </p>
          </SpeechBubble>

          {/* Before/After comparison */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 p-4 bg-muted/50 rounded-xl border-2 border-muted">
              <p className="font-comic text-muted-foreground text-sm">Before: Confused 😕</p>
            </div>
            <ArrowIcon />
            <div className="flex-1 p-4 bg-panel-green/20 rounded-xl border-2 border-panel-green/40">
              <p className="font-comic text-panel-green text-sm">After: Confident 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </StoryPanel>
  );
};

const ArrowIcon = () => (
  <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);
