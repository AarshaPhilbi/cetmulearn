import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToStart = () => {
    const firstPanel = document.getElementById('panel-1');
    firstPanel?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-panel-purple/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-panel-yellow/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-panel-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-panel-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 space-y-8 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-foreground/10 animate-fade-in-up">
          <span className="w-2 h-2 bg-panel-green rounded-full animate-pulse" />
          <span className="font-comic text-muted-foreground">A Story of Growth</span>
        </div>

        {/* Main title */}
        <h1 
          className="font-display text-5xl md:text-8xl lg:text-9xl text-foreground text-shadow-comic animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-primary">μLearn</span> CET
        </h1>

        {/* Subtitle */}
        <p 
          className="font-comic text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Scroll through the story of how students find their path in the world of learning
        </p>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToStart}
          className="mt-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up cursor-pointer"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="font-display text-lg">Begin the Story</span>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>

      {/* Comic panel border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-foreground/10" />
    </section>
  );
};
