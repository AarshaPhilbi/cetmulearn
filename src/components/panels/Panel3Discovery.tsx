import { StoryPanel } from '@/components/StoryPanel';
import { SpeechBubble } from '@/components/SpeechBubble';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Sparkles } from 'lucide-react';

export const Panel3Discovery = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-teal/20 via-background to-panel-green/20">
      <div className="text-center space-y-8">
        <span className="inline-block px-4 py-2 bg-panel-teal/20 text-panel-teal font-display text-xl rounded-full">
          Panel 3: Discovery
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
          A New Hope ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {/* Poster/Phone notification */}
          <div className="md:col-span-1">
            <ImagePlaceholder 
              label="Poster / Notification" 
              aspectRatio="portrait"
              className="max-w-xs mx-auto"
            />
          </div>

          {/* Center content */}
          <div className="md:col-span-1 space-y-6">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-panel-teal/50 to-panel-green/50 rounded-2xl blur-xl opacity-60 animate-pulse" />
              <div className="relative bg-card p-6 rounded-2xl border-3 border-foreground">
                <Sparkles className="w-8 h-8 text-panel-teal mx-auto mb-3" />
                <h3 className="font-display text-3xl md:text-4xl text-primary">
                  μLearn CET
                </h3>
              </div>
            </div>
          </div>

          {/* Student discovering */}
          <div className="md:col-span-1">
            <ImagePlaceholder 
              label="Student Discovering" 
              aspectRatio="square"
              className="max-w-xs mx-auto"
            />
          </div>
        </div>

        <SpeechBubble className="max-w-md mx-auto" position="center">
          <p className="text-foreground/90 text-center">
            "What's <span className="font-bold text-panel-teal">μLearn</span>?"
          </p>
        </SpeechBubble>
      </div>
    </StoryPanel>
  );
};
