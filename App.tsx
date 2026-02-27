
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegacySection } from './components/LegacySection';
import { Ecosystem } from './components/Ecosystem';
import { SoftwareDevelopment } from './components/SoftwareDevelopment';
import { BusinessServices } from './components/BusinessServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { SeemattiStoresService } from './components/SeemattiStoresService';
import { EAcademyService } from './components/EAcademyService';
import { EzyCampusService } from './components/EzyCampusService';
import { SoftwareServicePage } from './components/SoftwareServicePage';
import { BusinessServicePage } from './components/BusinessServicePage';
import { FuturePage } from './components/FuturePage';
import { ContactPage } from './components/ContactPage';
import { PartnerPage } from './components/PartnerPage';
import { AIAutomationPage } from './components/AIAutomationPage';
import { GlobalScalingPage } from './components/GlobalScalingPage';
import { EnterpriseSecurityPage } from './components/EnterpriseSecurityPage';
import { BusinessModelClarity } from './components/BusinessModelClarity';
import { PlatformBlock } from './components/PlatformBlock';
import { CapabilityIcons } from './components/CapabilityIcons';
import { TestimonialSystem } from './components/TestimonialSystem';
import { CaseStudySystem } from './components/CaseStudySystem';
import { GallerySection } from './components/GallerySection';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#about':
        return <AboutUs />;
      case '#service-seemattistores':
        return <SeemattiStoresService />;
      case '#service-eacademy':
        return <EAcademyService />;
      case '#service-ezycampus':
        return <EzyCampusService />;
      case '#service-software':
        return <SoftwareServicePage />;
      case '#service-business':
        return <BusinessServicePage />;
      case '#future':
        return <FuturePage />;
      case '#ai-automation':
        return <AIAutomationPage />;
      case '#global-scaling':
        return <GlobalScalingPage />;
      case '#enterprise-security':
        return <EnterpriseSecurityPage />;
      case '#partner':
        return <PartnerPage />;
      case '#contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <LegacySection />
            <BusinessModelClarity />
            <Ecosystem />
            <PlatformBlock />
            <SoftwareDevelopment />
            <CapabilityIcons />
            <BusinessServices />
            <CaseStudySystem />
            <GallerySection />
            <TestimonialSystem />
            <WhyChooseUs />
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
