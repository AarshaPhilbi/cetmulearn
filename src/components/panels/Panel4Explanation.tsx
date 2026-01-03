import { StoryPanel } from '@/components/StoryPanel';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Users, Heart, Lightbulb, Rocket } from 'lucide-react';

export const Panel4Explanation = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-purple/20 via-background to-panel-pink/20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-purple/20 text-panel-purple font-display text-xl rounded-full">
            Panel 4: Explanation
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            What is μLearn?
          </h2>
        </div>

        {/* Large Image */}
        <div className="relative w-full max-w-2xl">
          <ImagePlaceholder 
            label="Students Learning Together" 
            aspectRatio="video"
            className="w-full"
          />
          {/* Floating icons */}
          <div className="absolute -top-4 -left-4 p-3 bg-panel-purple rounded-full animate-float shadow-comic">
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute top-8 -right-4 p-3 bg-panel-pink rounded-full animate-float shadow-comic" style={{ animationDelay: '0.5s' }}>
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 left-1/4 p-3 bg-secondary rounded-full animate-float shadow-comic" style={{ animationDelay: '1s' }}>
            <Lightbulb className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div className="absolute bottom-8 -right-2 p-3 bg-primary rounded-full animate-float shadow-comic" style={{ animationDelay: '1.5s' }}>
            <Rocket className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            <span className="font-bold text-primary">μLearn</span> is a 
            <span className="font-bold text-panel-purple"> peer learning community</span> — 
            a place where students come together to learn, share, and grow as one.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            It's not about competing with each other. It's about 
            <span className="font-bold text-panel-pink"> supporting one another</span>, 
            asking questions without fear, and discovering your path 
            <span className="font-bold text-accent"> together</span>. 
            Here, everyone is both a learner and a teacher.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Users, label: 'Community', color: 'bg-panel-purple' },
            { icon: Heart, label: 'Support', color: 'bg-panel-pink' },
            { icon: Lightbulb, label: 'Growth', color: 'bg-secondary' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-foreground/20">
              <div className={`${color} w-8 h-8 rounded-full flex items-center justify-center`}>
                <Icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-comic text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryPanel>
  );
};
