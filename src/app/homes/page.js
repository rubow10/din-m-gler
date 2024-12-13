import HomesList from "../components/HomesList";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";

export default function HomesPage({ searchParams }) {
  const searchTerm = searchParams?.s || ""; // Henter søgeparameter, hvis der er en

  return (
    <div>
      <NavHeader />
      <HomesList searchTerm={searchTerm} />
      <FooterSection />
      <Footer />
    </div>
  );
}