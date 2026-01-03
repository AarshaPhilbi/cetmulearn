import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { BookOpen, Youtube, HelpCircle, Code, Sparkles } from 'lucide-react';

export const Panel1Confusion = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-blue/20 via-background to-panel-purple/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-blue/20 text-panel-blue font-display text-xl rounded-full">
            Panel 1: Confusion
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Beginning
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Confused Engineering Student" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Floating icons */}
          <div className="absolute -top-4 -left-4 p-3 bg-panel-blue rounded-full animate-float shadow-comic">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-4 p-3 bg-accent rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Youtube className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="absolute -bottom-4 left-1/4 p-3 bg-secondary rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <HelpCircle className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div className="absolute bottom-8 -right-2 p-3 bg-panel-purple rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Code className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-1/2 -left-6 p-3 bg-panel-orange rounded-full animate-float shadow-comic" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            When engineering students first step into college, they're hit with a whirlwind of emotions — 
            <span className="font-bold text-panel-blue"> excitement</span>, 
            <span className="font-bold text-panel-purple"> confusion</span>, and an overwhelming sense of 
            <span className="font-bold text-panel-orange"> possibility</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Everyone talks about learning new skills — <em>coding, AI, web development, hackathons</em> — 
            but no one tells you <span className="font-bold text-primary">where to actually begin</span>. 
            The journey feels exciting yet daunting, with endless paths but no clear starting point.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
