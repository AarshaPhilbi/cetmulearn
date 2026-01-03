import { StoryPanel } from '@/components/StoryPanel';
import { SpeechBubble } from '@/components/SpeechBubble';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { BookOpen, Youtube, HelpCircle } from 'lucide-react';

export const Panel1Confusion = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-blue/20 via-background to-panel-purple/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Visual Side */}
        <div className="relative order-2 md:order-1">
          <ImagePlaceholder 
            label="Confused Student" 
            aspectRatio="square"
            className="max-w-md mx-auto"
          />
          {/* Floating icons */}
          <div className="absolute -top-4 -left-4 p-3 bg-panel-blue rounded-full animate-float">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-2 p-3 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
            <Youtube className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="absolute -bottom-2 left-1/4 p-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}>
            <HelpCircle className="w-6 h-6 text-secondary-foreground" />
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2 space-y-6">
          <span className="inline-block px-4 py-2 bg-panel-blue/20 text-panel-blue font-display text-xl rounded-full">
            Panel 1: Confusion
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Beginning
          </h2>
          <SpeechBubble className="max-w-lg">
            <p className="text-foreground/90">
              "Everyone says learn skills… but <span className="font-bold text-primary">where do I start?</span>"
            </p>
          </SpeechBubble>
        </div>
      </div>
    </StoryPanel>
  );
};
