"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer siden i at genindlæses
    setIsSubmitted(true); // Opdaterer tilstanden for at vise en besked
    setTimeout(() => setIsSubmitted(false), 5000); // Skjuler beskeden efter 5 sekunder
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Kontaktformular og info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formular Sektion */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="navn"
                className="block text-sm font-medium text-gray-700"
              >
                Navn
              </label>
              <input
                type="text"
                id="navn"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Indtast dit navn"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Indtast din email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="emne"
                className="block text-sm font-medium text-gray-700"
              >
                Emne
              </label>
              <input
                type="text"
                id="emne"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Indtast emne"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="besked"
                className="block text-sm font-medium text-gray-700"
              >
                Besked
              </label>
              <textarea
                id="besked"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Indtast din besked..."
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="nyhedsbrev" className="mr-2" />
              <label htmlFor="nyhedsbrev" className="text-sm text-gray-600">
                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Send besked
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-green-600 text-sm">
              Din besked er sendt! Vi vender tilbage til dig hurtigst muligt.
            </p>
          )}
        </div>

        {/* Kontaktinformation Sektion */}
        <div className="bg-gray-50 p-6 shadow-md rounded-md">
          <div className="text-center mb-8">
            <img
              src="/svg/telefon2.svg"
              alt="Telefon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Ring til os</h3>
            <a href="tel:+4570704000" className="text-gray-600 hover:underline">
              +45 7070 4000
            </a>
          </div>
          <div className="text-center mb-8">
            <img
              src="/svg/pil2.svg"
              alt="Mail"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Send en mail</h3>
            <a
              href="mailto:4000@dinmaegler.dk"
              className="text-gray-600 hover:underline"
            >
              4000@dinmaegler.dk
            </a>
          </div>
          <div className="text-center">
            <img
              src="/svg/kugle2.svg"
              alt="Adresse"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Besøg butikken</h3>
            <a
              href="https://www.google.com/maps?q=Standertorvet+28,+4000+Roskilde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              Standertorvet 28,
              <br />
              4000 Roskilde
            </a>
          </div>
        </div>
      </div>

      {/* Kort Sektion */}
      <div className="mt-8">
        <iframe
          className="w-full h-64 rounded-md shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1704337320653!2d12.080922315919784!3d55.64151978052374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM4JzI5LjUiTiAxMsKwMDQnNTIuOSJF!5e0!3m2!1sen!2sdk!4v1605810879076!5m2!1sen!2sdk"
          allowFullScreen=""
          loading="lazy"
          title="Din Mægler Map"
        ></iframe>
      </div>
    </div>
  );
}

