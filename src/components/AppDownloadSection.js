"use client";

export default function AppDownloadSection() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between text-white">
        {/* Tekstsektion */}
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Hold dig opdateret på salgsprocessen
          </h2>
          <p className="text-gray-300 mb-6">
            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med din
            ansvarlige mægler direkte gennem vores app. Her kan du også se
            statistikker og holde dig opdateret på interesse for din bolig alle
            vegne via vores salgsanalyser.
          </p>
          <div className="flex gap-4">
            {/* Google Play-knap */}
            <a
              href="#"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <img
                src="/svg/google.svg"
                alt="Google Play"
                className="w-5 h-5"
              />
              Google Play
            </a>
            {/* Apple Store-knap */}
            <a
              href="#"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <img
                src="/svg/apple.svg"
                alt="Apple Store"
                className="w-5 h-5"
              />
              Apple Store
            </a>
          </div>
        </div>

        {/* Billedsektion */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <img
            src="/svg/phone.svg"
            alt="Phone 1"
            className="w-40 lg:w-48 absolute left-4 lg:left-0 top-0"
          />
          <img
            src="/svg/phone2.svg"
            alt="Phone 2"
            className="w-40 lg:w-48 relative z-10"
          />
            <img
            src="/svg/phone.svg"
            alt="Phone 1"
            className="w-40 lg:w-48 absolute left-4 lg:left-0 top-0"
          />
          <img
            src="/svg/phone2.svg"
            alt="Phone 2"
            className="w-40 lg:w-48 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}