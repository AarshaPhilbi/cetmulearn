import { HeroSection } from '@/components/HeroSection';
import { Panel1Confusion } from '@/components/panels/Panel1Confusion';
import { Panel2Problem } from '@/components/panels/Panel2Problem';
import { Panel3Discovery } from '@/components/panels/Panel3Discovery';
import { Panel4Explanation } from '@/components/panels/Panel4Explanation';
import { Panel5HowItWorks } from '@/components/panels/Panel5HowItWorks';
import { Panel6Transformation } from '@/components/panels/Panel6Transformation';
import { Panel7Meaning } from '@/components/panels/Panel7Meaning';
import { Panel8CTA } from '@/components/panels/Panel8CTA';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      
      <div id="panel-1">
        <Panel1Confusion />
      </div>
      <Panel2Problem />
      <Panel3Discovery />
      <Panel4Explanation />
      <Panel5HowItWorks />
      <Panel6Transformation />
      <Panel7Meaning />
      <Panel8CTA />
    </main>
  );
};

export default Index;
