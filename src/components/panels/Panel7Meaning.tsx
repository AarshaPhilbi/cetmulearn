import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Zap, TrendingUp, Users } from 'lucide-react';

export const Panel7Meaning = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-indigo/20 via-background to-primary/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-indigo/20 text-panel-indigo font-display text-xl rounded-full">
            Panel 7: The Meaning
          </span>
        </div>

        {/* Logo reveal */}
        <div className="relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-panel-purple/40 to-panel-indigo/40 rounded-3xl blur-2xl opacity-60 animate-pulse" />
          <div className="relative bg-card p-8 md:p-12 rounded-3xl border-4 border-foreground shadow-comic">
            <h2 className="font-display text-5xl md:text-8xl text-primary mb-4">
              μLearn
            </h2>
            <p className="font-display text-2xl md:text-3xl text-foreground/80">
              = Micro Learning
            </p>
          </div>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Micro Learning Concept" 
            aspectRatio="video"
            className="w-full"
          />
        </div>

        {/* Key points */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl">
          {[
            { icon: Zap, title: 'Small Steps', color: 'bg-panel-yellow' },
            { icon: TrendingUp, title: 'Continuous Growth', color: 'bg-panel-green' },
            { icon: Users, title: 'Together', color: 'bg-panel-purple' },
          ].map(({ icon: Icon, title, color }) => (
            <div 
              key={title} 
              className="p-4 md:p-6 bg-card rounded-2xl border-3 border-foreground/10 text-center"
              style={{ boxShadow: '4px 4px 0px hsl(var(--foreground) / 0.1)' }}
            >
              <div className={`${color} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm md:text-lg text-foreground">{title}</h3>
            </div>
          ))}
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            The "μ" in μLearn stands for <span className="font-bold text-primary">Micro</span> — 
            because real growth happens in <span className="font-bold text-panel-yellow">small, consistent steps</span>.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            It's not about learning everything at once. It's about 
            <span className="font-bold text-panel-green"> continuous growth</span>, 
            one step at a time, <span className="font-bold text-panel-purple">together</span> with 
            a community that has your back.
          </p>
        </div>
      </div>
    </StoryPanel>
  );
};
