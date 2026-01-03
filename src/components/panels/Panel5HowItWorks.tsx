import { StoryPanel } from '@/components/StoryPanel';
import { NarrationBox } from '@/components/NarrationBox';
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
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-green/20 text-panel-green font-display text-xl rounded-full">
            Panel 5: How It Works
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            The Journey
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="text-center space-y-3 group">
                <div 
                  className={`${step.color} w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto transition-transform hover:scale-110 border-3 border-foreground`}
                  style={{ boxShadow: '4px 4px 0px hsl(var(--foreground))' }}
                >
                  <step.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground">{step.label}</h3>
                  <p className="font-comic text-sm text-muted-foreground hidden md:block">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <NarrationBox className="border-panel-green/40">
            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              <span className="font-semibold">No pressure. No competition.</span><br />
              Just <span className="text-panel-green font-bold">learning by doing</span>.
            </p>
          </NarrationBox>

          <ImagePlaceholder 
            label="Steps Visual" 
            aspectRatio="video"
            className="max-w-md mx-auto"
          />
        </div>
      </div>
    </StoryPanel>
  );
};
