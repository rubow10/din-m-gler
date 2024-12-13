"use client";

import { useEffect, useState } from "react";

export default function FavoritBoliger() {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Hent favoritter fra localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredFavorites = favorites.filter((home) =>
    home.adress1.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
       

        {/* Søgefelt */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Søg i favoritter"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {filteredFavorites.map((home) => (
            <div
              key={home.id}
              className="bg-white shadow-md rounded-md flex items-center p-6"
            >
              {/* Billede */}
              <img
                src={home.images[0]?.url}
                alt={home.adress1}
                className="w-32 h-32 object-cover rounded-md"
              />

              {/* Boliginformation */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold">{home.adress1}</h3>
                <p className="text-sm text-gray-500">{home.postalcode} {home.city}</p>
                <p className="text-sm text-gray-500">
                  {home.type} · Ejerudgift: {home.cost.toLocaleString("da-DK")} kr.
                </p>
              </div>

              {/* Sektion til højre */}
              <div className="flex flex-col items-end">
                {/* Energimærke, værelser/m² og pris på samme linje */}
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs rounded font-bold bg-green-500 text-white">
                    {home.energylabel}
                  </span>
                  <p className="text-sm text-gray-600">
                    {home.rooms} værelser · {home.livingspace} m²
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    Kr. {home.price.toLocaleString("da-DK")}
                  </p>
                </div>
                {/* Knappen */}
                <button
                  onClick={() => removeFavorite(home.id)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mt-4"
                >
                  Fjern fra favoritter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





