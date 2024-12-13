"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      {/* Din Mægler Sektion */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-10 h-10 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z"></path>
            </svg>
            <h2 className="text-2xl font-bold">Din Mægler</h2>
          </div>
          <p className="text-gray-700 text-center text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
      </section>

      {/* Footer Sektion */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kontaktinfo */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-lg font-bold mb-4 text-center">Kontakt os</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-white w-4 h-4" />
                </div>
                <a href="tel:+4570704000" className="text-gray-800 hover:underline">
                  <span className="font-semibold">Telefon:</span> +45 7070 4000
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white w-4 h-4" />
                </div>
                <a href="mailto:4000@dinmaegler.com" className="text-gray-800 hover:underline">
                  <span className="font-semibold">Email:</span> 4000@dinmaegler.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white w-4 h-4" />
                </div>
                <a
                  href="https://www.google.com/maps?q=Standertorvet+28,+4000+Roskilde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  <span className="font-semibold">Adresse:</span> Standertorvet 28, 4000 Roskilde
                </a>
              </li>
            </ul>
            <p className="text-gray-600 text-sm mt-6 text-center">
              Din Mægler Roskilde, er din boligbutik i lokalområdet.
            </p>
          </div>

          {/* Quick Links og DMS */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/boligerTilSalg" className="text-gray-600 hover:underline">
                  Boliger til salg
                </Link>
              </li>
              <li>
                <Link href="/medarbejder" className="text-gray-600 hover:underline">
                  Mæglere
                </Link>
              </li>
              <li>
                <Link href="/kontaktOs" className="text-gray-600 hover:underline">
                  Kontakt os
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:underline">
                  Log ind / Bliv bruger
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-sm font-medium">Medlem af</h3>
              <h3 className="text-3xl font-bold text-gray-800">DMS</h3>
              <p className="text-gray-600 text-sm">
                Dansk Mægler Sammenslutning
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}