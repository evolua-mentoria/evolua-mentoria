import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import InvestmentSection from "@/components/InvestmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <BonusSection />
        <AboutSection />
        <TrustSection />
        <InvestmentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
