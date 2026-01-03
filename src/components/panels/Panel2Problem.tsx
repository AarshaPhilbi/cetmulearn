import { StoryPanel } from '@/components/StoryPanel';
import { SpeechBubble } from '@/components/SpeechBubble';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

export const Panel2Problem = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-orange/20 via-background to-panel-yellow/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Side */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-2 bg-panel-orange/20 text-panel-orange font-display text-xl rounded-full">
            Panel 2: The Problem
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            Feeling Lost
          </h2>
          
          {/* Topic bubbles */}
          <div className="flex flex-wrap gap-3">
            {['Web Dev', 'AI/ML', 'Hackathons', 'Internships'].map((topic, i) => (
              <span 
                key={topic}
                className="px-4 py-2 bg-card border-2 border-foreground/20 rounded-full font-comic text-sm md:text-base animate-bounce-gentle"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {topic}
              </span>
            ))}
          </div>

          <SpeechBubble className="max-w-lg" position="left">
            <p className="text-foreground/90">
              "I feel <span className="font-bold text-accent">left behind</span>."
            </p>
          </SpeechBubble>
        </div>

        {/* Visual Side */}
        <div>
          <ImagePlaceholder 
            label="Friends Discussing" 
            aspectRatio="video"
            className="max-w-lg mx-auto"
          />
        </div>
      </div>
    </StoryPanel>
  );
};
