"use client";


import NavHeader from "@components/NavHeader";
import MineFarvoritter from "@components/MineFarvoritter";
import FavoritBoliger from "@components/FavoritBoliger";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";

export default function Home() {
  return (
    <div>
      <NavHeader />
      <MineFarvoritter />
      <FavoritBoliger/>
      <FooterSection />
      <Footer />
    </div>
  );
}