"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importer useRouter fra next/navigation
import NavHeader from "@components/NavHeader"; // Importer NavHeader-komponenten
import FooterSection from "@components/FooterSection"; // Importer FooterSection-komponenten
import Footer from "@components/Footer"; // Importer Footer-komponenten

// AccountLogin-komponent
function AccountLogin() {
  return (
    <div
      className="w-full h-[250px] relative flex justify-center items-center text-white"
      style={{
        backgroundImage: "url('/svg/boligSalg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Account Login</h1>
        <p className="mt-2 text-base">
          <span className="text-gray-300">Home</span> <span className="mx-1">|</span>{" "}
          <span className="text-white">Login</span>
        </p>
      </div>
    </div>
  );
}

// Login-komponent
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Brug useRouter fra next/navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.jwt); // Gem token i localStorage
        console.log("Login successful. Token:", data.jwt);
        alert("Login successful!");
        router.push("/"); // Naviger til startsiden
      } else {
        const errorMessage =
          data.message?.[0]?.messages?.[0]?.message || "Login failed";
        throw new Error(errorMessage);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {/* Header */}
      <NavHeader />

      {/* Top Banner */}
      <AccountLogin />

      {/* Login Form */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Log ind på din konto</h2>
        <form onSubmit={handleLogin} className="bg-white p-8 shadow-lg rounded-md max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Adgangskode
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Log ind
          </button>
          <div className="text-center mt-4">
            <p>Log ind med:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Google</button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Facebook</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Twitter</button>
            </div>
          </div>
          <div className="text-center mt-6 text-sm">
            Har du ikke en konto? <a href="/register" className="text-blue-500">Opret bruger</a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <FooterSection />
      <Footer />
    </>
  );
}

