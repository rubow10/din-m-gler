"use client";

import React, { useEffect, useState } from "react";

export default function MaeglerDetalje({ id }) {
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
        const data = await response.json();
        setAgent(data);
      } catch (error) {
        console.error("Error fetching agent:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [id]);

  if (loading) {
    return <div className="text-center">Indlæser...</div>;
  }

  if (!agent) {
    return <div className="text-center">Ingen data fundet for denne mægler.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Venstre sektion */}
        <div className="bg-white shadow-md rounded-md p-6 lg:col-span-2">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Billede med SVG-overlay */}
            <div className="relative w-full h-80 bg-gray-100 rounded-md overflow-hidden mb-6 lg:mb-0 lg:mr-6">
              <img
                src={agent.image?.url || "/placeholder-image.jpg"}
                alt={agent.name || "Mægler billede"}
                className="w-full h-full object-cover"
              />
              <img
                src="/svg/sort.svg"
                alt="Sort ikon"
                className="absolute bottom-2 left-2 w-12 h-12 opacity-90"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">{agent.name}</h2>
              <p className="text-gray-600 mb-4">{agent.title}</p>
              <p className="text-gray-500">{agent.description}</p>
            </div>
          </div>

          {/* Kontaktoplysninger */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Kontakt {agent.name}</h3>
            <div className="flex flex-col space-y-4">
              {/* Telefon */}
              <div className="flex items-center">
                <img
                  src="/svg/phone1.svg"
                  alt="Telefon ikon"
                  className="w-6 h-6 mr-4"
                />
                <a
                  href={`tel:${agent.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {agent.phone || "Telefon ikke tilgængelig"}
                </a>
              </div>

              {/* E-mail */}
              <div className="flex items-center">
                <img
                  src="/svg/arrow.svg"
                  alt="E-mail ikon"
                  className="w-6 h-6 mr-4"
                />
                <a
                  href={`mailto:${agent.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {agent.email || "Email ikke tilgængelig"}
                </a>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Send en besked til {agent.name}</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Indtast navn"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Indtast email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Hvad drejer din henvendelse sig om?"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Skriv din besked her..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
              >
                Send besked
              </button>
            </form>
          </div>
        </div>

        {/* Højre sektion */}
        <div className="space-y-6">
          {/* Søgefelt */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">Søg Ejendom</h3>
            <input
              type="text"
              placeholder="Skriv her..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Blå firkant med SVG */}
          <div className="bg-blue-900 text-white shadow-md rounded-md p-6 text-center">
            <h3 className="text-base font-semibold mb-2">
              Find Den Bedste Ejendom Til Leje Eller Køb
            </h3>
            <p className="text-sm mb-2">Ring til os nu</p>
            <a
              href="tel:+00123456789"
              className="text-lg font-bold flex items-center justify-center hover:underline"
            >
              <img src="/svg/phone1.svg" alt="Telefon ikon" className="w-6 h-6 mr-2" />
              +00 123 456 789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}