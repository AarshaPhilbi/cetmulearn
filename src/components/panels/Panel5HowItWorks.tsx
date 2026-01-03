import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { UserPlus, BookOpen, Hammer, Share2, ArrowRight } from 'lucide-react';

export const Panel5HowItWorks = () => {
  const steps = [
    { icon: UserPlus, label: 'Join', color: 'bg-panel-blue', desc: 'Become part of the community' },
    { icon: BookOpen, label: 'Learn', color: 'bg-panel-green', desc: 'Pick up new skills' },
    { icon: Hammer, label: 'Build', color: 'bg-panel-orange', desc: 'Create real projects' },
    { icon: Share2, label: 'Share', color: 'bg-panel-purple', desc: 'Help others grow' },
  ];

  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-green/20 via-background to-panel-teal/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-green/20 text-panel-green font-display text-xl rounded-full">
            Panel 5: How It Works
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Journey
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="The Learning Journey" 
            aspectRatio="video"
            className="w-full"
          />
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="text-center space-y-3 group">
                <div 
                  className={`${step.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto transition-transform hover:scale-110 border-3 border-foreground`}
                  style={{ boxShadow: '4px 4px 0px hsl(var(--foreground))' }}
                >
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-foreground">{step.label}</h3>
                  <p className="font-comic text-xs md:text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            The process is simple: <span className="font-bold text-panel-blue">Join</span> the community, 
            <span className="font-bold text-panel-green"> Learn</span> at your own pace, 
            <span className="font-bold text-panel-orange"> Build</span> real projects that matter, and 
            <span className="font-bold text-panel-purple"> Share</span> your knowledge with others.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            <span className="font-semibold">No pressure. No competition.</span> Just 
            <span className="font-bold text-primary"> learning by doing</span> — 
            at a pace that works for you.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
