import BoligOversigt from "@components/BoligOversigt"; // Sørg for korrekt sti
import NavHeader from "@components/NavHeader";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";

export default function BoligDetaljePage({ params }) {
  const { id } = params; // Dynamisk ID fra URL

  if (!id) {
    return <div className="text-center">Indlæser...</div>;
  }

  return (
    <div>
      <NavHeader />
      {/* Sender ID'et videre til BoligOversigt-komponenten */}
      <BoligOversigt id={id} />
      <FooterSection/>
      <Footer />
    </div>
  );
}