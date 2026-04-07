import Header from '@/components/Header';
import DevelopmentBanner from '@/components/DevelopmentBanner';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <DevelopmentBanner />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
