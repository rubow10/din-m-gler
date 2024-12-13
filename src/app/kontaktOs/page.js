"use client";

import NavHeader from "@components/NavHeader";
import KontaktIcon from "@components/KontaktIcon";
import KontaktForm from "@components/KontaktForm";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";



export default function Home() {
  return (
    <div>
      <NavHeader />
      <KontaktIcon/>
      <KontaktForm/>
      <FooterSection/>
      <Footer/>
    </div>
  );
}