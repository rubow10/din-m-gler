"use client";

import HeroHeader from "@components/HeroHeader";
import NavHeader from "@components/NavHeader";
import AboutSection from "@components/AboutSection";
import AllHomes from "@components/AllHomes";
import NewsletterSubscription from "@components/NewsletterSubscription";
import AgentsSection from "@components/AgentsSection";
import AppDownloadSection from "@components/AppDownloadSection";
import FooterSection from "@components/FooterSection";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div>
      <NavHeader />
      <HeroHeader />
      <AboutSection/>
      <AllHomes/>
      <NewsletterSubscription/>
      <AgentsSection/>
      <AppDownloadSection/>
      <FooterSection/>
      <Footer/>
    </div>
  );
}
