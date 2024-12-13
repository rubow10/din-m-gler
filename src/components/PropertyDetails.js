"use client";

export default function PropertyDetails() {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Ejendomsdetaljer */}
            <div className="bg-white shadow-md p-6 rounded-md">
                {/* Flex container for venstre, midten og højre */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-6">
                    {/* Venstre: Adresse */}
                    <div className="text-left mb-4 lg:mb-0">
                        <h2 className="text-2xl font-bold">Klosteringen 234</h2>
                        <p className="text-gray-600 text-lg">4000 Roskilde</p>
                    </div>

                    {/* Midten: Ikoner */}
                    <div className="flex space-x-4">
                        <img src="/svg/favIkon1.svg" alt="Ikon 1" className="w-6 h-6" />
                        <img src="/svg/favIkon2.svg" alt="Ikon 2" className="w-6 h-6" />
                        <img src="/svg/favIkon3.svg" alt="Ikon 3" className="w-6 h-6" />
                        <img src="/svg/favIkon4.svg" alt="Ikon 4" className="w-6 h-6" />
                    </div>

                    {/* Højre: Pris */}
                    <div className="text-right">
                        <p className="text-3xl font-bold text-blue-500">Kr. 4.567.890</p>
                    </div>
                </div>

                {/* Liste med detaljer */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="p-2 font-medium">Sagsnummer:</td>
                                <td className="p-2">1234567890</td>
                                <td className="p-2 font-medium">Udbetaling:</td>
                                <td className="p-2">Kr. 500.000</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-medium">Boligareal:</td>
                                <td className="p-2">128 m²</td>
                                <td className="p-2 font-medium">Brutto ex ejerudgift:</td>
                                <td className="p-2">Kr. 10.371</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-medium">Grundareal:</td>
                                <td className="p-2">748 m²</td>
                                <td className="p-2 font-medium">Netto ex ejerudgift:</td>
                                <td className="p-2">Kr. 9.036</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-medium">Rum/værelser:</td>
                                <td className="p-2">4/5</td>
                                <td className="p-2 font-medium">Ejerudgift:</td>
                                <td className="p-2">Kr. 7.105</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-medium">Antal Plan:</td>
                                <td className="p-2">3</td>
                                <td className="p-2 font-medium">Energi:</td>
                                <td className="p-2">A</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-medium">Kælder:</td>
                                <td className="p-2">1968</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Flex container for Beskrivelse og Ansvarlig mægler */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Beskrivelse */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Beskrivelse</h3>
                    <p className="text-gray-600 leading-relaxed">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more or less normal
                        distribution of letters as opposed to using 'Content here, content
                        here'.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly
                        believable.
                    </p>
                </div>

                {/* Ansvarlig mægler */}
                <div
                    className="bg-gray-100 p-6 rounded-md shadow-md flex flex-col items-center"
                    style={{ width: "730px", height: "408px" }}
                >
                    <h4 className="text-lg font-bold mb-4 self-start">Ansvarlig mægler</h4>
                    <div className="flex items-center space-x-4">
                        <img
                            src="/svg/mand.svg"
                            alt="Mægler"
                            className="w-32 h-32 object-cover rounded-md"
                        />
                        <div>
                            <p className="font-semibold text-lg">Peter Sørensen</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Statsautoriseret ejendomsmægler
                            </p>
                            <div className="flex items-center space-x-2">
                                <img src="/svg/mobil.svg" alt="Mobil ikon" className="w-5 h-5" />
                                <p className="text-gray-600 text-sm">+45 7070 4012</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <img src="/svg/pil.svg" alt="Pil ikon" className="w-5 h-5" />
                                <p className="text-blue-500 text-sm">peter@dinmaegler.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
}