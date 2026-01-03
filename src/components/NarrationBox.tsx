import { cn } from '@/lib/utils';

interface NarrationBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const NarrationBox = ({ children, className }: NarrationBoxProps) => {
  return (
    <div 
      className={cn(
        "bg-secondary/95 p-4 md:p-6 rounded-lg border-2 border-foreground/30 font-body text-base md:text-lg",
        className
      )}
      style={{ boxShadow: '4px 4px 0px hsl(var(--foreground) / 0.2)' }}
    >
      {children}
    </div>
  );
};
