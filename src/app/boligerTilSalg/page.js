"use client";

import NavHeader from "@components/NavHeader";
import BoligSalgIcon from "@components/BoligSalgIcon";
import BoligListe from "@components/BoligListe";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";


export default function Home() {
  return (
    <div>
      <NavHeader />
      <BoligSalgIcon/>
      <BoligListe/>
      <FooterSection/>
      <Footer/>
    </div>
  );
}