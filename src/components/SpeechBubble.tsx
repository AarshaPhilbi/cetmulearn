import { cn } from '@/lib/utils';

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'center';
}

export const SpeechBubble = ({ children, className, position = 'left' }: SpeechBubbleProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card p-4 md:p-6 rounded-2xl border-3 border-foreground font-comic text-lg md:text-xl",
        className
      )}
      style={{ boxShadow: '6px 6px 0px hsl(var(--foreground))' }}
    >
      {children}
      <div 
        className={cn(
          "absolute w-0 h-0",
          position === 'left' && "left-8",
          position === 'right' && "right-8",
          position === 'center' && "left-1/2 -translate-x-1/2"
        )}
        style={{
          bottom: '-24px',
          borderLeft: '18px solid transparent',
          borderRight: '18px solid transparent',
          borderTop: '24px solid hsl(var(--foreground))',
        }}
      />
      <div 
        className={cn(
          "absolute w-0 h-0 z-10",
          position === 'left' && "left-[34px]",
          position === 'right' && "right-[34px]",
          position === 'center' && "left-1/2 -translate-x-1/2"
        )}
        style={{
          bottom: '-18px',
          borderLeft: '14px solid transparent',
          borderRight: '14px solid transparent',
          borderTop: '20px solid hsl(var(--card))',
        }}
      />
    </div>
  );
};
