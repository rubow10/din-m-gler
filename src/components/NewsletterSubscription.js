"use client";

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Indtast en gyldig emailadresse.");
      return;
    }

    // Mock API call (Erstat med en rigtig API-kald hvis nødvendigt)
    fetch("https://dinmaegler.onrender.com/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Du er nu tilmeldt nyhedsbrevet!");
          setEmail(""); // Ryd email-feltet
        } else {
          setMessage("Noget gik galt. Prøv igen.");
        }
      })
      .catch(() => {
        setMessage("Noget gik galt. Prøv igen.");
      });
  };

  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="bg-gray-800 rounded-lg py-8 px-6 md:px-12 text-white flex flex-col md:flex-row items-center justify-between">
          {/* Tekst til venstre */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Tilmeld dig vores nyhedsbrev
            </h2>
            <p className="text-sm text-gray-300">
              Hold dig opdateret på boligmarkedet med vores seneste nyheder og
              tips.
            </p>
          </div>

          {/* Formular til højre */}
          <form
            onSubmit={handleSubscription}
            className="relative flex items-center w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Indtast din email adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-[400px] px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 text-black hover:text-gray-700 focus:outline-none"
            >
              <FaArrowRightLong className="w-6 h-6" />
            </button>
          </form>
        </div>
        {message && (
          <p className="text-center mt-4 text-sm text-gray-400">{message}</p>
        )}
      </div>
    </section>
  );
}