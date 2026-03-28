"use client";
import FooterSection from "@/components/footer";
import InvestHero from "@/components/invest-hero";
import InvestAdventureSection from "@/components/invest-adventure-section";
import InvestModelSection from "@/components/invest-model-section";
import InvestOpportunitySection from "@/components/invest-opportunity-section";
import InvestLogosSection from "@/components/sections/InvestLogosSection";
import InvestAboutSection from "@/components/sections/InvestAboutSection";
import InvestCtaSection from "@/components/sections/InvestCtaSection";
import InvestFaqSection from "@/components/sections/InvestFaqSection";
import InvestWebinarCtaSection from "@/components/sections/InvestWebinarCtaSection";
import InvestPerformanceSection from "@/components/sections/InvestPerformanceSection";
import InvestProjectSection from "@/components/sections/InvestProjectSection";
import InvestTaxationSection from "@/components/sections/InvestTaxationSection";
import InvestStatsSection from "@/components/sections/InvestStatsSection";
import InvestWaitlistModalProvider from "@/components/modals/InvestWaitlistModalProvider";
import { useEffect, useState } from "react";

const InvestPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScroll) {
        setIsScroll(true);
      } else if (window.scrollY <= 0 && isScroll) {
        setIsScroll(false);
      }
    };

    // Check initial scroll position when component mounts
    if (window.scrollY > 0 && !isScroll) {
      setIsScroll(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);
  
  return (
    <InvestWaitlistModalProvider>
      <main>
        <div className="bg-offsite-main">
          <InvestHero />
          <InvestStatsSection />
          <InvestOpportunitySection />
          <InvestWebinarCtaSection />
          <InvestModelSection />
          <InvestAdventureSection />
          <InvestTaxationSection />
          <InvestProjectSection />
          {/* <InvestLogosSection /> */}
          <InvestPerformanceSection />
          <InvestAboutSection />

          <div className="bg-gray-green overflow-hidden">
            <InvestFaqSection />
          </div>

          <InvestCtaSection />
          
          <div className="bg-dark-green overflow-hidden">
            <FooterSection
              setIsScroll={setIsScroll}
              setStop={setStop}
              showJoinCommunity={false}
              showFooterText={true}
              contactEmail="invest@momoamo.fr"
            />
          </div>
        </div>
      </main>
    </InvestWaitlistModalProvider>
  );
};

export default InvestPage;
