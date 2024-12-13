"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      setShowSuggestions(false); // Lukker listen, hvis query er tom
      return;
    }

    try {
      const response = await fetch("https://dinmaegler.onrender.com/homes");
      const data = await response.json();

      const filteredSuggestions = data.filter(
        (home) =>
          home.adress1.toLowerCase().includes(query.toLowerCase()) ||
          home.city.toLowerCase().includes(query.toLowerCase()) ||
          home.postalcode.toString().includes(query)
      );

      setSuggestions(filteredSuggestions);
      setShowSuggestions(true); // Vis listen kun, når der er resultater
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.trim() === "") {
      setShowSuggestions(false); // Luk listen, hvis input er tomt
    } else {
      fetchSuggestions(query); // Fetch data for gyldige input
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const query = suggestion.adress1 || suggestion.city || suggestion.postalcode;
    setSearchTerm(query);
    setShowSuggestions(false);
    router.push(`/search?search=${encodeURIComponent(query)}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://forsikring.io/wp-content/uploads/2019/08/Picture1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-4xl font-bold mb-4">Søg efter din drømmebolig</h1>
        <p className="text-lg mb-6">Søg blandt 158 boliger til salg i 74 butikker</p>
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-4 relative">
          <input
            type="text"
            placeholder="Søg fx på adresse, postnummer eller by"
            className="px-4 py-2 rounded-md text-black w-[300px] md:w-[400px] focus:outline-none"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => searchTerm.trim() && setShowSuggestions(true)} // Kun vis, hvis der er tekst
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
          >
            Søg
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-[300px] md:w-[400px] z-20">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black font-medium"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.adress1 || suggestion.city || suggestion.postalcode}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </header>
  );
}