import React from "react";
import NavHeader from "@components/NavHeader";
import KontaktMedarbejder from "@components/KontaktMedarbejder";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";
import MaeglerDetalje from "@components/MaeglerDetalje";

export default async function MaeglerDetaljePage({ params }) {
  const { id } = params;

  if (!id) {
    return <div className="text-center">Indlæser...</div>;
  }

  return (
    <div>
      <NavHeader />
      <KontaktMedarbejder/>
      {/* Passer ID'et til MaeglerDetalje-komponenten */}
      <MaeglerDetalje id={id} />
      <FooterSection />
      <Footer />
    </div>
  );
}