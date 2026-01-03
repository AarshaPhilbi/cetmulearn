import { StoryPanel } from '@/components/StoryPanel';
import { NarrationBox } from '@/components/NarrationBox';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Users, Heart, Lightbulb } from 'lucide-react';

export const Panel4Explanation = () => {
  return (
    <StoryPanel bgColor="bg-gradient-to-br from-panel-purple/20 via-background to-panel-pink/20">
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-panel-purple/20 text-panel-purple font-display text-xl rounded-full">
            Panel 4: Explanation
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-shadow-comic">
            What is μLearn?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <ImagePlaceholder 
              label="Group Learning Together" 
              aspectRatio="video"
              className="max-w-lg mx-auto"
            />
          </div>

          {/* Narration */}
          <div className="space-y-6">
            <NarrationBox className="border-panel-purple/40">
              <p className="text-foreground text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-primary">μLearn</span> is a <span className="text-panel-purple font-semibold">peer learning community</span> where students grow by learning together.
              </p>
            </NarrationBox>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: 'Community', color: 'bg-panel-purple' },
                { icon: Heart, label: 'Support', color: 'bg-panel-pink' },
                { icon: Lightbulb, label: 'Growth', color: 'bg-secondary' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="text-center space-y-2">
                  <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-comic text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StoryPanel>
  );
};
