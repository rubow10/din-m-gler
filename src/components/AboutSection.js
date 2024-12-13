"use client";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:max-w-screen-lg">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left Side - SVG Icon */}
          <div className="flex-shrink-0">
            <div className="relative bg-white p-4 shadow-lg rounded-lg">
              <img
                src="/svg/familie.svg" // Path to the SVG file
                alt="Familie Icon"
                className="w-64 h-64 mx-auto" // Adjust size of the SVG
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Vi har fulgt danskerne hjem i snart 4 årtier
            </h2>
            <h3 className="text-lg text-gray-600 font-semibold mb-4">
              Det synes vi siger noget om os!
            </h3>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center text-center">
                <img
                  src="/svg/handhus.svg" // Corrected to handhus.svg
                  alt="Handhus Icon"
                  className="w-10 h-10 mr-2" // Adjust size of the icon
                />
                <div>
                  <p className="text-2xl font-bold text-blue-900">4829</p>
                  <p className="text-sm text-gray-600">boliger solgt</p>
                </div>
              </div>
              <div className="flex items-center text-center">
                <img
                  src="/svg/hus.svg" // Path to the hus.svg file
                  alt="Hus Icon"
                  className="w-10 h-10 mr-2" // Adjust size of the icon
                />
                <div>
                  <p className="text-2xl font-bold text-blue-900">158</p>
                  <p className="text-sm text-gray-600">boliger til salg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="flex items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="/svg/sektion1.svg" // Path to sektion1.svg
              alt="Sektion 1 Icon"
              className="w-10 h-10 mr-4"
            />
            <div>
              <p className="text-lg font-bold text-blue-900">Bestil et salgstjek</p>
              <p className="text-sm text-gray-600">
                Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="/svg/sektion2.svg" // Path to sektion2.svg
              alt="Sektion 2 Icon"
              className="w-10 h-10 mr-4"
            />
            <div>
              <p className="text-lg font-bold text-blue-900">74 butikker</p>
              <p className="text-sm text-gray-600">
                Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="/svg/sektion3.svg" // Path to sektion3.svg
              alt="Sektion 3 Icon"
              className="w-10 h-10 mr-4"
            />
            <div>
              <p className="text-lg font-bold text-blue-900">Tilmeld køberkartotek</p>
              <p className="text-sm text-gray-600">
                Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}