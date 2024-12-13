"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";

export default function BoligListe() {
  const [homes, setHomes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 12000000]);
  const [propertyType, setPropertyType] = useState("");
  const [error, setError] = useState(null);

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
      default:
        return "bg-gray-500 text-white";
    }
  };

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get(
          `https://dinmaegler.onrender.com/homes?price_gte=${priceRange[0]}&price_lte=${priceRange[1]}${
            propertyType ? `&type_eq=${propertyType}` : ""
          }`
        );
        setHomes(response.data);
      } catch (err) {
        setError("Kunne ikke hente boliger. Prøv igen senere.");
      }
    };

    fetchHomes();

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, [priceRange, propertyType]);

  const toggleFavorite = (home) => {
    const updatedFavorites = favorites.some((fav) => fav.id === home.id)
      ? favorites.filter((fav) => fav.id !== home.id)
      : [...favorites, home];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Søg efter boliger</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex flex-col w-full lg:w-1/3">
            <label htmlFor="propertyType" className="text-sm font-medium mb-2">
              Ejendomstype
            </label>
            <select
              id="propertyType"
              className="border border-gray-300 rounded-md p-2"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Alle</option>
              <option value="Villa">Villa</option>
              <option value="Ejerlejlighed">Ejerlejlighed</option>
              <option value="Landejendom">Landejendom</option>
              <option value="Byhus">Byhus</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-1/3">
            <label className="text-sm font-medium mb-2">Prisinterval</label>
            <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
              <span>{priceRange[0].toLocaleString()} kr.</span>
              <span>{priceRange[1].toLocaleString()} kr.</span>
            </div>
            <input
              type="range"
              min="0"
              max="12000000"
              step="100000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((home) => (
            <div
              key={home.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
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
              <Link href={`/boliger/${home.id}`}>
                <div>
                  <img
                    src={home.images[0]?.url || "/placeholder.jpg"}
                    alt={home.adress1}
                    className="w-full h-56 object-cover cursor-pointer"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{home.adress1}</h3>
                    <p className="text-md text-gray-500 mb-2">
                      {home.postalcode} {home.city}
                    </p>
                    <p>
                      {home.type} · Ejerudgift: {home.cost.toLocaleString("da-DK")} kr.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
