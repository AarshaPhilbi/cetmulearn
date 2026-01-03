import { StoryPanel } from '@/components/StoryPanel';
import { NarrationBox } from '@/components/NarrationBox';
import { Zap, TrendingUp, Users } from 'lucide-react';

export const Panel7Meaning = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-indigo/20 via-background to-primary/20">
      <div className="text-center space-y-10">
        <span className="inline-block px-4 py-2 bg-panel-indigo/20 text-panel-indigo font-display text-xl rounded-full">
          Panel 7: The Meaning
        </span>

        {/* Logo reveal */}
        <div className="relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-panel-purple/40 to-panel-indigo/40 rounded-3xl blur-2xl opacity-60 animate-pulse" />
          <div className="relative bg-card p-8 md:p-12 rounded-3xl border-4 border-foreground">
            <h2 className="font-display text-5xl md:text-8xl text-primary mb-4">
              μLearn
            </h2>
            <p className="font-display text-2xl md:text-3xl text-foreground/80">
              = Micro Learning
            </p>
          </div>
        </div>

        {/* Key points */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Zap, title: 'Small Steps', desc: 'Bite-sized learning that fits your schedule', color: 'bg-panel-yellow' },
            { icon: TrendingUp, title: 'Continuous Growth', desc: 'Progress every day, no matter how small', color: 'bg-panel-green' },
            { icon: Users, title: 'Together', desc: 'Learn with peers who support you', color: 'bg-panel-purple' },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div 
              key={title} 
              className="p-6 bg-card rounded-2xl border-3 border-foreground/10 hover:border-primary/40 transition-all hover:-translate-y-1"
              style={{ boxShadow: '4px 4px 0px hsl(var(--foreground) / 0.1)' }}
            >
              <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
              <p className="font-comic text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <NarrationBox className="max-w-2xl mx-auto border-primary/40">
          <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium">
            Small steps. <span className="text-primary">Continuous growth.</span> Together.
          </p>
        </NarrationBox>
      </div>
    </StoryPanel>
  );
};
