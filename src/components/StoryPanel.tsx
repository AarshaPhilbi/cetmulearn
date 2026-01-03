import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StoryPanelProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  delay?: number;
}

export const StoryPanel = ({ 
  children, 
  className, 
  bgColor = 'bg-background',
  delay = 0 
}: StoryPanelProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section 
      ref={ref}
      className={cn(
        "min-h-screen w-full flex items-center justify-center py-16 md:py-24 px-4 md:px-8",
        bgColor,
        className
      )}
    >
      <div 
        className={cn(
          "max-w-6xl w-full opacity-0",
          isVisible && "animate-fade-in-up"
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};
