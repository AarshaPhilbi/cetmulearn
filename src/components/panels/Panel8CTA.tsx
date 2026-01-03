import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export const Panel8CTA = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-primary/20 via-panel-purple/10 to-accent/20">
      <div className="text-center space-y-10">
        <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-display text-xl rounded-full">
          Panel 8: Your Turn
        </span>

        <h2 className="font-display text-4xl md:text-7xl text-foreground text-shadow-comic max-w-4xl mx-auto leading-tight">
          If you're curious, μLearn already has a place for you.
        </h2>

        {/* Community image */}
        <ImagePlaceholder 
          label="μLearn Community" 
          aspectRatio="wide"
          className="max-w-4xl mx-auto"
        />

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="font-display text-xl px-8 py-6 bg-primary hover:bg-primary/90 border-3 border-foreground group"
            style={{ boxShadow: '4px 4px 0px hsl(var(--foreground))' }}
          >
            Join μLearn CET
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-display text-xl px-8 py-6 border-3 border-foreground bg-card hover:bg-secondary"
            style={{ boxShadow: '4px 4px 0px hsl(var(--foreground) / 0.3)' }}
          >
            <Heart className="mr-2 w-5 h-5" />
            Learn More
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t-2 border-border">
          <p className="font-comic text-muted-foreground">
            Made with 💜 by <span className="font-bold text-primary">μLearn CET Chapter</span>
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
