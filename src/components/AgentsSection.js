"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function AgentsSection() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // Ref til sektionen

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/agents");
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    // Rul til toppen af sektionen
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  // Bestem hvilke agenter der skal vises
  const visibleAgents = showAll ? agents : agents.slice(0, 3);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleAgents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow-lg rounded-lg text-center overflow-hidden"
          >
            {/* Billede med Link til agentens beskrivelsesside */}
            <Link href={`/maegler/${agent.id}`}>
              <div
                className="h-48 cursor-pointer"
                style={{
                  backgroundImage: `url('${agent.image.url}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title={agent.name}
              />
            </Link>
            {/* Agentdetaljer */}
            <div className="p-6">
              <Link href={`/maegler/${agent.id}`}>
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                  {agent.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mb-4">{agent.title}</p>
              <div className="flex justify-center items-center space-x-4">
                {agent.linkedin && (
                  <a
                    href={agent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Sort knap */}
      <div className="text-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          {showAll ? "Vis færre mæglere" : "Se alle mæglere"}
        </button>
      </div>
    </div>
  );
}