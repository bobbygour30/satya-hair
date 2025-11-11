import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ShowCase from '../components/ShowCase';
import LogoSlider from '../components/LogoSlider';
import HIFUFeatureComponent from '../components/HIFUFeatureComponent';
import ProtocolPrecisionSection from '../components/ProtocolPrecisionSection';
import ScienceBehindHIFU from '../components/ScienceBehindHIFU';
import HIFUStepByStep from '../components/HIFUStepByStep';
import RibbonStrip from '../components/RibbonStrip';
import RealPeopleRealLift from '../components/RealPeopleRealLift';
import AftercareSection from '../components/AftercareSection';
import DermatologistSection from '../components/DermatologistSection';
import HifuFAQSection from '../components/HifuFAQSection';
import HifuMediaShowcase from '../components/HifuMediaShowcase';
import SatyaFacilitySection from '../components/SatyaFacilitySection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowCase />
      <ScienceBehindHIFU />
      <DermatologistSection />
      <LogoSlider />
      <HIFUFeatureComponent />
      <HIFUStepByStep />
      <ProtocolPrecisionSection />
      <RibbonStrip />
      <RealPeopleRealLift />
      <AftercareSection />
      <SatyaFacilitySection />
      <HifuMediaShowcase />
      <HifuFAQSection />
      <Footer />
    </div>
  );
};

export default HomePage; // Only one default export