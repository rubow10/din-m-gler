

import BoligDetalje from "@components/BoligDetalje";
import NavHeader from "@components/NavHeader";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";
 // Sørg for, at stien er korrekt

export default async function BoligDetaljePage({params}) {
  const { id } = await params; // Hent ID'et fra URL'en

  if (!id) {
    return <div className="text-center">Indlæser...</div>;
  }

  return (
    <div>
        <NavHeader />
      {/* Sender ID'et videre til BoligDetalje-komponenten */}
      <BoligDetalje id={id} />
      <FooterSection/>
      <Footer/>
    </div>
  );
}