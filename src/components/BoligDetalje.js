"use client";

import { useEffect, useState } from "react";

export default function BoligDetalje({ id }) {
  const [home, setHome] = useState(null);
  const [agents, setAgents] = useState([]); // Mæglere fra API
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Slider state

  useEffect(() => {
    const fetchHomeAndAgents = async () => {
      try {
        // Fetch boligdetaljer
        const homeResponse = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
        const homeData = await homeResponse.json();
        setHome(homeData);

        // Fetch mæglere
        const agentsResponse = await fetch("https://dinmaegler.onrender.com/agents");
        const agentsData = await agentsResponse.json();
        setAgents(agentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeAndAgents();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!home) {
    return <div className="text-center">Ingen detaljer fundet.</div>;
  }

  // Slider navigation
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? home.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === home.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Slider */}
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        {home.images.length > 0 && (
          <div className="relative">
            <img
              src={home.images[currentImageIndex]?.url}
              alt={`Billede ${currentImageIndex + 1}`}
              className="w-full h-80 object-cover rounded-lg"
            />
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={handlePrevImage}
            >
              ◀
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={handleNextImage}
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Ejendomsdetaljer */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-6">
          <div className="text-left mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">{home.adress1}</h2>
            <p className="text-gray-600 text-lg">
              {home.postalcode} {home.city}
            </p>
          </div>
          <div className="flex space-x-4">
            <img src="/svg/favIkon1.svg" alt="Ikon 1" className="w-6 h-6" />
            <img src="/svg/favIkon2.svg" alt="Ikon 2" className="w-6 h-6" />
            <img src="/svg/favIkon3.svg" alt="Ikon 3" className="w-6 h-6" />
            <img src="/svg/favIkon4.svg" alt="Ikon 4" className="w-6 h-6" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-500">
              Kr. {home.price.toLocaleString("da-DK")}
            </p>
          </div>
        </div>

        {/* Layout med Beskrivelse til venstre og Mægler til højre */}
        <div className="flex flex-col lg:flex-row">
          {/* Tekst (Beskrivelse) til venstre */}
          <div className="lg:w-2/3 pr-6">
            <h3 className="text-2xl font-bold mb-4">Beskrivelse</h3>
            <p className="text-gray-600 leading-relaxed">
              {home.description || "Ingen beskrivelse tilgængelig."}
            </p>
          </div>

          {/* Mægler til højre */}
          <div className="lg:w-1/3 pl-6 border-l border-gray-300 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6">Ansvarlig Mægler</h3>
            <div className="relative bg-gray-100 p-4 shadow-md rounded-md flex">
              {/* Billede med ikon */}
              <div className="relative w-1/2 h-48 overflow-hidden">
                <img
                  src={agents[0]?.image?.url || "/placeholder-image.jpg"}
                  alt={agents[0]?.name || "Mægler billede"}
                  className="w-full h-full object-cover"
                />
                <img
                  src="/svg/sort.svg"
                  alt="Sort ikon"
                  className="absolute bottom-2 left-2 w-12 h-12 opacity-90"
                />
              </div>
              {/* Mægler info */}
              <div className="w-1/2 pl-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {agents[0]?.name || "Navn ikke tilgængelig"}
                  </h4>
                  <p className="text-sm text-gray-500">{agents[0]?.title || "Titel ikke tilgængelig"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 flex items-center">
                    <img src="/svg/phone1.svg" alt="Telefon ikon" className="mr-2 w-4 h-4" />
                    <a
                      href={`tel:${agents[0]?.phone || ""}`}
                      className="hover:underline"
                    >
                      {agents[0]?.phone || "Telefon ikke tilgængelig"}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-2">
                    <img src="/svg/arrow.svg" alt="Email ikon" className="mr-2 w-4 h-4" />
                    <a
                      href={`mailto:${agents[0]?.email || ""}`}
                      className="hover:underline"
                    >
                      {agents[0]?.email || "Email ikke tilgængelig"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}