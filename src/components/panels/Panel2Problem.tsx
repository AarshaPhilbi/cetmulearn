import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { MessageCircle, Brain, Briefcase, Trophy } from 'lucide-react';

export const Panel2Problem = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-orange/20 via-background to-panel-yellow/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-orange/20 text-panel-orange font-display text-xl rounded-full">
            Panel 2: The Problem
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            Feeling Lost
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Friends Discussing Different Paths" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Floating icons representing different paths */}
          <div className="absolute -top-4 -left-4 p-3 bg-panel-orange rounded-full animate-float shadow-comic">
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-4 p-3 bg-panel-yellow rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 left-1/4 p-3 bg-panel-pink rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute bottom-8 -right-2 p-3 bg-panel-green rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Trophy className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            Everywhere you look, friends are talking about <span className="font-bold text-panel-orange">Web Development</span>, 
            <span className="font-bold text-panel-yellow"> AI & Machine Learning</span>, 
            <span className="font-bold text-panel-pink"> Hackathons</span>, and 
            <span className="font-bold text-panel-green"> Internships</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Everyone seems to know what they're doing — except you. The fear of being 
            <span className="font-bold text-accent"> left behind</span> creeps in, 
            and you wonder if you'll ever catch up with everyone else.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
