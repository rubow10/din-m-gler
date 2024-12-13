"use client";

import NavHeader from "@components/NavHeader";
import Footer from "@components/Footer";
import FooterSection from "@components/FooterSection";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const searchParams = useSearchParams();
  const [homes, setHomes] = useState([]);

  const getEnergyLabelColor = (label) => {
    switch (label) {
      case "A":
        return "bg-green-500 text-white";
      case "B":
        return "bg-light-green-500 text-white";
      case "C":
        return "bg-yellow-500 text-black";
      case "D":
        return "bg-orange-500 text-white";
      case "E":
        return "bg-red-500 text-white";
      case "F":
      case "G":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");
        const data = await response.json();

        const search = searchParams.get("search") || "";

        const filteredHomes = data.filter(
          (home) =>
            home.postalcode.toString().includes(search) ||
            home.adress1.toLowerCase().includes(search.toLowerCase()) ||
            home.city.toLowerCase().includes(search.toLowerCase())
        );

        setHomes(filteredHomes);
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    fetchHomes();
  }, [searchParams]);

  return (
    <div>
      <NavHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {homes.length > 0 ? (
          homes.map((home) => (
            <Link href={`/BoligDetalje/${home.id}`} key={home.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={home.images[0]?.url}
                  alt={home.adress1}
                  className="w-full h-56 object-cover cursor-pointer"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{home.adress1}</h3>
                  <p className="text-md text-gray-500 mb-2">
                    {home.postalcode} {home.city}
                  </p>
                  <p>
                    {home.type} · Ejerudgift: {home.cost} kr.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-bold ${getEnergyLabelColor(
                        home.energylabel
                      )}`}
                    >
                      {home.energylabel}
                    </span>
                    <span className="text-blue-900 bg-blue-100 px-3 py-1 rounded text-sm">
                      {home.rooms} værelser · {home.livingspace} m²
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-bold text-blue-900">
                    Kr. {home.price.toLocaleString("da-DK")}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">Ingen boliger fundet.</p>
        )}
      </div>
      <FooterSection />
      <Footer />
    </div>
  );
}