"use client";

import { useEffect, useState } from "react";

export default function BoligOversigt({ id }) {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
        const data = await response.json();
        setHome(data);
      } catch (error) {
        console.error("Error fetching home details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, [id]);

  if (loading) {
    return <div className="text-center">Indlæser...</div>;
  }

  if (!home) {
    return <div className="text-center">Ingen detaljer fundet.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{home.address}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={home.images[0]?.url || "/placeholder.jpg"}
          alt={home.address}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <p className="text-lg font-semibold">
            Type: {home.type}
          </p>
          <p>Værelser: {home.rooms}</p>
          <p>Pris: {home.price.toLocaleString()} DKK</p>
          <p>Boligareal: {home.livingspace} m²</p>
        </div>
      </div>
      <p className="mt-6">{home.description}</p>
    </div>
  );
}