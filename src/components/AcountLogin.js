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
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold">Account Login</h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">Home</span> <span className="mx-1">|</span> <span className="text-white">Login</span>
        </p>
      </div>
    </div>
  );
}