import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Laptop, Users, Star, Award, Target } from 'lucide-react';

export const Panel6Transformation = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-secondary/30 via-background to-panel-yellow/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-secondary/50 text-panel-yellow font-display text-xl rounded-full border-2 border-panel-yellow/30">
            Panel 6: Transformation
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Change 🌟
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Confident Student with Skills" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Success indicators */}
          <div className="absolute -top-4 -right-4 p-3 bg-panel-green rounded-full animate-float shadow-comic">
            <Star className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
          <div className="absolute bottom-8 -left-4 p-3 bg-panel-blue rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Laptop className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 right-1/4 p-3 bg-panel-purple rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-1/3 -right-4 p-3 bg-panel-yellow rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -left-2 p-3 bg-primary rounded-full animate-float shadow-comic" style={{ animationDelay: '2s' }}>
            <Target className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Before/After comparison */}
        <div className="flex flex-col md:flex-row gap-4 items-center max-w-2xl w-full">
          <div className="flex-1 p-4 bg-muted/50 rounded-xl border-2 border-muted text-center">
            <p className="font-display text-lg text-muted-foreground">Before</p>
            <p className="font-comic text-foreground/70">Confused & Unsure 😕</p>
          </div>
          <div className="text-4xl">→</div>
          <div className="flex-1 p-4 bg-panel-green/20 rounded-xl border-2 border-panel-green/40 text-center">
            <p className="font-display text-lg text-panel-green">After</p>
            <p className="font-comic text-foreground">Confident & Growing 🚀</p>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            Fast forward a few months. That same confused student is now 
            <span className="font-bold text-panel-green"> confident</span>, 
            <span className="font-bold text-panel-blue"> building projects</span>, and 
            <span className="font-bold text-panel-purple"> helping others</span> just like someone once helped them.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            "Now I know <span className="font-bold text-primary">what I'm learning</span> — and 
            <span className="font-bold text-accent"> why</span>." 
            The journey from confusion to clarity wasn't instant, but it was worth every step.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
