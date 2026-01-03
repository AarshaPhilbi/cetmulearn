import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Sparkles, Bell, Eye, Lightbulb } from 'lucide-react';

export const Panel3Discovery = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-teal/20 via-background to-panel-green/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-teal/20 text-panel-teal font-display text-xl rounded-full">
            Panel 3: Discovery
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            A New Hope ✨
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Student Discovering μLearn" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Floating icons */}
          <div className="absolute -top-4 -left-4 p-3 bg-panel-teal rounded-full animate-float shadow-comic">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-4 p-3 bg-panel-green rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Bell className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 right-1/4 p-3 bg-primary rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <Eye className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute bottom-8 -left-2 p-3 bg-panel-purple rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Lightbulb className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* μLearn reveal card */}
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-panel-teal/50 to-panel-green/50 rounded-2xl blur-xl opacity-60 animate-pulse" />
          <div className="relative bg-card px-8 py-4 rounded-2xl border-3 border-foreground shadow-comic">
            <h3 className="font-display text-3xl md:text-4xl text-primary">
              μLearn CET
            </h3>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            Then one day, you stumble upon something — a <span className="font-bold text-panel-teal">poster on the notice board</span>, 
            a friend's casual mention, or a <span className="font-bold text-panel-green">notification on your phone</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            <span className="font-bold text-primary">"μLearn CET"</span> — you've never heard of it before. 
            Curiosity sparks. What could this be? Something finally feels 
            <span className="font-bold text-accent"> different</span>.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
