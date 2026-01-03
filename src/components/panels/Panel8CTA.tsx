import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Sparkles, Users, Star } from 'lucide-react';

export const Panel8CTA = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-primary/20 via-panel-purple/10 to-accent/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-display text-xl rounded-full">
            Panel 8: Your Turn
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic max-w-4xl leading-tight">
            If you're curious, μLearn already has a place for you.
          </h2>
        </div>

        {/* Large Community Image */}
        <div className="relative w-full max-w-3xl">
          <ImagePlaceholder 
            label="μLearn CET Community" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Floating icons */}
          <div className="absolute -top-4 -left-4 p-3 bg-primary rounded-full animate-float shadow-comic">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-4 p-3 bg-panel-purple rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 left-1/4 p-3 bg-panel-pink rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute bottom-8 -right-2 p-3 bg-panel-yellow rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Star className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            This isn't just another club or community — it's a 
            <span className="font-bold text-primary"> movement</span> of students 
            who believe in <span className="font-bold text-panel-purple">learning together</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Whether you're a complete beginner or someone with experience, 
            <span className="font-bold text-accent"> there's a place for you here</span>. 
            All you need is curiosity and a willingness to grow.
          </p>
        </div>

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
        <div className="pt-10 border-t-2 border-border w-full text-center">
          <p className="font-comic text-muted-foreground">
            Made with 💜 by <span className="font-bold text-primary">μLearn CET Chapter</span>
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
