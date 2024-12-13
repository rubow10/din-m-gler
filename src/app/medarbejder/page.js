"use client";

import NavHeader from "@components/NavHeader";
import MedarbejderIkon from "@components/MedarbejderIkon";
import Medarbejdere from "@components/Medarbejdere";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";



export default function Home() {
  return (
    <div>
      <NavHeader />
      <MedarbejderIkon/>
      <Medarbejdere/>
      <FooterSection/>
      <Footer/>
    </div>
  );
}