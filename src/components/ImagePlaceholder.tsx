import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

export const ImagePlaceholder = ({ 
  label = "Add Image", 
  className,
  aspectRatio = 'square'
}: ImagePlaceholderProps) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[2/1]',
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl border-3 border-foreground/20 bg-muted flex flex-col items-center justify-center gap-3 transition-all hover:border-primary/50 hover:bg-muted/80",
        aspectClasses[aspectRatio],
        className
      )}
      style={{ boxShadow: '6px 6px 0px hsl(var(--foreground) / 0.1)' }}
    >
      <ImageIcon className="w-12 h-12 text-muted-foreground/60" />
      <span className="text-muted-foreground font-display text-lg tracking-wide">
        {label}
      </span>
    </div>
  );
};
