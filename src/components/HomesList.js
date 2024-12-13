"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomesList({ searchTerm }) {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        let url = "https://dinmaegler.onrender.com/homes";
        if (searchTerm) {
          url += `?q=${encodeURIComponent(searchTerm)}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setHomes(data);
      } catch (err) {
        setError("Kunne ikke hente boliger. Prøv igen senere.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomes();
  }, [searchTerm]);

  if (loading) return <div className="text-center">Indlæser boliger...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">
          {searchTerm
            ? `Søgeresultater for "${searchTerm}"`
            : "Alle tilgængelige boliger"}
        </h2>
        {homes.length === 0 ? (
          <p className="text-center text-gray-600">Ingen boliger fundet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homes.map((home) => (
              <Link
                key={home.id}
                href={`/homes/${home.id}`}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div>
                  <img
                    src={home.images[0]?.url || "/placeholder.jpg"}
                    alt={home.adress1}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{home.adress1}</h3>
                    <p className="text-md text-gray-500 mb-2">
                      {home.postalcode} {home.city}
                    </p>
                    <p>
                      {home.type} · Ejerudgift: {home.cost.toLocaleString("da-DK")} kr.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}