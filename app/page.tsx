import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ResourceToolkitsSection from "@/components/resource-toolkits-section";
import PowerBuddySection from "@/components/power-buddy-section";
import DailyWellbeingSection from "@/components/daily-wellbeing-section";
import LiveUpdatesSection from "@/components/live-updates-section";
import StickyFooter from "@/components/sticky-footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ResourceToolkitsSection />
        <PowerBuddySection />
        <DailyWellbeingSection />
        <LiveUpdatesSection />
        <div className="h-20" />
      </main>
      <StickyFooter />
    </>
  );
}
