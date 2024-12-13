"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BsHouses } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function NavHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kontrollér, om der allerede er en token i lokalstorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Fjern token og opdater login-status
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-100">
      {/* Topbar med kontaktinfo og log ind/log ud */}
      <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-2 text-sm">
          <div className="flex items-center space-x-4">
            {/* Klikbar mail og telefonnummer */}
            <a
              href="mailto:400@dinmaegler.com"
              className="hover:underline"
              aria-label="Send en email til 400@dinmaegler.com"
            >
              ✉️ 400@dinmaegler.com
            </a>
            <a
              href="tel:+4570704000"
              className="hover:underline"
              aria-label="Ring til +45 7070 4000"
            >
              📞 +45 7070 4000
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaUser className="w-5 h-5" />
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:underline text-white bg-red-500 px-2 py-1 rounded-md"
              >
                Log ud
              </button>
            ) : (
              <Link href="/login" className="hover:underline">
                Log ind
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation og logo */}
      <div className="bg-white text-black shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold">
            <Link href="/" className="flex items-center">
              <BsHouses className="w-8 h-8 mr-2" />
              Din Mægler
            </Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li>
                <Link href="/boligerTilSalg" className="hover:text-blue-500">
                  Boliger til salg
                </Link>
              </li>
              <li>
                <Link href="/medarbejder" className="hover:text-blue-500">
                  Mæglere
                </Link>
              </li>
              <li>
                <Link href="/mineFarvoritter" className="hover:text-blue-500">
                  Mine favoritter
                </Link>
              </li>
              <li>
                <Link href="/kontaktOs" className="hover:text-blue-500">
                  Kontakt os
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}