"use client";

export default function MedarbejderIkon() {
  return (
    <div
      className="w-full h-[192px] relative flex justify-center items-center text-white"
      style={{
        backgroundImage: "url('/svg/boligSalg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text */}
      <h1 className="text-3xl font-bold relative z-10">Medarbejdere i Roskilde</h1>
    </div>
  );
}