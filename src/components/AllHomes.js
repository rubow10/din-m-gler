"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

export default function AllHomes() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showAllHomes, setShowAllHomes] = useState(false);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");
        const data = await response.json();
        setHomes(data);
      } catch (error) {
        console.error("Error fetching homes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomes();

    // Hent favoritter fra localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (home) => {
    const updatedFavorites = favorites.some((fav) => fav.id === home.id)
      ? favorites.filter((fav) => fav.id !== home.id)
      : [...favorites, home];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const visibleHomes = showAllHomes ? homes : homes.slice(0, 4);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleHomes.map((home) => (
            <div key={home.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFavorite(home)}
                className={`absolute top-2 right-2 p-2 rounded-full ${
                  favorites.some((fav) => fav.id === home.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
                aria-label="Like"
              >
                <FaHeart size={20} />
              </button>
              <Link href={`/BoligDetalje/${home.id}`}>
                <div>
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
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {showAllHomes ? (
            <button
              onClick={() => setShowAllHomes(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Vis Færre
            </button>
          ) : (
            <button
              onClick={() => setShowAllHomes(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Vis Flere
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
