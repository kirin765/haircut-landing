import Header from '@/components/Header';
import DevelopmentBanner from '@/components/DevelopmentBanner';
import Hero from '@/components/Hero';
import MVPPreview from '@/components/MVPPreview';
import CustomerHistoryPreview from '@/components/CustomerHistoryPreview';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import ComparisonSection from '@/components/ComparisonSection';
import Benefits from '@/components/Benefits';
import ROISection from '@/components/ROISection';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <DevelopmentBanner />
      <Hero />
      <MVPPreview />
      <CustomerHistoryPreview />
      <Problem />
      <Solution />
      <HowItWorks />
      <ComparisonSection />
      <Benefits />
      <ROISection />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
