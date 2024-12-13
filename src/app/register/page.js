"use client";

import { useState } from "react";
import NavHeader from "@components/NavHeader"; // Header-komponenten
import FooterSection from "@components/FooterSection"; // Footer-sektion
import Footer from "@components/Footer"; // Footer-komponenten

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validering
    const validationErrors = {};
    if (!formData.fullname.trim()) {
      validationErrors.fullname = "Fulde navn er påkrævet.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Ugyldig emailadresse.";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Adgangskode er påkrævet.";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Adgangskode skal være mindst 6 tegn.";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Adgangskoderne matcher ikke.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Bruger registreret!"); // Midlertidig handling
    }
  };

  return (
    <>
      {/* Header */}
      <NavHeader />

      {/* Top Banner */}
      <div
        className="w-full h-[250px] relative flex justify-center items-center text-white"
        style={{
          backgroundImage: "url('/svg/boligSalg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Account Register</h1>
          <p className="mt-2 text-base">
            <span className="text-gray-300">Home</span> <span className="mx-1">|</span>{" "}
            <span className="text-white">Register</span>
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Opret bruger hos Din Mægler</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-md max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Fulde navn
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email adresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Bekræft password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Opret bruger
          </button>
        </form>
      </div>

      {/* Footer */}
      <FooterSection />
      <Footer />
    </>
  );
}